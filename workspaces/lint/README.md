# `@phanect/lint[-vue|-svelte|-astro]`

ESLint config for my own projects.

## Install

```shell
npm install -D eslint @phanect/lint @phanect/lint-react @phanect/lint-vue @phanect/lint-svelte @phanect/lint-astro
```

`@phanect/lint-*` packages are the linter configs for the specific frameworks. Install them if you use them.

## Usage

Create an eslint.config.js like following on the project root.
NOTE: This package only supports ES modules. If you use this config in the CommonJS project, make sure to rename the config file to eslint.config.**mjs**.

```javascript
import { core } from "@phanect/lint";
import { vue, nuxt } from "@phanect/lint-vue";

/** @type { import("eslint").Linter.Config[] } */
export default [
  {
    ignores: [
      "path/to/ignore/**",
    ],
  },

  ...core,
  ...vue,
  ...nuxt,

  // If the project includes TypeScript files...
  {
    // Do not add `files: [ "*" ],` here.

    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
```

Supported configs:

- `@phanect/lint`
  - `core`
  - `nodejs`
  - `unbundled`
    - Use this rules in addition to the above rules if the project depends on package.json's `dependencies` on production i.e. npm packages and backend Node.js app without bundling.
- `@phanect/lint-react`
  - react (react-hooks is not included currently because it does not support the flat config yet.)
  - ~~next~~ (temporalily inactive)
- `@phanect/lint-vue`
  - `vue`
  - `nuxt`
- `@phanect/lint-svelte`
  - `svelte`
- `@phanect/lint-astro`
  - `astro`

## Test with realworld projects

### 1. Generate npm package

```shell
$ cd /path/to/misc
$ npm pack
```

### 2. Install new package on a realworld project

```shell
$ cd /path/to/target/project
$ npm install ../misc/eslint-config-phanective-2024.1.1.tgz
```

### 3. Test

```shell
# $ cd /path/to/target/project
$ npm run lint
```
