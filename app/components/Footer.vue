<script setup lang="ts">
const year = new Date().getFullYear();
const { isVisible, playerHeight } = usePlayer();

const contentPadding = computed(() =>
	isVisible.value ? `${playerHeight.value + 16}px` : "0px",
);
</script>

<template>
	<main
		class="transition-[padding-bottom] duration-[280ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
		:style="{ paddingBottom: contentPadding }"
	>
		<div class="h-[40px]"></div>

		<footer class="w-full h-[55px] opacity-80">
			<div
				class="flex h-[55px] justify-between px-[20px] max-w-[480px] mx-auto items-center"
			>
				<div class="text-sm">
					© {{ year }} Abolfazl - Made With Love 💙
				</div>
				<div>
					<ColorModeButton />
				</div>
			</div>
		</footer>

		<div class="h-[10px]"></div>
	</main>
</template>
