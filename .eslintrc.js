module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 0,
    'semi': 0,
    'space-before-function-paren': 0,
    'no-unused-vars': 1,
    'react/no-children-prop': 0,
    'no-use-before-define': 0
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  }
}
