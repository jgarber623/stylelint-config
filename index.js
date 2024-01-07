module.exports = {
  extends: ['stylelint-config-standard', '@stylistic/stylelint-config'],
  plugins: ['stylelint-order'],
  rules: {
    // Require an empty line before at-rules.
    //
    // https://stylelint.io/user-guide/rules/at-rule-empty-line-before/
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment']
      }
    ],

    // Specify the alphabetical order of properties within declaration blocks.
    //
    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-alphabetical-order/README.md
    'order/properties-alphabetical-order': true,

    // Specify Unix or Windows linebreaks.
    //
    // https://github.com/stylelint-stylistic/stylelint-stylistic/tree/main/lib/rules/linebreaks
    '@stylistic/linebreaks': 'unix',

    // Disallow the Unicode Byte Order Mark.
    //
    // https://github.com/stylelint-stylistic/stylelint-stylistic/tree/main/lib/rules/unicode-bom
    '@stylistic/unicode-bom': 'never'
  }
};
