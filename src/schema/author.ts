import { z, type SchemaContext } from 'astro:content';

export const authorSchema = ({ image }: SchemaContext) =>
	z.object({
		name: z.string(),
		pronouns: z.string().optional(),
		headline: z.string().optional(),
		picture: image().optional(),
		order: z.number().optional(),
		joiningDate: z.date(),
		socials: z
			.array(
				z.object({
					name: z.string(),
					url: z.string(),
				}),
			)
			.optional(),
	});
