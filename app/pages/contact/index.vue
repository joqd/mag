<!-- app/pages/contact.vue -->
<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const schema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters").max(100),
	email: z.email("Please enter a valid email address"),
	message: z
		.string()
		.min(10, "Message must be at least 10 characters")
		.max(2000),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
	name: undefined,
	email: undefined,
	message: undefined,
});

const website = ref("");
const startedAt = Date.now();

const isSubmitting = ref(false);
const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>) {
	isSubmitting.value = true;

	try {
		await $fetch("/api/contact", {
			method: "POST",
			body: { ...event.data, website: website.value, startedAt },
		});

		toast.add({
			title: "Message sent",
			description: "Thanks for reaching out — I'll get back to you soon.",
			color: "success",
		});

		state.name = undefined;
		state.email = undefined;
		state.message = undefined;
	} catch {
		toast.add({
			title: "Something went wrong",
			description:
				"Your message could not be sent. Please try again later.",
			color: "error",
		});
	} finally {
		isSubmitting.value = false;
	}
}

useHead({
	title: "Contact | Abolfazl's Blog",
	meta: [{ name: "description", content: "Get in touch with me." }],
});
</script>

<template>
	<div class="space-y-6">
		<div class="space-y-2">
			<h1 class="text-3xl font-semibold">Contact</h1>
			<p class="text-sm opacity-70">
				Have a question or want to work together? Send me a message and
				I'll reply as soon as I can.
			</p>
		</div>

		<div
			class="w-full px-[20px] py-[16px] border-2 border-default rounded-xl"
		>
			<UForm
				:schema="schema"
				:state="state"
				class="space-y-4"
				@submit="onSubmit"
			>
				<div
					class="absolute -left-[9999px] opacity-0"
					aria-hidden="true"
				>
					<label for="website">Website</label>
					<input
						id="website"
						v-model="website"
						type="text"
						name="website"
						tabindex="-1"
						autocomplete="off"
					/>
				</div>

				<UFormField label="Name" name="name" required>
					<UInput
						v-model="state.name"
						placeholder="Your name"
						class="w-full"
					/>
				</UFormField>

				<UFormField label="Email" name="email" required>
					<UInput
						v-model="state.email"
						type="email"
						placeholder="you@example.com"
						icon="i-lucide-at-sign"
						class="w-full"
					/>
				</UFormField>

				<UFormField label="Message" name="message" required>
					<UTextarea
						v-model="state.message"
						:rows="6"
						autoresize
						placeholder="What would you like to say?"
						class="w-full"
					/>
				</UFormField>

				<UButton
					type="submit"
					color="primary"
					class="w-full justify-center cursor-pointer"
					:loading="isSubmitting"
					:disabled="isSubmitting"
				>
					Send message
				</UButton>
			</UForm>
		</div>
	</div>
</template>
