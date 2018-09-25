module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    'jest/globals': true,
  },
  globals: {
    logger: false,
  },
  plugins: ['jest', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'prettier/prettier': [
      'error',
      { singleQuote: true, semi: false, trailingComma: 'es5' },
    ],
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js'] }],
    'react/require-default-props': 'off',
  },
  overrides: {
    files: ['*.test.js'],
    rules: {
      'react/prop-types': 'off',
    },
  },
}
