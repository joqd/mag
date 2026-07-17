export const useNavbarItems = () => [
	{ label: "Home", to: "/" },
	{ label: "Now", to: "/now" },
	{ label: "Posts", to: "/posts" },
];

export const useMenuSliderGroups = () => {
	const navbarItems = useNavbarItems();
	return [
		navbarItems,
		[
			{ label: "About", to: "/about" },
			{ label: "Contact", to: "/contact" },
			{ label: "Resume", to: "/resume" },
		],
	];
};

export const useMenuSlider = () => {
	const isMenuSliderOpen = useState<boolean>("menu-slider-open", () => false);

	const setBodyLock = (lock: boolean) => {
		if (typeof document === "undefined") return;
		document.body.classList.toggle("overflow-hidden", lock);
	};

	const openMenuSlider = () => {
		isMenuSliderOpen.value = true;
		setBodyLock(true);

		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const closeMenuSlider = () => {
		isMenuSliderOpen.value = false;
		setBodyLock(false);
	};

	const toggleMenuSlider = () => {
		isMenuSliderOpen.value ? closeMenuSlider() : openMenuSlider();
	};

	return {
		isMenuSliderOpen,
		openMenuSlider,
		closeMenuSlider,
		toggleMenuSlider,
	};
};
