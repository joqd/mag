<script setup>
const { data: posts } = await useAsyncData("posts", () =>
	queryCollection("posts").all(),
);

useHead({
	title: "Posts | Abolfazl's Blog",
});
</script>

<template>
	<div class="space-y-4">
		<div class="space-y-2">
			<h1 class="text-3xl font-semibold">Posts</h1>
			<p class="text-sm opacity-70">
				A collection of things I've learned, built, broken, fixed, and
				wondered about along the way.
			</p>
		</div>
		<PostList :posts="posts ?? []" />
	</div>
</template>
