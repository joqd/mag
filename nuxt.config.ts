import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
				modules: [
				 "@nuxt/ui",
				 "nuxt-swiper",
				 "motion-v/nuxt",
				 "@nuxt/content",
				 "@nuxtjs/seo",
				],
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
});