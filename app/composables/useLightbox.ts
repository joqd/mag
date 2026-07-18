export const useLightbox = () => {
	const isOpen = useState("lightbox-open", () => false);
	const src = useState("lightbox-src", () => "");
	const alt = useState("lightbox-alt", () => "");

	function open(imgSrc: string, imgAlt = "") {
		src.value = imgSrc;
		alt.value = imgAlt;
		isOpen.value = true;
	}

	function close() {
		isOpen.value = false;
	}

	return { isOpen, src, alt, open, close };
};
