<script setup>
const { data: posts } = await useAsyncData("posts", () =>
	queryCollection("posts").all(),
);
</script>

<template>
	<div class="space-y-4">
		<h1 class="text-2xl font-semibold">Blog</h1>
		<PostList :posts="posts ?? []" />
	</div>
</template>
