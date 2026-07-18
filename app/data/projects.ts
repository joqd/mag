import type { Project } from "~/types/project";

export const projects: Project[] = [
	{
		slug: "healifa",
		title: "Healifa",
		description:
			"Healthcare platform — joined mid-development to design database schemas, build REST APIs, and implement backend features using Django. Improved infrastructure by configuring Nginx, setting up CI/CD pipelines, and integrating PostgreSQL, Redis, and Elasticsearch for reliability and performance.",
		image: "/images/projects/healifa.png",
		icon: "i-lucide-heart-pulse",
		tags: ["Django", "PostgreSQL", "Nginx", "Redis", "Elasticsearch"],
		status: "In production",
		links: {
			github: undefined,
			demo: undefined,
		},
	},
	{
		slug: "adagio",
		title: "Adagio Style Ecommerce",
		description:
			"E-commerce backend — implemented product catalog and inventory management, user authentication and authorization, order processing, and payment integration. Built for reliability and scalability with Django, PostgreSQL, and Nginx, and designed for low-maintenance deployments and secure transactions.",
		image: "/images/projects/adagio.png",
		icon: "i-lucide-bot",
		tags: ["Django", "PostgreSQL", "Nginx"],
		status: "In progress",
		links: {
			github: undefined,
			demo: undefined,
		},
	},
	{
		slug: "zen",
		title: "Authentication System",
		description:
			"Lightweight authentication and role-based authorization system providing user management, secure password handling, session management, and RBAC. Built for simplicity and extensibility using Go, Fiber, and PostgreSQL.",
		icon: "i-lucide-lock",
		tags: ["Go", "Fiber", "PostgreSQL"],
		status: "Completed",
		links: {
			github: "https://github.com/joqd/zen",
		},
	},
	{
		slug: "slovo",
		title: "Russian Dictionary & Learning Platform",
		description:
			"Russian language learning platform and dictionary with vocabulary practice, progress tracking, and study tools. Implements backend services and APIs in Go with Gin, and stores data in MongoDB for flexible content management.",
		icon: "i-lucide-graduation-cap",
		tags: ["Go", "Gin", "MongoDB"],
		status: "Completed",
		links: {
			github: "https://github.com/joqd/slovo",
		},
	},
	{
		slug: "hair_color_changer",
		title: "Hair Color Changer Using AI",
		description:
			"Image-processing API that changes hair color using AI-based segmentation and recoloring techniques. Offers image upload, processing endpoints, and a simple REST interface; implemented with Python and Django and integrates with AI services.",
		icon: "i-lucide-bot",
		tags: ["Python", "Django", "SQLite", "OpenAI"],
		status: "Completed",
		links: {
			github: "https://github.com/joqd/hair_color",
		},
	},
	{
		slug: "mag",
		title: "Current Website :)",
		description:
			"Personal blog and resume website showcasing projects, writing, and professional experience. Built with TypeScript, NuxtJS, and TailwindCSS for a responsive, content-focused experience.",
		image: "/images/projects/mag.png",
		icon: "i-lucide-bot",
		tags: ["Typescript", "NuxtJS", "TailwindCSS"],
		status: "Completed",
		links: {
			github: "https://github.com/joqd/mag",
		},
	},
];
