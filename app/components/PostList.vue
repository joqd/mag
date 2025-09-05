<script setup lang="ts">
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
		<div class="space-y-3">
			<PostCard />
			<USeparator size="sm" />
			<PostCard featured />
			<USeparator size="sm" />
			<PostCard />
			<USeparator size="sm" />
		</div>

		<!-- load more -->
		<UButton
			:disabled="allPostsLoaded"
			variant="solid"
			color="neutral"
			class="w-full cursor-pointer"
		>
			<span class="mx-auto">Load More</span>
		</UButton>
	</div>
</template>
