<script setup lang="ts">
import { motion } from "motion-v";
const { isMenuSliderOpen, closeMenuSlider, toggleMenuSlider } = useMenuSlider();
</script>

<template>
	<div class="h-[30px]"></div>
	<header class="w-full h-[60px] px-[20px] mb-[40px] z-50">
		<div
			class="max-w-[440px] mx-auto grid grid-cols-2 sm:grid-cols-[max-content_minmax(0,1fr)_max-content] items-center"
		>
			<div class="flex items-center justify-start">
				<motion.div
					:while-hover="{ scale: 1.05 }"
					:while-press="{ scale: 0.95 }"
				>
					<NuxtLink>
						<UAvatar
							src="/images/al.jpg"
							class="w-[60px] h-[60px] grayscale cursor-pointer"
						/>
					</NuxtLink>
				</motion.div>
			</div>

			<div
				class="sm:flex hidden justify-around px-11 font-medium text-sm items-center"
			>
				<div v-for="item in useNavbarItems()">
					<NuxtLink
						:to="item.to"
						@click.capture="closeMenuSlider"
						class="opacity-60 hover:opacity-100 duration-200 font-semibold"
						>{{ item.label }}</NuxtLink
					>
				</div>
			</div>

			<div class="flex items-center justify-end">
				<UButton
					@click="toggleMenuSlider"
					color="neutral"
					variant="soft"
					class="cursor-pointer w-[28px] h-[28px] p-0 m-0 items-center justify-center z-50"
				>
					<IconsMenu
						v-if="!isMenuSliderOpen"
						lable="Open"
						class="w-[16px] h-[16px]"
					/>
					<IconsClose
						v-else
						lable="Close"
						class="w-[16px] h-[16px]"
					/>
				</UButton>
			</div>
		</div>
	</header>

	<div
		class="fixed inset-0 z-40 pointer-events-none"
		role="dialog"
		aria-modal="true"
		aria-label="Navigation popup"
	>
		<MenuSlider />
	</div>
</template>
