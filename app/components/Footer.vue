<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
	<div class="h-[40px]"></div>

	<footer class="w-full h-[55px] opacity-80">
		<div
			class="flex h-[55px] justify-between px-[20px] max-w-[480px] mx-auto items-center"
		>
			<div class="text-sm">
				© {{ year }} Joqd - Made With Love By
				<UButton
					variant="link"
					color="neutral"
					to="https://github.com/joqd"
					class="p-0 underline"
					>ASH</UButton
				>
			</div>
			<div>
				<ColorModeButton />
			</div>
		</div>
	</footer>

	<div class="h-[20px]"></div>
</template>
