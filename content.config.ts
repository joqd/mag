import { defineContentConfig, defineCollection } from "@nuxt/content";
import { defineSitemapSchema } from "@nuxtjs/sitemap/content";

import { z } from "zod";

export default defineContentConfig({
	collections: {
		posts: defineCollection({
			type: "page",
			source: "posts/*.md",
			schema: z.object({
				title: z.string(),
				description: z.string().optional(),
				date: z.coerce.date(),
				featured: z.boolean().default(false),
				tags: z.array(z.string()).optional(),
				sitemap: defineSitemapSchema() as z.ZodTypeAny,
			}),
		}),
	},
});
