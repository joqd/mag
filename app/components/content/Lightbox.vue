<!-- app/components/Lightbox.vue -->
<script setup lang="ts">
const { isOpen, src, alt, close } = useLightbox();

function onKeydown(e: KeyboardEvent) {
	if (e.key === "Escape") close();
}

onMounted(() => window.addEventListener("keydown", onKeydown));
onUnmounted(() => window.removeEventListener("keydown", onKeydown));
</script>

<template>
	<Teleport to="body">
		<Transition name="fade">
			<div
				v-if="isOpen"
				class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-zoom-out"
				@click="close"
			>
				<img
					:src="src"
					:alt="alt"
					class="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
					@click.stop
				/>
				<UButton
					icon="i-lucide-x"
					color="neutral"
					variant="solid"
					class="absolute top-4 right-4"
					@click="close"
				/>
			</div>
		</Transition>
	</Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
