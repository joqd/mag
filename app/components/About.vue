<template>
	<div>
		<h1 class="font-bold text-lg">HELLO THERE</h1>

		<p class="mt-2 opacity-80 text-justify">
			My name is Abolfazl, a programmer from Iran who tries to keep a
			happy spirit despite everything. Here, I share thoughts and
			experiences about programming, games, chess, history, and whatever
			else sparks my curiosity.
		</p>

		<ul class="mt-5 space-x-2 space-y-2">
			<li class="inline">
				<UButton
					color="neutral"
					variant="soft"
					class="cursor-pointer"
					size="sm"
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
				>
					<IconsInstagram class="w-4 h-4" />
					<div>Instagram</div>
				</UButton>
			</li>
			<li class="inline">
				<UButton
					color="neutral"
					variant="soft"
					class="cursor-pointer"
					size="sm"
				>
					<IconsTelegram class="w-4 h-4" />
					<div>Telegram</div>
				</UButton>
			</li>
		</ul>
	</div>
</template>
