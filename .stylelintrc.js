module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-prettier'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'no-descending-specificity': null,
    'prettier/prettier': true,
  },
};
