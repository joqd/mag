<script setup lang="ts">
interface Post {
	title?: string;
	description?: string;
	path?: string;
	date?: string;
}

interface Props {
	posts?: Post[];
}

const props = withDefaults(defineProps<Props>(), {
	posts: () => [],
});

const allPostsLoaded = ref(false);
</script>

<template>
	<div class="flex justify-between">
		<h1 class="text-sm font-medium opacity-70 flex items-center px-[6px]">
			Latest
		</h1>
		<div>
			<UButton
				variant="ghost"
				color="neutral"
				class="w-[30px] h-[30px] cursor-pointer p-0 m-0 items-center justify-center"
			>
				<IconsSearch class="w-[14px] h-[14px]" />
			</UButton>
		</div>
	</div>
	<div
		class="w-full mt-[12px] px-[20px] py-[16px] border-2 border-default rounded-xl space-y-5"
	>
		<!-- posts -->
		<div v-if="props.posts.length" class="space-y-4">
			<template
				v-for="(post, index) in props.posts"
				:key="post.path ?? post.title"
			>
				<PostCard :post="post" :featured="index === 0" />
				<USeparator v-if="index < props.posts.length - 1" size="sm" />
			</template>
		</div>
		<div v-else class="text-sm opacity-70">No posts yet.</div>

		<!-- load more -->
		<UButton
			:disabled="allPostsLoaded"
			variant="solid"
			color="primary"
			class="w-full cursor-pointer"
		>
			<span class="mx-auto">Load More</span>
		</UButton>
	</div>
</template>
