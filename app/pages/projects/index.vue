<script setup lang="ts">
import { projects } from "~/data/projects";

useHead({
	title: "Projects | Abolfazl's Blog",
	meta: [
		{
			name: "description",
			content: "A selection of backend projects and tools I've built.",
		},
	],
});

definePageMeta({
	sitemap: {
		changefreq: "weekly",
		priority: 1.0,
	},
});
</script>

<template>
	<div class="space-y-6">
		<div class="space-y-2">
			<h1 class="text-3xl font-semibold">Projects</h1>
			<p class="text-sm opacity-70">
				A selection of backend systems, tools, and automations I've
				built — mostly Python and Django, focused on reliability over
				flash.
			</p>
		</div>

		<div v-if="projects.length" class="grid grid-cols-1 gap-6">
			<ProjectCard
				v-for="project in projects"
				:key="project.slug"
				:project="project"
			/>
		</div>

		<div
			v-else
			class="w-full px-[20px] py-[24px] border-2 border-dashed border-default rounded-xl text-center text-sm opacity-70"
		>
			Projects are coming soon.
		</div>
	</div>
</template>
