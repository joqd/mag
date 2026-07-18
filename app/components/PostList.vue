<script setup lang="ts">
interface Post {
	title?: string;
	description?: string;
	path?: string;
	date?: string;
}

interface Props {
	posts?: Post[];
	show_label?: boolean;
	show_search_icon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	posts: () => [],
});

const PAGE_SIZE = 5;
const visibleCount = ref(PAGE_SIZE);

const visiblePosts = computed(() => props.posts.slice(0, visibleCount.value));
const allPostsLoaded = computed(() => visibleCount.value >= props.posts.length);
const showLoadMore = computed(() => props.posts.length > PAGE_SIZE);

function loadMore() {
	visibleCount.value = Math.min(
		visibleCount.value + PAGE_SIZE,
		props.posts.length,
	);
}
</script>

<template>
	<div v-if="props.show_label || props.show_search_icon" class="flex justify-between mb-[12px]">
		<h1
			v-if="props.show_label"
			class="text-sm font-medium opacity-70 flex items-center px-[6px]"
		>
			Latest Posts
		</h1>
		<div v-if="props.show_search_icon">
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
		class="w-full px-[20px] py-[16px] border-2 border-default rounded-xl space-y-5"
	>
		<!-- posts -->
		<div v-if="visiblePosts.length" class="space-y-4">
			<template
				v-for="(post, index) in visiblePosts"
				:key="post.path ?? post.title"
			>
				<PostCard :post="post" :featured="index === 0" />
				<USeparator v-if="index < visiblePosts.length - 1" size="sm" />
			</template>
		</div>
		<div v-else class="text-sm opacity-70">No posts yet.</div>

		<!-- load more -->
		<UButton
			v-if="showLoadMore"
			:disabled="allPostsLoaded"
			variant="solid"
			color="primary"
			class="w-full cursor-pointer"
			@click="loadMore"
		>
			<span class="mx-auto">Load More</span>
		</UButton>
	</div>
</template>
