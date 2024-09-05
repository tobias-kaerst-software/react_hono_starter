import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import * as eslintPluginRegexp from 'eslint-plugin-regexp';
import eslintPluginQuery from '@tanstack/eslint-plugin-query';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.strict,
  ...eslintPluginTailwindcss.configs['flat/recommended'],
  ...eslintPluginQuery.configs['flat/recommended'],
  eslintPluginPerfectionist.configs['recommended-natural'],
  eslintPluginUnicorn.configs['flat/recommended'],
  eslintPluginRegexp.configs['flat/recommended'],
  eslintPluginReact.configs.flat.recommended,
  eslintPluginJsxA11y.flatConfigs.recommended,
  eslintPluginPrettier,
  { plugins: { 'react-hooks': eslintPluginReactHooks }, rules: eslintPluginReactHooks.configs.recommended.rules },
  {
    settings: { tailwindcss: { callees: ['classnames', 'clsx', 'ctl', 'cn'] }, react: { version: 'detect' } },
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'perfectionist/sort-imports': ['error', { internalPattern: ['$/**'], newlinesBetween: 'always' }],
      "unicorn/prevent-abbreviations": "off"
    },
  },
);
