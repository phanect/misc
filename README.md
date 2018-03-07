eslint-config-phanective
==============================================

[![Greenkeeper badge](https://badges.greenkeeper.io/phanect/eslint-config-phanective.svg)](https://greenkeeper.io/)

ESLint config for my own projects.

Install
-------

```shell
yarn add --dev @phanect/eslint-config-phanective
```

Usage
------

Create following .eslintrc.js on the project root:

```javascript
module.exports = {
  extends: "@phanect/phanective",

  env: {
    "browser": true, // or: "node": true
  },

  // If your project is TypeScript-based, add this line:
  parser: "typescript-eslint-parser",
}
```
