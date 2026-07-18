import { z } from "zod";
import { ProxyAgent, fetch as undiciFetch } from "undici";

const schema = z.object({
	name: z.string().trim().min(2, "Name is too short").max(100),
	email: z.string().trim().email("Invalid email address"),
	message: z.string().trim().min(10, "Message is too short").max(2000),
	website: z.string().max(0).optional(), // honeypot
	startedAt: z.number(),
});

const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string) {
	const now = Date.now();
	const timestamps = (rateLimitMap.get(ip) ?? []).filter(
		(t) => now - t < RATE_LIMIT_WINDOW_MS,
	);

	if (timestamps.length >= RATE_LIMIT_MAX) {
		rateLimitMap.set(ip, timestamps);
		return true;
	}

	timestamps.push(now);
	rateLimitMap.set(ip, timestamps);
	return false;
}

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const parsed = schema.safeParse(body);

	if (!parsed.success) {
		throw createError({
			statusCode: 400,
			statusMessage: "Invalid form data",
		});
	}

	const { name, email, message, website, startedAt } = parsed.data;

	if (website) {
		return { success: true };
	}

	const elapsed = Date.now() - startedAt;
	if (elapsed < 3000) {
		return { success: true };
	}

	const ip =
		getRequestHeader(event, "x-forwarded-for")?.split(",")[0]?.trim() ??
		event.node.req.socket.remoteAddress ??
		"unknown";

	if (isRateLimited(ip)) {
		throw createError({
			statusCode: 429,
			statusMessage: "Too many requests. Please try again later.",
		});
	}

	const config = useRuntimeConfig();
	const botToken = config.telegramBotToken;
	const chatId = config.telegramChatId;
	const proxyUrl = config.httpProxy;

	if (!botToken || !chatId) {
		throw createError({
			statusCode: 500,
			statusMessage: "Server is not configured to send messages",
		});
	}

	const text = [
		"📩 New contact form message",
		"",
		`Name: ${name}`,
		`Email: ${email}`,
		"",
		message,
	].join("\n");

	const dispatcher = proxyUrl ? new ProxyAgent(proxyUrl) : undefined;

	let response: Awaited<ReturnType<typeof undiciFetch>>;

	try {
		response = await undiciFetch(
			`https://api.telegram.org/bot${botToken}/sendMessage`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ chat_id: chatId, text }),
				...(dispatcher ? { dispatcher } : {}),
			},
		);
	} catch (error) {
		console.error("Telegram request failed:", error);
		throw createError({
			statusCode: 502,
			statusMessage: "Could not reach Telegram servers",
		});
	}

	if (!response.ok) {
		const errorBody = await response.text().catch(() => "");
		console.error("Telegram API responded with an error:", errorBody);
		throw createError({
			statusCode: 502,
			statusMessage: "Failed to send message",
		});
	}

	return { success: true };
});
