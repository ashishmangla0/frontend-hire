import type { CATEGORIES } from '@/constants/category';
import type { DIFFICULTY } from '@/constants/difficulty';

export type ContentNavItem = {
	title: string;
	slug: string;
};

export type ContentType = 'courses' | 'system-design';

export type Category = (typeof CATEGORIES)[number];

export type Difficulty = (typeof DIFFICULTY)[number];
