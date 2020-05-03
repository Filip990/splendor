const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname,'.prettierrc'),'utf8'),
);

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:react/recommended',
  ],
  plugins: [
    'prettier',
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    /*
      0 or 'off' - turn the rule off
      1 or 'warn' - turn the rule on as a warning (doesn’t affect exit code)
      2 or 'error' - turn the rule on as an error (exit code is 1 when triggered)
    */
    'prettier/prettier': [1, prettierOptions],
    'arrow-body-style': [1, 'as-needed'],
    'default-case': 0,
    'implicit-arrow-linebreak': 0,
    'import/newline-after-import': 1,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: true,
      },
    ],
    'import/no-unresolved': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        controlComponents: ['Input'],
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-debugger': 1,
    'no-empty': 1,
    'no-nested-ternary': 1,
    'no-unused-vars': 1,
    'no-use-before-define': [
      1,
      {
        functions: false,
      },
    ],
    'prefer-template': 1,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/boolean-prop-naming': 1,
    'react/default-props-match-prop-types': 1,
    'react/destructuring-assignment': 1,
    'react/display-name': 0,
    'react/jsx-curly-brace-presence': 1,
    'react/jsx-first-prop-new-line': [1,'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-handler-names': 1,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-pascal-case': 1,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 2,
    'react/no-danger': 2,
    'react/no-unused-prop-types': 1,
    'react/prop-types': 0,
  },
  overrides: [
    {
      files: ['**/*reducer.js'],
      rules: {
        'no-param-reassign': 0,
      },
    },
  ],
};
