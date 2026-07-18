<script setup lang="ts">
import { motion, AnimatePresence } from "motion-v";
const { isMenuSliderOpen, closeMenuSlider } = useMenuSlider();
</script>

<template>
	<AnimatePresence>
		<motion.div
			v-if="isMenuSliderOpen"
			key="overlay"
			class="fixed inset-0 z-40 bg-neutral-600/40 backdrop-blur-lg pointer-events-auto"
			:initial="{ opacity: 0 }"
			:animate="{
				opacity: 1,
				transition: { duration: 0.6 },
			}"
			:exit="{
				opacity: 0,
				transition: { duration: 0.5 },
			}"
			role="button"
			aria-label="Close menu overlay"
			@click.self="closeMenuSlider"
		/>
	</AnimatePresence>

	<AnimatePresence mode="wait">
		<motion.div
			v-show="isMenuSliderOpen"
			key="panel"
			class="fixed z-[41] top-0 inset-x-0 min-h-[264px] bg-default pointer-events-auto w-full pt-[115px]"
			:initial="{ y: '-100%' }"
			:animate="{
				y: 0,
				transition: { duration: 0.6, ease: 'easeOut' },
			}"
			:exit="{
				y: '-100%',
				transition: { duration: 0.3, ease: 'easeIn' },
			}"
		>
			<div class="max-w-[480px] px-[20px] mx-auto space-y-4">
				<MenuItems />
			</div>

			<div class="h-[5px]"></div>
		</motion.div>
	</AnimatePresence>
</template>
