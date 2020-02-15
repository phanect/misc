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
  extends: "plugin:@phanect/js", // if your project is TypeScript-based, use "plugin:@phanect/ts"
  root: true,

  env: {
    browser: true, // or: "node": true
  },
  // If your project is TypeScript-based, you need to specify the tsconfig.json location
  parserOptions: {
    project: "./tsconfig.json",
    // Add sourceType: "module" if you use `import`/`export` syntax in JS. (e.g. JS modules, webpack)
    // You don't need this if you use a TS preset.
    // sourceType is "script" in JS presets and "module" in TS presets by default
    sourceType: "module",
  },
  plugins: [ "@phanect" ]
};
```

Also create .eslintrc.js in the test directory for test-specific configs:

```javascript
module.exports = {
  extends: "plugin:@phanect/jest",
};
```

Supported configs:

- plugin:@phanect/js
- plugin:@phanect/ts
- plugin:@phanect/node+js
- plugin:@phanect/node+ts
- plugin:@phanect/react+js
- plugin:@phanect/react+ts
- plugin:@phanect/vue+js
- plugin:@phanect/vue+ts
- plugin:@phanect/jest
