const fs = require('node:fs');
const stylelint = require('stylelint');
const test = require('ava');

const config = require('../index');

test('module.exports', t => {
  t.like(config, {
    extends: ['stylelint-config-standard', '@stylistic/stylelint-config'],
    plugins: ['stylelint-order']
  });
});

test('loads configuration and validates correct syntax', async t => {
  const code = fs.readFileSync('./test/helpers/valid.css', 'utf8');
  const { errored } = await stylelint.lint({ code, config });

  t.false(errored);
});

test('loads configuration and invalidates incorrect syntax', async t => {
  const code = fs.readFileSync('./test/helpers/invalid.css', 'utf8');
  const { errored, results } = await stylelint.lint({ code, config });

  t.true(errored);

  t.like(results, [
    {
      errored: true,
      warnings: [
        { rule: 'order/properties-alphabetical-order' },
        { rule: '@stylistic/linebreaks' },
        { rule: '@stylistic/block-closing-brace-newline-before' },
        { rule: '@stylistic/block-opening-brace-newline-after' },
        { rule: '@stylistic/declaration-block-semicolon-newline-after' },
        { rule: '@stylistic/declaration-block-semicolon-space-before' },
        { rule: '@stylistic/declaration-block-trailing-semicolon' },
        { rule: '@stylistic/no-missing-end-of-source-newline' }
      ]
    }
  ]);
});
