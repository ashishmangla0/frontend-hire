import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginAstro from 'eslint-plugin-astro';
import prettierConfig from 'eslint-config-prettier';

export default [
	// JavaScript rules
	js.configs.recommended,
	...tseslint.configs.recommended,
	jsxA11y.flatConfigs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		rules: {
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'prefer-const': 'error',
			'no-var': 'error',
			eqeqeq: ['error', 'always'],
			curly: ['error', 'all'],
			'no-unused-expressions': 'error',

			'jsx-a11y/alt-text': 'error',
			'jsx-a11y/anchor-has-content': 'error',
			'jsx-a11y/aria-props': 'error',
			'jsx-a11y/aria-role': 'error',
			'jsx-a11y/role-has-required-aria-props': 'error',

			'astro/no-unused-css-selector': 'warn',
			'astro/no-unused-define-vars-in-style': 'error',
		},
	},
	prettierConfig,
];
