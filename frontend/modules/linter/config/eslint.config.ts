import eslint from '@eslint/js';
import eslintPluginQuery from '@tanstack/eslint-plugin-query';
import { ESLint } from 'eslint';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import * as eslintPluginRegexp from 'eslint-plugin-regexp';
import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.strict,
  ...eslintPluginTailwindcss.configs['flat/recommended'],
  ...eslintPluginQuery.configs['flat/recommended'],
  eslintPluginPerfectionist.configs['recommended-natural'],
  eslintPluginRegexp.configs['flat/recommended'],
  eslintPluginJsxA11y.flatConfigs.recommended,
  eslintPluginPrettier,
  {
    plugins: { react: eslintPluginReact as ESLint.Plugin },
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser },
    },
  },
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  { plugins: { 'react-hooks': eslintPluginReactHooks }, rules: eslintPluginReactHooks.configs.recommended.rules },
  {
    settings: { tailwindcss: { callees: ['classnames', 'clsx', 'ctl', 'cn'] }, react: { version: 'detect' } },
    rules: {
      // Declare the order of imports and the typescript alias pattern.
      'perfectionist/sort-imports': ['error', { internalPattern: ['$/**'], newlinesBetween: 'always' }],
    },
  },
);
