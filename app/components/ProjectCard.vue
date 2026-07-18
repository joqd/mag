<script setup lang="ts">
import type { Project } from "~/types/project";

interface Props {
	project: Project;
}

const props = defineProps<Props>();

type BadgeColor =
	| "neutral"
	| "primary"
	| "secondary"
	| "success"
	| "info"
	| "warning"
	| "error";

const statusColor: Record<NonNullable<Project["status"]>, BadgeColor> = {
	"In production": "success",
	Completed: "neutral",
	"Open source": "info",
	"In progress": "warning",
};
</script>

<template>
	<div
		class="group border-2 border-default rounded-xl overflow-hidden flex flex-col h-full transition-colors hover:border-primary/50"
	>
		<!-- header: real image or a generated pattern with an icon -->
		<div class="relative h-[160px] w-full overflow-hidden bg-elevated">
			<img
				v-if="project.image"
				:src="project.image"
				:alt="project.title"
				class="w-full h-full object-cover"
			/>
			<div
				v-else
				class="w-full h-full flex items-center justify-center bg-[radial-gradient(circle,_var(--ui-border)_1px,_transparent_1px)] [background-size:16px_16px]"
			>
				<UIcon
					:name="project.icon ?? 'i-lucide-code'"
					class="w-12 h-12 opacity-20 group-hover:opacity-30 transition-opacity"
				/>
			</div>

			<UBadge
				v-if="project.status"
				:color="statusColor[project.status]"
				variant="solid"
				size="sm"
				class="absolute top-3 left-3"
			>
				{{ project.status }}
			</UBadge>
		</div>

		<!-- body -->
		<div class="flex flex-col flex-1 p-[20px] space-y-3">
			<h3 class="text-lg font-semibold">{{ project.title }}</h3>
			<p class="text-sm opacity-70 line-clamp-3">
				{{ project.description }}
			</p>

			<div class="flex flex-wrap gap-1.5 pt-1">
				<UBadge
					v-for="tag in project.tags"
					:key="tag"
					color="neutral"
					variant="soft"
					size="sm"
				>
					{{ tag }}
				</UBadge>
			</div>

			<!-- footer pinned to bottom -->
			<div class="flex gap-2 pt-3 mt-auto">
				<UButton
					v-if="project.links.github"
					:to="project.links.github"
					target="_blank"
					icon="i-lucide-github"
					color="neutral"
					variant="soft"
					size="sm"
					class="cursor-pointer"
				>
					Code
				</UButton>
				<UButton
					v-if="project.links.demo"
					:to="project.links.demo"
					target="_blank"
					icon="i-lucide-external-link"
					color="primary"
					variant="soft"
					size="sm"
					class="cursor-pointer"
				>
					Live Demo
				</UButton>
			</div>
		</div>
	</div>
</template>
