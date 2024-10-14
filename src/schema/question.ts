import { CATEGORIES } from '@/constants/category';
import { DIFFICULTY } from '@/constants/difficulty';
import { reference, z } from 'astro:content';

export const questionSchema = z.object({
	title: z.string(),
	description: z.string(),
	skill: z.enum(CATEGORIES),
	publishDate: z.date(),
	type: z.enum(['coding', 'theory']),
	isDraft: z.boolean().default(false),
	difficulty: z.enum(DIFFICULTY),
	embedUrl: z.string().optional(),
	author: reference('authors'),
});
