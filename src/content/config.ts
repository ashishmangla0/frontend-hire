import { z, defineCollection } from 'astro:content';

const authorCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			pronouns: z.string().optional(),
			headline: z.string().optional(),
			picture: image().optional(),
			socials: z
				.array(
					z.object({
						name: z.string(),
						url: z.string(),
					}),
				)
				.optional(),
		}),
});

export const collections = {
	authors: authorCollection,
};
