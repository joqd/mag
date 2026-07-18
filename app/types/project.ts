export interface Project {
	slug: string;
	title: string;
	description: string;
	image?: string;
	icon?: string;
	tags: string[];
	status?: "In production" | "Completed" | "Open source" | "In progress";
	links: {
		github?: string;
		demo?: string;
	};
}
