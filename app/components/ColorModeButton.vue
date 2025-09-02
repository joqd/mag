<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
	get: () => colorMode.value === "dark",
	set: (v) => {
		colorMode.preference = v ? "dark" : "light";
		// brief smooth color change
		const root = document.documentElement;
		root.classList.add("theme-anim");
		setTimeout(() => root.classList.remove("theme-anim"), 250);
	},
});
</script>

<template>
	<ClientOnly v-if="!colorMode?.forced">
		<USwitch
			v-model="isDark"
			color="neutral"
			size="sm"
			aria-label="Toggle dark mode"
			class="data-[checked=true]:[&_.ui-icon]:rotate-0 data-[checked=false]:[&_.ui-icon]:rotate-0"
		/>
		<template #fallback>
			<div><USkeleton class="h-4 w-8" /></div>
		</template>
	</ClientOnly>
</template>
