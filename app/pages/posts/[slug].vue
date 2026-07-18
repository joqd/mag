<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const slug = computed(() => String(route.params.slug || ""));

const { data: post } = await useAsyncData(
	() => `post-${slug.value}`,
	() => queryCollection("posts").path(`/posts/${slug.value}`).first(),
	{ watch: [slug] },
);

useHead(() => ({
	title: post.value?.title
		? `${post.value.title} | Abolfazl's Blog`
		: "Blog Post",
	meta: [
		{
			name: "description",
			content: post.value?.description || "Read this post on my blog.",
		},
	],
}));

function goBack() {
	if (window.history.state?.back) {
		router.back();
	} else {
		router.push("/posts/");
	}
}
</script>

<template>
	<div v-if="post" class="space-y-6">
		<div class="space-y-2">
			<button
				type="button"
				class="text-sm opacity-70 hover:opacity-100 cursor-pointer"
				@click="goBack"
			>
				← Back
			</button>
			<h1 class="text-3xl font-semibold">{{ post.title }}</h1>
			<p v-if="post.description" class="text-sm opacity-80">
				{{ post.description }}
			</p>
			<p v-if="post.date" class="text-xs opacity-70">{{ post.date }}</p>
		</div>

		<article
			class="prose prose-neutral max-w-none dark:prose-invert text-justify"
		>
			<ContentRenderer :value="post" />
		</article>
	</div>

	<div v-else class="space-y-3">
		<p class="text-sm opacity-70">This post could not be found.</p>
		<NuxtLink to="/posts/" class="text-primary underline">
			Return to the posts
		</NuxtLink>
	</div>
</template>
