<script setup lang="ts">
interface Tag {
	name: string;
	count: number;
}

interface Props {
	tags?: Tag[];
}

const props = withDefaults(defineProps<Props>(), {
	tags: () => [],
});
</script>

<template>
	<div class="flex justify-start items-center">
		<h1 class="text-sm font-medium opacity-70 flex items-center px-[6px]">
			Tags
		</h1>
	</div>

	<div
		v-if="props.tags.length"
		class="flex space-x-2 space-y-2 mt-3 w-full flex-wrap"
	>
		<div v-for="tag in props.tags" :key="tag.name">
			<UButton
				color="neutral"
				variant="soft"
				size="sm"
				class="cursor-pointer"
			>
				{{ tag.name }}
			</UButton>
		</div>
	</div>

	<div v-else class="mt-3 text-sm opacity-70">No tags yet.</div>
</template>
