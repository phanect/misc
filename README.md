eslint-config-phanective
==============================================

[![CircleCI](https://circleci.com/gh/phanect/eslint-config-phanective.svg?style=svg)](https://circleci.com/gh/phanect/eslint-config-phanective)

ESLint config for my own projects.

Install
-------

```shell
yarn add --dev eslint-config-phanective
```

Usage
------

Create an .eslintrc.js like following on the project root:

```javascript
const { join } = require("path");

module.exports = {
  extends: "phanective",
  root: true,

  env: {
    browser: true, // or: "node": true
  },
  // If your project is TypeScript-based, you need to specify the tsconfig.json location
  parserOptions: {
    project: join(__dirname, "./tsconfig.eslint.json"),
  },
  // Add sourceType: "module" if you use `import`/`export` syntax in JS. (e.g. JS modules, webpack)
  // You don't need this if only use TS. By default, sourceType is "script" in JS and "module" in TS.
  // To avoid treating *.cjs files as modules, ensure to use `overrides` to only apply it to *.js.
  overrides: [{
    files: [ "*.js", "**/*.js" ],
    parserOptions: {
      sourceType: "module",
    },
  }],
};
```

Also create .eslintrc.js in the test directory for test-specific configs:

```javascript
module.exports = {
  extends: "phanective/jest",
};
```

Supported configs:

- phanective
- phanective/node
- phanective/react
- phanective/vue+js (Vue 3)
- phanective/vue+ts (Vue 3)
- phanective/nuxt+js (Nuxt 2 + Vue 2)
- phanective/nuxt+ts (Nuxt 2 + Vue 2)
- phanective/jest

Test with realworld projects
----------------------------

1. Generate npm package

```shell
$ cd /path/to/eslint-config-phanective
$ npm pack
```

2. Install new package on a realworld project

```shell
$ cd /path/to/target/project
$ npm install ../eslint-config-phanective/eslint-config-phanective-2022.1.1.tgz
```

3. Test

```shell
# $ cd /path/to/target/project
$ npm run lint
```
