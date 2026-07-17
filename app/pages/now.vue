<script setup lang="ts">
import type { TimelineItem } from "@nuxt/ui";

const items = ref<TimelineItem[]>([
	{
		date: "2018",
		title: "Started Programming Journey",
		description:
			"Began my software development journey with Python, building a strong foundation in programming fundamentals, problem solving, and software design principles.",
		icon: "i-lucide-rocket",
	},
	{
		date: "2020",
		title: "Exploring Real-World Projects",
		description:
			"Developed Telegram bots, web crawlers, automation tools, and game modifications. These projects strengthened my skills in backend development, API integration, data processing, and system automation.",
		icon: "i-lucide-chart-spline",
	},
	{
		date: "2022",
		title: "Freelance Development",
		description:
			"Worked with clients on web applications, automation solutions, Telegram bots, and data collection systems. Gained experience in delivering production-ready software, understanding client requirements, and maintaining long-term projects.",
		icon: "i-lucide-saudi-riyal",
		to: "/projects/healifa",
		slot: "sample" as const,
	},
	{
		date: "2024 - Present",
		title: "Backend Developer at Healifa",
		description:
			"Joined the Healifa platform as a Django Developer and contributed to the development of a large-scale healthcare project. Responsibilities included backend development, database design and optimization, infrastructure management, Nginx configuration, CI/CD pipelines, deployment, and system maintenance.",
		icon: "i-lucide-handshake",
		slot: "healifa-gallery" as const,
	},
	{
		date: "Present",
		title: "Open to New Opportunities",
		description:
			"Currently seeking backend engineering opportunities where I can contribute to building reliable, scalable products. Open to both remote and on-site roles and excited to collaborate with ambitious teams.",
		icon: "i-lucide-briefcase-business",
	},
]);
</script>

<template>
	<UTimeline :items="items">
		<template #sample-title="{ item }: { item: TimelineItem }">
			<div class="flex items-center gap-1">
				<span>{{ item.title }}</span>

				<NuxtLink
					to="/posts/sample-ecommerce"
					class="text-primary ml-1 flex items-center text-sm gap-0.5"
				>
					<Icon size="15" name="i-lucide-swatch-book" />
					Sample
				</NuxtLink>
			</div>
		</template>

		<template #healifa-gallery-title="{ item }: { item: TimelineItem }">
			<div class="flex items-center gap-1">
				<span>{{ item.title }}</span>

				<NuxtLink
					to="/posts/healifa-gallery"
					class="text-primary ml-1 flex items-center text-sm gap-0.5"
				>
					<Icon size="15" name="i-lucide-images" />
					Gallery
				</NuxtLink>
			</div>
		</template>
	</UTimeline>
</template>
