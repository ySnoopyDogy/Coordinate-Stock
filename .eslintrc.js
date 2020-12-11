module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.ts'],
      },
      typescript: {},
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': ['error', 'never'],
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
  },
  ignorePatterns: ['*.js', 'node_modules/*', 'dist/*'],
};
