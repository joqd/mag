<script setup lang="ts">
interface Post {
	title?: string;
	description?: string;
	path?: string;
	date?: string;
}

interface Props {
	featured?: boolean;
	post?: Post;
}

const props = withDefaults(defineProps<Props>(), {
	featured: false,
	post: () => ({}),
});
</script>

<template>
	<div class="space-y-3">
		<div class="space-y-1">
			<div
				class="text-md font-bold cursor-default leading-5 flex items-center space-x-2"
			>
				<div>
					<NuxtLink :to="props.post?.path ?? '/posts/'" class="link">
						{{ props.post?.title || "Untitled Post" }}
					</NuxtLink>
				</div>
			</div>
			<div class="text-xs cursor-default opacity-90">
				<span v-if="props.post?.date">{{ props.post.date }}</span>
				<span v-else>Recently published</span>
			</div>
		</div>

		<div class="text-sm font-medium opacity-90">
			{{ props.post?.description || "No description available yet." }}
		</div>

		<div class="flex space-x-1">
			<div v-if="props.featured">
				<UTooltip
					arrow
					disableClosingTrigger
					:ui="tooltipUi"
					:delay-duration="0"
					:content="{
						align: 'start',
						side: 'top',
						sideOffset: 8,
					}"
					text="Featured Post"
				>
					<UButton
						color="neutral"
						variant="soft"
						class="cursor-default w-[27.99px] h-[27.99px] p-0 m-0 items-center justify-center"
					>
						<IconsFeatured class="w-[12px] h-[12px]" />
					</UButton>
				</UTooltip>
			</div>

			<div>
				<NuxtLink :to="props.post?.path ?? '/posts/'">
					<UButton
						color="neutral"
						variant="soft"
						size="sm"
						class="cursor-pointer"
					>
						Read More
					</UButton>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>
