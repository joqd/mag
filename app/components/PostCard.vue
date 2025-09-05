<script setup lang="ts">
interface Props {
	featured?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	featured: false,
});
</script>

<template>
	<div>
		<div class="text-md font-bold line-clamp-1 cursor-default">
			Effective Python Testing: Strategies and Tools
		</div>
		<div class="text-xs cursor-default opacity-90">
			<UButton
				color="neutral"
				variant="link"
				class="p-0 cursor-pointer font-normal underline"
				>Tools</UButton
			>
			- December 2, 2023
		</div>
	</div>

	<p
		class="line-clamp-3 text-sm opacity-90 min-h-0 font-medium cursor-default"
	>
		Cover the importance of testing in Python development, exploring tools
		and frameworks for unit testing, integration testing, and TDD
	</p>

	<div class="flex space-x-1">
		<div v-if="props.featured">
			<UTooltip
				arrow
				disableClosingTrigger
				:ui="tooltipUi"
				:delay-duration="0"
				:content="{
					align: 'start',
					side: 'top',
					sideOffset: 8,
				}"
				text="Featured Post"
			>
				<UButton
					color="neutral"
					variant="soft"
					class="cursor-default w-[27.99px] h-[27.99px] p-0 m-0 items-center justify-center"
				>
					<IconsFeatured class="w-[12px] h-[12px]" />
				</UButton>
			</UTooltip>
		</div>
		<div>
			<UButton
				color="neutral"
				variant="soft"
				size="sm"
				class="cursor-pointer"
			>
				Read More
			</UButton>
		</div>
	</div>
</template>
