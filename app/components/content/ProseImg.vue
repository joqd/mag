<script setup lang="ts">
interface Props {
	src?: string;
	alt?: string;
	width?: string | number;
	height?: string | number;
}

const props = defineProps<Props>();
const { open } = useLightbox();
</script>

<template>
	<img
		:src="props.src"
		:alt="props.alt"
		:width="props.width"
		:height="props.height"
		loading="lazy"
		class="rounded-md cursor-zoom-in transition-opacity"
		@click="open(props.src!, props.alt)"
	/>
</template>
