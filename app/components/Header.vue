<script setup lang="ts">
import { motion, AnimatePresence } from "motion-v";
import type { DropdownMenuItem } from "@nuxt/ui";
import { useMediaQuery } from "@vueuse/core";

// manage open/close menu
const isMenuOpen = ref(false);

function setBodyLock(lock: boolean) {
	if (typeof document === "undefined") return;
	document.body.classList.toggle("overflow-hidden", lock);
}

function toggleMenu() {
	const next = !isMenuOpen.value;
	isMenuOpen.value = next;
	setBodyLock(next);

	if (next && typeof window !== "undefined") {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
}

function closeMenu() {
	if (isMenuOpen.value) {
		isMenuOpen.value = false;
		setBodyLock(false);
	}
}

onBeforeUnmount(() => setBodyLock(false));

// manage menu items
const navbarItems = ref([
	{ lable: "Home", to: "/" },
	{ lable: "Now", to: "/now" },
	{ lable: "Blog", to: "/blog" },
]);

const primaryMenuItems: DropdownMenuItem[] = [
	{ label: "Home", icon: "lucide:home", to: "/" },
	{ label: "Now", icon: "lucide:circle", to: "/now" },
	{ label: "Blog", icon: "lucide:notebook", to: "/blog" },
];

const secondaryMenuItems: DropdownMenuItem[] = [
	{ label: "About", icon: "lucide:info", to: "/about" },
	{ label: "Contact", icon: "lucide:contact-round", to: "/contact" },
	{ label: "Resume", icon: "lucide:book-text", to: "/resume" },
];

const isSmUp = useMediaQuery("(min-width: 640px)");

const menuItems = computed<DropdownMenuItem[]>(() =>
	isSmUp.value
		? secondaryMenuItems
		: [...primaryMenuItems, ...secondaryMenuItems],
);
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
				<div v-for="item in navbarItems">
					<NuxtLink
						:to="item.to"
						@click.capture="closeMenu"
						class="opacity-60 hover:opacity-100 duration-200 font-semibold"
						>{{ item.lable }}</NuxtLink
					>
				</div>
			</div>

			<div class="flex items-center justify-end">
				<UButton
					@click="toggleMenu"
					color="neutral"
					variant="soft"
					class="cursor-pointer w-[28px] h-[28px] p-0 m-0 items-center justify-center z-50"
				>
					<IconsMenu
						v-if="!isMenuOpen"
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
		<!-- Overlay -->
		<AnimatePresence>
			<motion.div
				v-if="isMenuOpen"
				key="overlay"
				class="fixed inset-0 z-40 bg-neutral-600/40 backdrop-blur-md pointer-events-auto"
				:initial="{ opacity: 0 }"
				:animate="{
					opacity: 1,
					transition: { duration: 0.75},
				}"
				:exit="{
					opacity: 0,
					transition: { duration: 0.75},
				}"
				role="button"
				aria-label="Close menu overlay"
				@click.self="toggleMenu"
			/>
		</AnimatePresence>

		<!-- Panel -->
		<AnimatePresence>
			<motion.div
				v-show="isMenuOpen"
				key="panel"
				class="fixed z-[41] top-0 inset-x-0 min-h-80 bg-default pointer-events-auto w-full pt-[130px]"
				:initial="{ y: '-100%' }"
				:animate="{
					y: 0,
					transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
				}"
				:exit="{
					y: '-100%',
					transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
				}"
			>
				<div class="w-[480px] px-[20px] mx-auto space-y-5">
					<div class="duration-500">
						<div>one</div>
						<div>two</div>
						<div>three</div>
					</div>

					<div>
						<div>four</div>
						<div>five</div>
						<div>six</div>
					</div>

					<div>
						<div>four</div>
						<div>five</div>
						<div>six</div>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	</div>
</template>
