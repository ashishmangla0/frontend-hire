/** @type {import("prettier").Config} */
export default {
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
	printWidth: 80,
	tabWidth: 2,
	semi: true,
	jsxSingleQuote: true,
	singleQuote: true,
	useTabs: true,
	trailingComma: 'all',
};
