<script setup lang="ts">
interface Post {
	title?: string;
	description?: string;
	path?: string;
	date?: string;
	tags?: string[];
	featured?: boolean;
}

interface Props {
	posts?: Post[];
}

const props = withDefaults(defineProps<Props>(), {
	posts: () => [],
});

const containerRef = ref(null);
const swiper = useSwiper(containerRef);

const isBeginning = ref(true);
const isEnd = ref(false);
const isLoading = ref(true);

watch(
	() => swiper.instance.value,
	(instance) => {
		if (!instance) return;

		const updateState = () => {
			isBeginning.value = instance.isBeginning;
			isEnd.value = instance.isEnd;
		};

		updateState();
		isLoading.value = false;

		instance.on("slideChange", updateState);
		instance.on("reachBeginning", updateState);
		instance.on("reachEnd", updateState);

		if (window.matchMedia("(max-width: 640px)").matches) {
			Object.assign(instance.params, {
				touchRatio: 1,
				threshold: 8,
				longSwipesRatio: 0.5,
				longSwipesMs: 150,
				shortSwipes: false,
				touchAngle: 65,
			});
			instance.update();
		}
	},
	{ immediate: true },
);
</script>

<template>
	<div class="flex justify-between">
		<h1 class="text-sm font-medium opacity-70 flex items-center px-[6px]">
			Featured
		</h1>
		<div v-if="props.posts.length" class="space-x-2 opacity-70">
			<UButton
				@click="swiper.prev()"
				color="neutral"
				variant="ghost"
				class="w-[30px] h-[30px] cursor-pointer p-0 m-0 items-center justify-center"
				:disabled="isBeginning"
			>
				<IconsLeft class="w-[14px] h-[14px]" />
			</UButton>
			<UButton
				@click="swiper.next()"
				color="neutral"
				variant="ghost"
				class="w-[30px] h-[30px] cursor-pointer p-0 m-0 items-center justify-center"
				:disabled="isEnd"
			>
				<IconsRight class="w-[14px] h-[14px]" />
			</UButton>
		</div>
	</div>

	<!-- empty state -->
	<div
		v-if="!props.posts.length"
		class="mt-2 w-full border-2 border-dashed border-default rounded-xl px-[20px] py-[24px] text-sm opacity-70 text-center"
	>
		No featured posts yet.
	</div>

	<template v-else>
		<div v-if="isLoading" class="mt-2">
			<USkeleton class="h-[191.46px] w-full rounded-xl" />
		</div>

		<ClientOnly class="mt-2">
			<swiper-container
				ref="containerRef"
				effect="cards"
				:touch-ratio="0.5"
				:threshold="40"
				:long-swipes-ratio="0.5"
				:long-swipes-ms="500"
				:short-swipes="false"
				:round-lengths="true"
				cards-effect-slide-shadows="false"
				class="w-full [contain:layout] [overflow:visible]"
			>
				<swiper-slide
					v-for="post in props.posts"
					:key="post.path ?? post.title"
					class="border-2 border-default px-[20px] py-[16px] bg-default rounded-xl w-[440px] [will-change:transform] [backface-visibility:hidden] [transform:translateZ(0)] [transform-style:flat]"
				>
					<div
						class="flex flex-col h-full justify-between [contain:paint] [transform-style:flat]"
					>
						<PostCard :post="post" :featured="true" />
					</div>
				</swiper-slide>
			</swiper-container>
		</ClientOnly>
	</template>
</template>
