import type { Track } from "~/types/track";

export const usePlayer = () => {
	const tracks = useState<Track[]>("player:tracks", () => []);
	const currentIndex = useState<number>("player:currentIndex", () => -1);
	const isPlaying = useState<boolean>("player:isPlaying", () => false);
	const isVisible = useState<boolean>("player:isVisible", () => false);
	const currentTime = useState<number>("player:currentTime", () => 0);
	const duration = useState<number>("player:duration", () => 0);
	const playerHeight = useState<number>("player:height", () => 0);

	const currentTrack = computed<Track | null>(() => {
		const track = tracks.value[currentIndex.value];
		return track ?? null;
	});

	function play(list: Track[], index: number) {
		tracks.value = list;
		currentIndex.value = index;
		isVisible.value = true;
		isPlaying.value = true;
	}

	function togglePlay() {
		if (currentTrack.value) isPlaying.value = !isPlaying.value;
	}

	function next() {
		if (!tracks.value.length) return;
		currentIndex.value = (currentIndex.value + 1) % tracks.value.length;
		isPlaying.value = true;
	}

	function prev() {
		if (!tracks.value.length) return;
		currentIndex.value =
			(currentIndex.value - 1 + tracks.value.length) %
			tracks.value.length;
		isPlaying.value = true;
	}

	function close() {
		isPlaying.value = false;
		isVisible.value = false;
		currentIndex.value = -1;
		tracks.value = [];
	}

	return {
		tracks,
		currentIndex,
		currentTrack,
		isPlaying,
		isVisible,
		currentTime,
		duration,
		play,
		togglePlay,
		next,
		prev,
		close,
		playerHeight,
	};
};
