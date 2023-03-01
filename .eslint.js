/*
 * @Author: 邵明洋
 * @Date: 2023-03-01 14:44:15
 * @LastEditors: 邵明洋
 * @LastEditTime: 2023-03-01 14:59:30
 * @Description: 请填写简介
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-typescript', 'prettier', 'prettier/react'],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/prefer-default-export': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
