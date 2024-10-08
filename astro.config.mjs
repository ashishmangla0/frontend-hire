// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';
import { SITE_URL } from './src/constants/site-config';

import mdx from '@astrojs/mdx';

import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		react(),
		expressiveCode({
			plugins: [pluginLineNumbers()],
		}),
		mdx(),
	],
	markdown: {
		shikiConfig: {
			wrap: true,
		},
	},
});
