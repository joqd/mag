export function usePersonSchema() {
	useSchemaOrg([
		definePerson({
			name: "Abolfazl Shahbazi",
			alternateName: ["ابوالفضل شهبازی"],
			url: "https://rodia.ir",
			image: "https://rodia.ir/images/me.jpg",
			jobTitle: "Backend Developer",
			sameAs: ["https://github.com/joqd"],
		}),
	]);
}
