import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx,js,d.ts}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
          allowExportNames: ['default'], // Cho phép export default với HOC
        },
      ],

      // Basic rules
      'no-throw-literal': 0,
      strict: 0,
      'no-use-before-define': 0,
      'no-unused-vars': 0,
      'no-duplicate-imports': 'error',
      '@typescript-eslint/no-unused-vars': 1,
      'no-useless-escape': 0,
      'no-shadow': 'off',
      'require-await': 'error',
      '@typescript-eslint/no-shadow': ['error'],

      // Import rules
      'import/prefer-default-export': [0],
      'import/no-extraneous-dependencies': [0],
      'import/order': [
        'warn',
        {
          groups: [
            'external',
            'internal',
            'index',
            'sibling',
            'parent',
            'builtin',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      // React hooks
      'react-hooks/exhaustive-deps': 'warn',

      // Code quality
      'max-lines': [
        'error',
        {
          max: 500,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      // Formatting (keep existing ones that don't conflict)
      quotes: ['warn', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      indent: ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'space-before-blocks': ['error', 'always'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-infix-ops': 'error',
      'eol-last': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

      // imports MUI library
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              regex: '^@mui/(?!material|icons-material|lab|system|x|styles)[^/]+$',
            },
          ],
        },
      ],
    },
  },
);
