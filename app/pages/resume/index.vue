<!-- app/pages/resume.vue -->
<script setup lang="ts">
import { journey } from "~/data/journey";
import { skillGroups } from "~/data/skills";
import { projects } from "~/data/projects";

const featuredProjects = computed(() => projects.slice(0, 3));

useHead({
	title: "Resume | Abolfazl's Blog",
});

useSeoMeta({
	title: "Abolfazl Shahbazi | ابوالفضل شهبازی — Backend Developer",
	description:
		"Abolfazl Shahbazi (ابوالفضل شهبازی) — Backend Developer specializing in Python and Django. Resume, projects, and journey.",
	ogTitle: "Abolfazl Shahbazi — Backend Developer",
	ogDescription:
		"Python & Django backend developer. See my resume, skills, and projects.",
	ogImage: "https://rodia.ir/images/me.jpg",
});

definePageMeta({
	sitemap: {
		changefreq: "weekly",
		priority: 1.0,
	},
});
</script>

<template>
	<div class="space-y-16">
		<!-- Hero -->
		<section class="space-y-5">
			<div class="flex items-center gap-2">
				<span class="relative flex h-2.5 w-2.5">
					<span
						class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"
					></span>
					<span
						class="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"
					></span>
				</span>
				<span class="text-sm opacity-70"
					>Open to new opportunities</span
				>
			</div>

			<div class="space-y-2">
				<h1 class="text-4xl font-bold">Abolfazl</h1>
				<p class="text-lg opacity-80 max-w-2xl">
					Backend Developer focused on Python &amp; Django — building
					reliable APIs, databases, and infrastructure that hold up in
					production.
				</p>
			</div>

			<div class="flex flex-wrap gap-3 pt-1">
				<UButton to="/contact" icon="i-lucide-mail" size="lg">
					Get in touch
				</UButton>
				<UButton
					to="/files/abolfazl-resume.pdf"
					download="Abolfazl-Resume.pdf"
					target="_blank"
					icon="i-lucide-download"
					color="neutral"
					variant="soft"
					size="lg"
				>
					Download CV
				</UButton>
				<UButton
					to="/projects"
					icon="i-lucide-folder-git-2"
					color="neutral"
					variant="soft"
					size="lg"
				>
					View projects
				</UButton>
			</div>
		</section>

		<!-- Quick facts -->
		<section class="grid grid-cols-2 gap-4">
			<div
				class="border-2 border-default rounded-xl px-4 py-5 text-center"
			>
				<p class="text-2xl font-semibold">6+</p>
				<p class="text-xs opacity-70 mt-1">Years coding</p>
			</div>
			<div
				class="border-2 border-default rounded-xl px-4 py-5 text-center"
			>
				<p class="text-2xl font-semibold">2+</p>
				<p class="text-xs opacity-70 mt-1">Years professional</p>
			</div>
			<div
				class="border-2 border-default rounded-xl px-4 py-5 text-center"
			>
				<p class="text-2xl font-semibold">Django</p>
				<p class="text-xs opacity-70 mt-1">Core stack</p>
			</div>
			<div
				class="border-2 border-default rounded-xl px-4 py-5 text-center"
			>
				<p class="text-2xl font-semibold">Remote</p>
				<p class="text-xs opacity-70 mt-1">& on-site</p>
			</div>
		</section>

		<!-- Skills -->
		<section class="space-y-4">
			<h2 class="text-xl font-semibold">Skills</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div
					v-for="(group, index) in skillGroups"
					:key="group.category"
					:class="[
						'border-2 border-default rounded-xl px-[20px] py-[16px] space-y-3',
						index === 0 || index === 3 ? 'sm:col-span-2' : '',
					]"
				>
					<div class="flex items-center gap-2 opacity-80">
						<UIcon :name="group.icon" class="w-4 h-4" />
						<h3 class="text-sm font-medium">
							{{ group.category }}
						</h3>
					</div>
					<div class="flex flex-wrap gap-1.5">
						<UBadge
							v-for="item in group.items"
							:key="item"
							color="neutral"
							variant="soft"
							size="sm"
						>
							{{ item }}
						</UBadge>
					</div>
				</div>
			</div>
		</section>

		<!-- Journey -->
		<section class="space-y-4">
			<h2 class="text-xl font-semibold">My Journey</h2>
			<UTimeline :items="journey"></UTimeline>
		</section>

		<!-- Featured projects -->
		<section class="space-y-4">
			<div class="flex justify-between items-center">
				<h2 class="text-xl font-semibold">Featured Projects</h2>
				<NuxtLink
					to="/projects"
					class="text-sm text-primary flex items-center gap-1 hover:underline"
				>
					View all
					<Icon size="14" name="i-lucide-arrow-right" />
				</NuxtLink>
			</div>

			<div v-if="featuredProjects.length" class="grid grid-cols-1 gap-6">
				<ProjectCard
					v-for="project in featuredProjects"
					:key="project.slug"
					:project="project"
				/>
			</div>
		</section>

		<!-- Closing CTA -->
		<section
			class="border-2 border-default rounded-xl px-[20px] py-[32px] text-center space-y-4"
		>
			<h2 class="text-xl font-semibold">
				Let's build something reliable together
			</h2>
			<p class="text-sm opacity-70 max-w-md mx-auto">
				If you think I could be a good fit for your team, I'd love to
				hear from you.
			</p>
			<UButton
				to="/contact"
				icon="i-lucide-mail"
				size="lg"
				class="mx-auto"
			>
				Contact me
			</UButton>
		</section>
	</div>
</template>
