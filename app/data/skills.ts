export interface SkillGroup {
	category: string;
	icon: string;
	items: string[];
}

export const skillGroups: SkillGroup[] = [
	{
		category: "Languages & Frameworks",
		icon: "i-lucide-code-2",
		items: ["Python", "Django", "Go", "Fiber/Echo", "Typescript", "NuxtJS"],
	},
	{
		category: "Data & Storage",
		icon: "i-lucide-database",
		items: ["PostgreSQL", "Redis", "MongoDB"],
	},
	{
		category: "Infrastructure",
		icon: "i-lucide-server",
		items: ["Docker", "Nginx", "CI/CD", "Linux"],
	},
	{
		category: "Tools & Practices",
		icon: "i-lucide-wrench",
		items: ["Git", "REST APIs", "System Automation", "Web Scraping"],
	},
];
