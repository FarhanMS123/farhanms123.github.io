// /** @type { import("eslint").Linter.FlatConfig } */
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-type-checked',
    // 'plugin:@typescript-eslint/strict-type-checked',
    // "plugin:@typescript-eslint/stylistic-type-checked",
    'plugin:react-hooks/recommended',
    // 'plugin:react/recommended',
    // 'plugin:react/jsx-runtime',
    "prettier",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', "src/vite_*{,/**}"],
  parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   ecmaVersion: 'latest',
  //   sourceType: 'module',
  // //   project: true,
  //   project: ['./tsconfig.json', './tsconfig.node.json'],
  //   tsconfigRootDir: __dirname,
  // },
  plugins: ['react-refresh', "@typescript-eslint"],
  rules: {
    // These opinionated rules are enabled in stylistic-type-checked above.
    // Feel free to reconfigure them to your own preference.
    // "@typescript-eslint/array-type": "off",
    // "@typescript-eslint/consistent-type-definitions": "off",

    // "@typescript-eslint/consistent-type-imports": [
    //   "warn",
    //   {
    //     prefer: "type-imports",
    //     fixStyle: "inline-type-imports",
    //   },
    // ],

    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    '@typescript-eslint/no-unused-vars': 'warn',
    // "@typescript-eslint/no-floating-promises": "warn",
    // "@typescript-eslint/no-explicit-any": "warn",
    // "@typescript-eslint/no-unsafe-call": "warn",
    // "@typescript-eslint/ban-ts-comment": "warn",
  },
}
