/* eslint-disable no-undef */

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prefer-arrow',
    '@typescript-eslint',
    'prettier',
    'autofix',
  ],
  rules: {
    // typescript
    '@typescript-eslint/no-unused-vars': [0],

    // prettier & eslint
    'arrow-body-style': [
      2,
      'as-needed',
      { requireReturnForObjectLiteral: false },
    ],
    'prefer-arrow-callback': [2, { allowNamedFunctions: false }],
    'no-unused-vars': 0,
    camelcase: 2,
    indent: [2, 2],
    semi: [2, 'always'],
    'max-len': [2, { code: 80, ignoreUrls: true }],
    'linebreak-style': [2, 'unix'],
    'prettier/prettier': [
      2,
      {
        singleQuote: true,
        parser: 'typescript',
      },
      {
        usePrettierrc: true,
      },
    ],

    // react
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,

    // import
    'import/namespace': 0,
    'import/no-useless-path-segments': [2, { noUselessIndex: true }],
    'import/first': 2,
    'import/no-named-default': 2,
    'import/exports-last': 2,
    'import/newline-after-import': [2, { count: 1 }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
        groups: ['external', 'sibling', 'parent'],
      },
    ],

    // prefer arrow
    'prefer-arrow/prefer-arrow-functions': [
      2,
      {
        disallowPrototype: true,
        singleReturnOnly: true,
        classPropertiesAllowed: false,
      },
    ],

    // autofix
    'autofix/no-unused-vars': 2,

    'padding-line-between-statements': [
      2,
      {
        blankLine: 'always',
        prev: ['const'],
        next: ['*'],
      },
    ],
  },
};
