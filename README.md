# eslint-config-phanective

ESLint config for my own projects.

## Install

```shell
npm install -D eslint eslint-config-phanective
```

## Usage

Create an eslint.config.js like following on the project root.
NOTE: This package only supports ES modules. If you use this config in the CommonJS project, make sure to rename the config file to eslint.config.**mjs**.

```javascript
import plain, { node, unbundled } from "eslint-config-phanective";

/** @type { import("eslint").Linter.Config[] } */
export default [
  {
    ignores: [
      "path/to/ignore/**",
    ],
  },

  ...plain,
  ...node,
  ...unbundled,

  {
    // Do not add `files: [ "*" ],` here.

    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
```

Supported configs:

- (default)
- `node`
- ~~react~~ (temporalily inactive)
- ~~next~~ (temporalily inactive)
- `vueTS`
- `nuxtTS`
- `svelte`
- `unbundled`
  - Use this rules in addition to the above rules if the project depends on package.json's `dependencies` on production i.e. npm packages and backend Node.js app without bundling.

## Test with realworld projects

### 1. Generate npm package

```shell
$ cd /path/to/eslint-config-phanective
$ npm pack
```

### 2. Install new package on a realworld project

```shell
$ cd /path/to/target/project
$ npm install ../eslint-config-phanective/eslint-config-phanective-2024.1.1.tgz
```

### 3. Test

```shell
# $ cd /path/to/target/project
$ npm run lint
```
