export const tooltipUi = computed(() =>
	isDarkMode()
		? {
				content:
					"font-medium text-lg flex items-center gap-1 bg-neutral-50 text-neutral-900 shadow-sm rounded-sm ring ring-neutral-50 h-6 px-2.5 py-1 text-xs select-none data-[state=delayed-open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-tooltip-content-transform-origin) pointer-events-auto",
				arrow: "fill-neutral-50",
			}
		: {
				content:
					"font-medium text-lg flex items-center gap-1 bg-neutral-900 text-neutral-50 shadow-sm rounded-sm ring ring-neutral-900 h-6 px-2.5 py-1 text-xs select-none data-[state=delayed-open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-tooltip-content-transform-origin) pointer-events-auto",
				arrow: "fill-neutral-900",
			},
);
