<script setup>
import { motion } from "motion-v";
</script>

<template>
	<UApp>
		<motion.div />
		<div class="flex flex-col min-h-screen">
			<Header />

			<main class="flex-1 w-full">
				<div class="max-w-[480px] px-[20px] mx-auto">
					<NuxtPage />
				</div>
			</main>

			<Footer class="mt-auto" />
		</div>
	</UApp>
</template>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(2px);
}
</style>
