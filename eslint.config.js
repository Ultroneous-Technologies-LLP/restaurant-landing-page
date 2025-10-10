const importPlugin = require('eslint-plugin-import');
const prettierPlugin = require('eslint-plugin-prettier');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const ts = require('@typescript-eslint/eslint-plugin');

module.exports = [
  // Ignore build artifacts
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },

  // Prettier integration
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // JS/TS Best Practices
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'no-useless-concat': 'error',
      'no-unused-expressions': 'off', // handled by TS
      'no-param-reassign': 'error',
      'no-nested-ternary': 'error',
      'no-throw-literal': 'error',
      'object-shorthand': 'error',
      'array-callback-return': 'error',
    },
  },

  // TypeScript rules
  {
    files: ['*.ts', '*.tsx'],
    plugins: { '@typescript-eslint': ts },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      '@typescript-eslint/no-mixed-enums': 'error',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/prefer-as-const': 'warn',
      '@typescript-eslint/no-magic-numbers': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/prefer-includes': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase'],
        },
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'memberLike',
          modifiers: ['private'],
          format: ['camelCase'],
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: { regex: '^I[A-Z]', match: false },
        },
        {
          selector: 'enumMember',
          format: ['UPPER_CASE'],
        },
        {
          selector: 'objectLiteralProperty',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'show', 'hide', 'use', 'does'],
        },
      ],
      'max-depth': ['error', 2],
      'max-lines': ['error', { max: 300, skipComments: true }],
      'max-params': ['error', 3],
      '@typescript-eslint/member-ordering': [
        'warn',
        {
          default: {
            optionalityOrder: 'required-first',
            order: 'alphabetically',
          },
          classes: 'never',
        },
      ],
      '@typescript-eslint/no-confusing-void-expression': 'warn',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/prefer-optional-chain': 'warn',
    },
  },

  // React / JSX rules
  {
    files: ['*.jsx', '*.tsx'],
    plugins: { react, 'react-hooks': reactHooks },
    rules: {
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'react-hooks/exhaustive-deps': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-fragments': 'error',
      'react/jsx-no-undef': 'error',
    },
    settings: { react: { version: 'detect' } },
  },

  // Import plugin rules
  {
    plugins: { import: importPlugin },
    rules: {
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-unresolved': 'warn',
      'import/no-default-export': 'off',
    },
  },
];
