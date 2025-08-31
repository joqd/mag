<template>
	<div class="h-[30px]"></div>
	<header class="w-full h-[60px] px-[20px] mb-[40px]">
		<div
			class="max-w-[440px] mx-auto grid grid-cols-2 sm:grid-cols-[max-content_minmax(0,1fr)_max-content] items-center"
		>
			<div class="flex items-center justify-start">
				<NuxtLink to="/">
					<UAvatar
						src="/images/logo.jpg"
						class="w-[60px] h-[60px] grayscale"
					/>
				</NuxtLink>
			</div>

			<div
				class="sm:flex hidden justify-around px-11 font-semibold text-sm items-center"
			>
				<NuxtLink to="/" class="opacity-50 hover:opacity-100"
					>Home</NuxtLink
				>
				<NuxtLink to="/now" class="opacity-50 hover:opacity-100"
					>Now</NuxtLink
				>
				<NuxtLink to="/writings" class="opacity-50 hover:opacity-100"
					>Writings</NuxtLink
				>
			</div>

			<div class="flex items-center justify-end">
				<UButton
					color="neutral"
					variant="soft"
					class="cursor-pointer w-[28px] h-[28px] p-0 m-0 items-center justify-center"
				>
					<IconsMenu class="w-[16px] h-[16px]" />
				</UButton>
			</div>
		</div>
	</header>
</template>
