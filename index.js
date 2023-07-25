module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-stylistic/config'
  ],
  plugins: ['stylelint-order'],
  rules: {
    /*
     * Require an empty line before at-rules.
     *
     * @see {@linke https://stylelint.io/user-guide/rules/at-rule-empty-line-before/}
     */
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment']
      }
    ],

    /*
     * Specify the alphabetical order of properties within declaration blocks.
     *
     * @see {@link https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-alphabetical-order/README.md}
     */
    'order/properties-alphabetical-order': true,

    /*
     * Specify Unix or Windows linebreaks.
     *
     * @see {@link https://github.com/elirasza/stylelint-stylistic/tree/main/lib/rules/linebreaks}
     */
    'stylistic/linebreaks': 'unix',

    /*
     * Disallow the Unicode Byte Order Mark.
     *
     * @see {@link https://github.com/elirasza/stylelint-stylistic/tree/main/lib/rules/unicode-bom}
     */
    'stylistic/unicode-bom': 'never'
  }
};
