<script setup>
const { data: posts } = await useAsyncData("posts", () =>
	queryCollection("posts").all(),
);
</script>

<template>
	<div class="space-y-4">
		<PostList :posts="posts ?? []" />
	</div>
</template>
