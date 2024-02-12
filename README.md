# @jgarber/stylelint-config

**Shareable [Stylelint](https://stylelint.io) configuration.**

[![npm](https://img.shields.io/npm/v/@jgarber/stylelint-config.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@jgarber/stylelint-config)
[![Downloads](https://img.shields.io/npm/dt/@jgarber/stylelint-config.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@jgarber/stylelint-config)
[![Build](https://img.shields.io/github/actions/workflow/status/jgarber623/stylelint-config/ci.yml?branch=main&logo=github&style=for-the-badge)](https://github.com/jgarber623/stylelint-config/actions/workflows/ci.yml)

> [!NOTE]
> See [@jgarber/stylelint-config-scss](https://www.npmjs.com/package/@jgarber/stylelint-config-scss) for a shareable Stylelint configuration suitable for SCSS syntax Sass files.

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

In a JavaScript file using [ECMAScript module (ESM)](https://nodejs.org/api/esm.html) syntax:

```js
// stylelint.config.mjs
export { default } from "@jgarber/stylelint-config";
```

In a JavaScript file using [CommonJS module](https://nodejs.org/api/modules.html) syntax:

```js
// stylelint.config.cjs
module.exports = {
  extends: "@jgarber/stylelint-config"
}
```

## License

@jgarber/stylelint-config is freely available under the [MIT License](https://opensource.org/licenses/MIT).
