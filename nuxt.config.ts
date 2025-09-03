import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	modules: ["@nuxt/ui", "nuxt-swiper", "motion-v/nuxt"],
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	vite: {
		plugins: [tailwindcss()],
	},
	app: {
		pageTransition: { name: "page", mode: "out-in" },
	},
});
