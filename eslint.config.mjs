import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginAstro from 'eslint-plugin-astro';
import prettierConfig from 'eslint-config-prettier';

export default [
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
			'comma-dangle': ['error', 'always-multiline'],
			'no-debugger': 'error',
			'no-dupe-keys': 'error',
			'no-dupe-args': 'error',
			'no-duplicate-case': 'error',
			'no-duplicate-imports': 'error',
			complexity: ['error', 10],
			'max-lines': ['error', 300],
			'max-depth': ['error', 4],
			'max-nested-callbacks': ['error', 3],
			'max-params': ['error', 3],

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
