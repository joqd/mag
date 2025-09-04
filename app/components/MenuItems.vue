<script setup lang="ts">
import { motion, AnimatePresence, delay } from "motion-v";
const { isMenuSliderOpen, closeMenuSlider } = useMenuSlider();

const DELAY_IN = 0.4;
const DELAY_OUT = 0;
const DURATION_IN = 0.4;
const DURATION_OUT = 0.2;
const STAGGER_IN = 0;
const STAGGER_OUT = 0;

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
	show: {
		opacity: 1,
		transition: { duration: DURATION_IN, delay: DELAY_IN },
	},
	exit: {
		opacity: 0,
		transition: { duration: DURATION_OUT, delay: DELAY_OUT },
	},
};
</script>

<template>
	<div class="space-y-4">
		<div
			v-for="(items, gi) in useMenuSliderGroups()"
			:key="gi"
			:class="gi === 0 ? 'sm:hidden' : ''"
			class=""
		>
			<AnimatePresence :initial="false" mode="wait">
				<motion.div
					v-if="isMenuSliderOpen"
					:key="`group-${gi}`"
					:variants="groupVariants"
					initial="hidden"
					animate="show"
					exit="exit"
					class="space-y-0.5"
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
					<motion.div
						v-if="gi === useMenuSliderGroups().length - 1"
						:variants="itemVariants"
						key="last-menu"
					>
						<div class="flex justify-between pl-[10px] py-3">
							<div>
								<ULink to="/login" class="cursor-pointer"
									>Login</ULink
								>
							</div>

							<div>
								<ColorModeButton />
							</div>
						</div>
					</motion.div>
				</motion.div>
			</AnimatePresence>
		</div>
	</div>
</template>
