<!-- app/components/About.vue -->
<template>
	<div>
		<h1 class="font-bold text-lg">HELLO THERE</h1>

		<p class="mt-2 opacity-80 text-justify">
			I'm Abolfazl, a programmer from Iran. Most days I'm building
			software. The rest of the time I'm wandering through history books,
			chess positions, video games, and whatever catches my curiosity
			next.
		</p>

		<NuxtLink
			to="/resume"
			class="mt-2 inline-flex items-center gap-1 text-sm text-primary hover:underline"
		>
			More about me &amp; my work
			<Icon size="14" name="i-lucide-arrow-right" />
		</NuxtLink>

		<ul class="mt-5 space-x-2 space-y-2">
			<li class="inline">
				<UButton
					color="neutral"
					variant="soft"
					class="cursor-pointer"
					size="sm"
					to="https://github.com/joqd"
					target="_blank"
				>
					<IconsGithub class="w-4 h-4" />
					<div>Github</div>
				</UButton>
			</li>
			<li class="inline">
				<UButton
					color="neutral"
					variant="soft"
					class="cursor-pointer"
					size="sm"
					to="https://lichess.org/@/Rodia2559"
					target="_blank"
				>
					<IconsChess class="w-4 h-4" />
					<div>Lichess</div>
				</UButton>
			</li>
			<li class="inline">
				<UButton
					color="neutral"
					variant="soft"
					class="cursor-pointer"
					size="sm"
					to="/music"
				>
					<IconsMusic class="w-4 h-4" />
					<div>Playlist</div>
				</UButton>
			</li>
		</ul>
	</div>
</template>
