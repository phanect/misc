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
module.exports = {
  extends: "plugin:@phanect/js", // if your project is TypeScript-based, use "plugin:@phanect/js"
  root: true,

  env: {
    browser: true, // or: "node": true
  },
  // If your project is TypeScript-based, you need to specify the tsconfig.json location
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: [ "@phanect" ]
};
```

Supported configs:

- plugin:@phanect/js
- plugin:@phanect/ts
- plugin:@phanect/vue+js
- plugin:@phanect/vue+ts
