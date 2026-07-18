<!-- app/components/GlobalPlayer.vue -->
<script setup lang="ts">
const {
	currentTrack,
	isPlaying,
	isVisible,
	currentTime,
	duration,
	playerHeight,
	togglePlay,
	next,
	prev,
	close,
} = usePlayer();

const audioRef = ref<HTMLAudioElement | null>(null);
const sheetRef = ref<HTMLElement | null>(null);
let observer: ResizeObserver | null = null;

const progress = computed(() =>
	duration.value ? (currentTime.value / duration.value) * 100 : 0,
);

watch(
	() => currentTrack.value?.src,
	(src) => {
		if (!audioRef.value || !src) return;
		audioRef.value.src = src;
		audioRef.value.currentTime = 0;
		if (isPlaying.value) audioRef.value.play().catch(() => {});
	},
);

watch(isPlaying, (playing) => {
	if (!audioRef.value) return;
	if (playing) audioRef.value.play().catch(() => {});
	else audioRef.value.pause();
});

watch(sheetRef, (el) => {
	observer?.disconnect();
	if (el) observer?.observe(el);
});

onMounted(() => {
	observer = new ResizeObserver((entries) => {
		playerHeight.value = entries[0]?.contentRect.height ?? 0;
	});
	if (sheetRef.value) observer.observe(sheetRef.value);
});

onUnmounted(() => {
	observer?.disconnect();
});

function onTimeUpdate() {
	if (audioRef.value) currentTime.value = audioRef.value.currentTime;
}

function onLoadedMetadata() {
	if (audioRef.value) duration.value = audioRef.value.duration;
}

function onSeek(event: Event) {
	const value = Number((event.target as HTMLInputElement).value);
	if (audioRef.value) audioRef.value.currentTime = value;
	currentTime.value = value;
}

function handleClose() {
	audioRef.value?.pause();
	close();
}

function formatTime(seconds: number) {
	if (!Number.isFinite(seconds)) return "0:00";
	const m = Math.floor(seconds / 60);
	const s = Math.floor(seconds % 60)
		.toString()
		.padStart(2, "0");
	return `${m}:${s}`;
}
</script>

<template>
	<audio
		ref="audioRef"
		@timeupdate="onTimeUpdate"
		@loadedmetadata="onLoadedMetadata"
		@ended="next"
	/>

	<div
		class="fixed bottom-0 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-[480px]"
	>
		<Transition name="sheet">
			<div
				v-if="isVisible && currentTrack"
				ref="sheetRef"
				class="relative rounded-t-2xl border border-b-0 border-default bg-default/70 backdrop-blur-xl backdrop-saturate-[180%] shadow-lg px-4 pt-3"
				:style="{
					paddingBottom:
						'calc(0.625rem + env(safe-area-inset-bottom))',
				}"
			>
				<UButton
					icon="i-lucide-chevron-down"
					color="neutral"
					variant="soft"
					size="xs"
					class="absolute top-2 right-2 rounded-full w-6 h-6 p-0 justify-center cursor-pointer"
					@click="handleClose"
				/>

				<div class="flex items-center gap-3 pr-7">
					<div
						class="w-10 h-10 shrink-0 rounded-lg overflow-hidden bg-elevated flex items-center justify-center"
					>
						<img
							v-if="currentTrack.cover"
							:src="currentTrack.cover"
							:alt="currentTrack.title"
							class="w-full h-full object-cover"
						/>
						<UIcon
							v-else
							name="i-lucide-music"
							class="w-4 h-4 opacity-40"
						/>
					</div>

					<div class="min-w-0 flex-1">
						<p class="text-sm font-medium truncate leading-tight">
							{{ currentTrack.title }}
						</p>
						<p
							class="text-xs opacity-60 truncate leading-tight mt-0.5"
						>
							{{ currentTrack.artist ?? "Unknown artist" }}
						</p>
					</div>

					<div class="flex items-center gap-0.5 shrink-0">
						<UButton
							icon="i-lucide-skip-back"
							color="neutral"
							variant="ghost"
							size="sm"
							class="cursor-pointer rounded-full"
							@click="prev"
						/>
						<UButton
							:icon="
								isPlaying ? 'i-lucide-pause' : 'i-lucide-play'
							"
							color="neutral"
							variant="solid"
							size="sm"
							class="cursor-pointer rounded-full w-8 h-8 p-0 justify-center"
							@click="togglePlay"
						/>
						<UButton
							icon="i-lucide-skip-forward"
							color="neutral"
							variant="ghost"
							size="sm"
							class="cursor-pointer rounded-full"
							@click="next"
						/>
					</div>
				</div>

				<div class="flex items-center gap-2 mt-2">
					<span
						class="text-[10px] tabular-nums opacity-50 w-7 text-right"
					>
						{{ formatTime(currentTime) }}
					</span>

					<input
						type="range"
						min="0"
						:max="duration || 0"
						:value="currentTime"
						class="player-seek flex-1"
						:style="{ '--progress': `${progress}%` }"
						@input="onSeek"
					/>

					<span class="text-[10px] tabular-nums opacity-50 w-7">
						{{ formatTime(duration) }}
					</span>
				</div>
			</div>
		</Transition>
	</div>
</template>

<style scoped>
.sheet-enter-active,
.sheet-leave-active {
	transition: transform 0.28s cubic-bezier(0.32, 0.72, 0, 1);
}
.sheet-enter-from,
.sheet-leave-to {
	transform: translateY(100%);
}

.player-seek {
	-webkit-appearance: none;
	appearance: none;
	height: 3px;
	border-radius: 999px;
	background: linear-gradient(
		to right,
		var(--ui-primary) var(--progress, 0%),
		var(--ui-border) var(--progress, 0%)
	);
	cursor: pointer;
	outline: none;
}

.player-seek::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: var(--ui-primary);
	opacity: 0;
	transition: opacity 0.15s ease;
}

.player-seek:hover::-webkit-slider-thumb,
.player-seek:active::-webkit-slider-thumb {
	opacity: 1;
}

.player-seek::-moz-range-thumb {
	width: 10px;
	height: 10px;
	border: none;
	border-radius: 50%;
	background: var(--ui-primary);
	opacity: 0;
	transition: opacity 0.15s ease;
}

.player-seek:hover::-moz-range-thumb,
.player-seek:active::-moz-range-thumb {
	opacity: 1;
}

.player-seek::-moz-range-track {
	height: 3px;
	border-radius: 999px;
	background: transparent;
}
</style>
