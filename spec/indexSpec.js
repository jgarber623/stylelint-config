const stylelint = require('stylelint');

const config = require('../index');

it('exports an Object', () => {
  expect(config).toEqual(jasmine.objectContaining({ extends: 'stylelint-config-standard' }));
});

it('loads the config and validates correct syntax', async () => {
  const results = await stylelint.lint({ code: 'html { margin: 0 }', config });

  expect(results.errored).toBe(false);
});

it('loads the config and invalidates incorrect syntax', async () => {
  const results = await stylelint.lint({ code: 'html { padding: 0; margin: 0 }', config });

  const rules = results.results[0].warnings.map(({ rule }) => rule);

  expect(results.errored).toBe(true);
  expect(rules).toEqual(jasmine.arrayContaining(['declaration-block-single-line-max-declarations', 'order/properties-alphabetical-order']));
});
