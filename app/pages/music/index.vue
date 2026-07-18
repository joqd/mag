<script setup lang="ts">
import { tracks } from "~/data/music";

const { currentTrack, isPlaying, play, togglePlay } = usePlayer();

function handlePlay(index: number) {
	const track = tracks[index];
	if (track && currentTrack.value?.src === track.src) {
		togglePlay();
	} else {
		play(tracks, index);
	}
}

useHead({
	title: "Music | Abolfazl's Blog",
	meta: [{ name: "description", content: "A playlist of music I enjoy." }],
});
</script>

<template>
	<div class="space-y-6">
		<div class="space-y-2">
			<h1 class="text-3xl font-semibold">Music</h1>
			<p class="text-sm opacity-70">
				A collection of tracks I keep coming back to.
			</p>
		</div>

		<div class="border-2 border-default rounded-xl divide-y divide-default">
			<button
				v-for="(track, index) in tracks"
				:key="track.src"
				type="button"
				class="w-full flex items-center gap-4 px-[15px] py-[10px] text-left hover:bg-elevated transition-colors cursor-pointer"
				@click="handlePlay(index)"
			>
				<div
					class="w-9 h-9 shrink-0 rounded-lg overflow-hidden bg-elevated flex items-center justify-center"
				>
					<img
						v-if="track.cover"
						:src="track.cover"
						:alt="track.title"
						class="w-full h-full object-cover"
					/>
					<UIcon
						v-else
						name="i-lucide-music"
						class="w-4 h-4 opacity-50"
					/>
				</div>

				<div class="min-w-0 flex-1">
					<p
						class="text-sm font-medium truncate"
						:class="{
							'text-primary': currentTrack?.src === track.src,
						}"
					>
						{{ track.title }}
					</p>
					<p class="text-xs opacity-70 truncate">
						{{ track.artist ?? "Unknown artist" }}
					</p>
				</div>

				<UIcon
					:name="
						currentTrack?.src === track.src && isPlaying
							? 'i-lucide-pause'
							: 'i-lucide-play'
					"
					class="w-4 h-4 opacity-70 shrink-0"
				/>
			</button>
		</div>
	</div>
</template>
