@phanect/eslint-plugin
==============================================

[![CircleCI](https://circleci.com/gh/phanect/eslint-plugin.svg?style=svg)](https://circleci.com/gh/phanect/eslint-plugin)

ESLint config for my own projects.

Install
-------

```shell
yarn add --dev @phanect/eslint-plugin
```

Usage
------

Create an .eslintrc.js like following on the project root:

```javascript
const { join } = require("path");

module.exports = {
  extends: "plugin:@phanect/plain",
  root: true,

  env: {
    browser: true, // or: "node": true
  },
  // If your project is TypeScript-based, you need to specify the tsconfig.json location
  parserOptions: {
    project: join(__dirname, "./tsconfig.json"),
  },
  plugins: [ "@phanect" ],
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
  extends: "plugin:@phanect/jest",
};
```

Supported configs:

- plugin:@phanect/plain
- plugin:@phanect/node
- plugin:@phanect/react
- plugin:@phanect/vue
- plugin:@phanect/jest
