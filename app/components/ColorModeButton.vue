<script setup>
const colorMode = useColorMode();
const order = ["light", "system", "dark"];

const current = computed(() =>
	colorMode.preference === "system" ? "system" : colorMode.preference,
);

const cycle = () => {
	const i = order.indexOf(current.value);
	colorMode.preference = order[(i + 1) % order.length];
};

const label = computed(() => `Theme: ${current.value}`);

const leftPx = computed(() => {
	if (current.value === "light") return "4px";
	if (current.value === "system") return "50%";
	return "calc(100% - 18px)";
});
const translateX = computed(() => (current.value === "system" ? "-50%" : "0"));
</script>

<template>
	<button
		class="relative w-[36px] h-[22px] py-[2px] px-[4px] rounded-full select-none cursor-pointer dark:bg-neutral-800 bg-neutral-200"
		:aria-label="label"
		@click="cycle"
	>
		<span
			class="pointer-events-none absolute inset-y-0 flex items-center transition-[left,transform] duration-200"
			:style="{ left: leftPx, transform: `translateX(${translateX})` }"
		>
			<IconsSun
				v-if="current === 'light'"
				class="block w-[14px] h-[14px] leading-none"
			/>
			<IconsAutoTheme
				v-else-if="current === 'system'"
				class="block w-[14px] h-[14px] leading-none"
			/>
			<IconsMoon v-else class="block w-[14px] h-[14px] leading-none" />
		</span>

		<span class="sr-only">{{ label }}</span>
	</button>
</template>
