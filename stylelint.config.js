module.exports = {
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    './node_modules/prettier-stylelint/config.js',
  ],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    indentation: 2,
    'no-duplicate-selectors': true,
    'rule-empty-line-before': 'always',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'return', 'if', 'each', 'include', 'mixin'],
      },
    ],
  },
};
