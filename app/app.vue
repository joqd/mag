<script setup>
import { motion, useScroll } from "motion-v";
const { scrollYProgress } = useScroll();

/**
 * ==============   Styles   ================
 */

const scrollIndicator = {
	scaleX: scrollYProgress,
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	height: "2px",
	originX: 0,
	backgroundColor: "#737373",
};
</script>

<template>
	<UApp :data-theme="isDarkMode() ? 'dark' : null">
		<div class="flex flex-col min-h-screen">
			<motion.div
				class="z-[100]"
				id="scroll-indicator"
				:style="scrollIndicator"
			/>
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
