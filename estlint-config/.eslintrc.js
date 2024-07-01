module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // This should be last in the extends array
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort', 'sort-destructure-keys', 'sort-keys-fix'],
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
    // Remove the 'prettier/prettier' rule from here
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
