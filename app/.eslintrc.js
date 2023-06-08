module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    'react/react-in-jsx-scope': 'off'
  }
}
