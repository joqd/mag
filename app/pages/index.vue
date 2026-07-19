<script setup lang="ts">
interface Post {
	title?: string;
	description?: string;
	path?: string;
	date?: string;
	tags?: string[];
	featured?: boolean;
}

const { data: posts } = await useAsyncData("posts", () =>
	queryCollection("posts").order("date", "DESC").all(),
);

const allPosts = computed(() => posts.value ?? []);

const featuredPosts = computed(() => {
	const featured = allPosts.value.filter((post) => post.featured);
	return featured.length ? featured : allPosts.value.slice(0, 5);
});

const tags = computed(() => {
	const counts = new Map<string, number>();
	for (const post of allPosts.value) {
		for (const tag of post.tags ?? []) {
			counts.set(tag, (counts.get(tag) ?? 0) + 1);
		}
	}
	return Array.from(counts.entries())
		.map(([name, count]) => ({ name, count }))
		.sort((a, b) => b.count - a.count);
});

useHead({
	title: "Abolfazl's Blog",
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
	<section>
		<!-- about and social links -->
		<section>
			<div>
				<About />
			</div>
		</section>

		<div class="h-[40px]"></div>

		<!-- featured -->
		<section>
			<div>
				<Featured :posts="featuredPosts" />
			</div>
		</section>

		<div class="h-[40px]"></div>

		<!-- tags -->
		<!-- <section>
			<div>
				<Tags :tags="tags" />
			</div>
		</section>

		<div class="h-[40px]"></div> -->

		<!-- posts list -->
		<section>
			<div>
				<PostList :show_label="true" :posts="allPosts" />
			</div>
		</section>
	</section>
</template>
