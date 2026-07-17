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
		apiBase: process.env.API_BASE || "http://127.0.0.1:8000/api/",
		public: {},
	},
});
