eslint-config-phanective
==============================================

[![CircleCI](https://circleci.com/gh/phanect/eslint-config-phanective/tree/master.svg?style=svg)](https://circleci.com/gh/phanect/eslint-config-phanective/tree/master)

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
  plugins: [ "@phanect" ]
};
```

Supported configs:

- plugin:@phanect/js
- plugin:@phanect/ts
- plugin:@phanect/js+vue
- plugin:@phanect/ts+vue
