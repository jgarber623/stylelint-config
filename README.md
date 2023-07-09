# stylelint-config

Shareable [Stylelint](https://stylelint.io) configuration.

## Installation

```sh
npm install --save-dev @jgarber/stylelint-config
```

## Usage

Stylelint supports [a variety of configuration file formats](https://stylelint.io/user-guide/configure).

### YAML

In a file named `.stylelintrc` or `.stylelintrc.yml`:

```yaml
---
extends: "@jgarber/stylelint-config"
---
```

### JSON

In a file named `.stylelintrc` or `.stylelintrc.json`:

```json
{
  "extends": "@jgarber/stylelint-config"
}
```

### JavaScript

In a JavaScript file using [CommonJS module](https://nodejs.org/api/modules.html) syntax:

```js
// stylelint.config.cjs
module.exports = require('@jgarber/stylelint-config');
```

In a JavaScript file using [ECMAScript module (ESM)](https://nodejs.org/api/esm.html) syntax:

```js
// stylelint.config.mjs

import config from '@jgarber/stylelint-config';

export default config;
```
