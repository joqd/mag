import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	modules: ["@nuxt/ui", "nuxt-swiper", "motion-v/nuxt", "@nuxt/content"],
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	typescript: { strict: true },
	css: ["~/assets/css/main.css"],
	vite: {
		plugins: [tailwindcss()],
	},
	app: {
		pageTransition: { name: "page", mode: "out-in" },
	},
	runtimeConfig: {
		telegramBotToken: "",
		telegramChatId: "",
		httpProxy: "",
	},
	nitro: {
		preset: "cloudflare_module",
		cloudflare: {
			deployConfig: true,
			nodeCompat: true,
			wrangler: {
				name: "mag",
				compatibility_flags: ["nodejs_compat"],
				d1_databases: [
					{
						binding: "nuxt_content_db",
						database_name: "nuxt-content-db",
						database_id: "565a1ab6-dc89-4831-ba0d-0af63ac899ad",
					},
				],
			},
		},
	},
});
