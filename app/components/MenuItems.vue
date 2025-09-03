<script setup lang="ts">
import { motion, AnimatePresence } from "motion-v";
const { isMenuSliderOpen, closeMenuSlider } = useMenuSlider();

const D_IN = 0.8; // duration in
const D_OUT = 0.03; // duration out
const STAGGER_IN = 0.15;
const STAGGER_OUT = 0.05;

const groupVariants = {
	hidden: {},
	show: {
		transition: { when: "beforeChildren", staggerChildren: STAGGER_IN },
	},
	exit: {
		transition: {
			when: "afterChildren",
			staggerChildren: STAGGER_OUT,
			staggerDirection: -1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: D_IN } },
	exit: { opacity: 0, transition: { duration: D_OUT } },
};
</script>

<template>
	<div class="space-y-4">
		<div
			v-for="(items, gi) in useMenuSliderGroups()"
			:key="gi"
			:class="gi === 0 ? 'sm:hidden' : ''"
			class="space-y-0.5"
		>
			<AnimatePresence :initial="false" mode="wait">
				<motion.div
					v-if="isMenuSliderOpen"
					:key="`group-${gi}`"
					:variants="groupVariants"
					initial="hidden"
					animate="show"
					exit="exit"
				>
					<motion.div
						v-for="item in items"
						:key="item.to"
						:variants="itemVariants"
					>
						<NuxtLink
							:to="item.to"
							v-slot="{ isActive }"
							class="block w-full"
							@click.capture="closeMenuSlider"
						>
							<UButton
								class="w-full cursor-pointer"
								color="neutral"
								:variant="isActive ? 'soft' : 'ghost'"
							>
								{{ item.label }}
							</UButton>
						</NuxtLink>
					</motion.div>
				</motion.div>
			</AnimatePresence>
		</div>
	</div>
</template>
