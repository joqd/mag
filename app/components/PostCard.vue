<script setup lang="ts">
interface Props {
	featured?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	featured: false,
});
</script>

<template>
	<div class="space-y-3">
		<div class="space-y-1">
			<div class="text-md font-bold cursor-default leading-5">
				<NuxtLink to="/pages/" class="link"
					>Effective Python Testing: Strategies and Tools</NuxtLink
				>
			</div>
			<div class="text-xs cursor-default opacity-90">
				<NuxtLink to="/tags/" class="link">Tools</NuxtLink>
				— December 2, 2023
			</div>
		</div>

		<div class="text-sm font-medium opacity-90">
			Cover the importance of testing in Python development, exploring
			tools and frameworks for unit testing, integration testing, and TDD.
		</div>

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
	</div>
</template>
