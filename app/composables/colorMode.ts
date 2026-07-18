export const isDarkMode = () => {
	const colorMode = useColorMode();
	return colorMode.value === "dark";
};
