'use strict';

/** @type {import("eslint").Linter.Config} */
const config = {
  env: { es6: true, node: true },
  extends: ['@a-ogilvie'],
  overrides: [
    {
      extends: [
        'react-app',
        'react-app/jest',
        '@a-ogilvie',
        '@a-ogilvie/eslint-config/typescript-eslint',
        '@a-ogilvie/eslint-config/react',
      ],
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'react/jsx-no-bind': [
          'error',
          {
            allowArrowFunctions: true,
          },
        ],
      },
    },
  ],
  parserOptions: { ecmaVersion: 2021 },
};

module.exports = config;
