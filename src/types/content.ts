import type { CATEGORIES } from '@/constants/category';

export type ContentNavItem = {
	title: string;
	slug: string;
};

export type ContentType = 'courses' | 'system-design';

export type Category = (typeof CATEGORIES)[number];
