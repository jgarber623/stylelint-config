const stylelint = require('stylelint');

const config = require('../index');

it('exports an Object', () => {
  expect(config).toEqual(jasmine.objectContaining({
    extends: ['stylelint-config-standard', 'stylelint-stylistic/config'],
    plugins: ['stylelint-order']
  }));
});

it('loads the config and validates correct syntax', async () => {
  const code = 'html { margin: 0; }\n';
  const { errored } = await stylelint.lint({ code, config });

  expect(errored).toBe(false);
});

it('loads the config and invalidates incorrect syntax', async () => {
  const code = 'html {padding: 0\r\n; margin: 0 }';
  const { errored, results } = await stylelint.lint({ code, config });

  expect(errored).toBe(true);

  expect(results[0].warnings.map(({ rule }) => rule))
    .toEqual(jasmine.arrayContaining(
      [
        'order/properties-alphabetical-order',
        'stylistic/block-closing-brace-newline-before',
        'stylistic/block-opening-brace-newline-after',
        'stylistic/declaration-block-semicolon-newline-after',
        'stylistic/declaration-block-semicolon-space-before',
        'stylistic/declaration-block-trailing-semicolon',
        'stylistic/linebreaks',
        'stylistic/no-missing-end-of-source-newline'
      ]
    ));
});
