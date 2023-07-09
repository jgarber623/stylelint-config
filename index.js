module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-stylistic/config'
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    'stylistic/linebreaks': 'unix',
    'stylistic/unicode-bom': 'never'
  }
};
