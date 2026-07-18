import type { Project } from "~/types/project";

export const projects: Project[] = [
	{
		slug: "healifa",
		title: "Healifa",
		description:
			"A healthcare platform I joined mid-development, contributing to database design, API development, and infrastructure. Managed Nginx configuration and CI/CD pipelines alongside core backend features as a Django developer.",
		icon: "i-lucide-heart-pulse",
		tags: ["Django", "PostgreSQL", "Nginx", "CI/CD", "Docker"],
		status: "In production",
		links: {
			github: undefined,
			demo: undefined,
		},
	},
	{
		slug: "telegram-automation-bot",
		title: "Telegram Automation Suite",
		description:
			"A set of Telegram bots for automating repetitive tasks, from content scraping to scheduled notifications, built with a focus on reliability and low-maintenance deployment.",
		icon: "i-lucide-bot",
		tags: ["Python", "Telegram API", "Redis", "Docker"],
		status: "Open source",
		links: {
			github: "https://github.com/yourusername/telegram-automation-bot",
			demo: undefined,
		},
	},
	{
		slug: "web-crawler-toolkit",
		title: "Web Crawler Toolkit",
		description:
			"A modular web scraping and crawling toolkit designed for extracting structured data at scale, with built-in rate limiting and proxy rotation support.",
		icon: "i-lucide-spider",
		tags: ["Python", "Scrapy", "PostgreSQL"],
		status: "Completed",
		links: {
			github: "https://github.com/yourusername/web-crawler-toolkit",
		},
	},
];
