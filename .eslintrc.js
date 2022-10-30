module.exports = {
  root: true,
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier', '@react-native-community'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/no-var-requires': 0,
      },
    },
  ],
};
