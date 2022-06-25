"use strict";

const { jsRules, tsRules } = require("./overrides/lang-specific");

module.exports = {
  extends: [
    "plugin:editorconfig/noconflict",
    "plugin:jsdoc/recommended",
    "plugin:promise/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],

  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "script", // "module" is only for JavaScript modules
  },
  plugins: [
    "document-write",
    "editorconfig",
    "import",
    "jsdoc",
    "promise",
  ],
  rules: {
    "arrow-body-style": [ "error", "as-needed" ],
    "comma-dangle": [ "error", {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "always-multiline",
      exports: "always-multiline",
      functions: "only-multiline",
    }],
    "no-async-promise-executor": "error",
    "no-misleading-character-class": "error",
    "no-param-reassign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-template-curly-in-string": "error",
    "no-unused-expressions": [ "error", { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }],
    "no-unused-labels": "error",
    "no-whitespace-before-property": "error",
    "no-var": "error",
    "prefer-const": [ "error", {
      destructuring: "all",
      ignoreReadBeforeAssign: true,
    }],
    "prefer-spread": "error",

    "document-write/no-document-write": "error",
    "editorconfig/charset": "error",
    "editorconfig/eol-last": "error",
    "editorconfig/indent": [ "error", { SwitchCase: 1 }],
    "editorconfig/linebreak-style": "error",
    "editorconfig/no-trailing-spaces": "error",

    //
    // Warnings: JSDoc
    // JSDoc rules should not be reported as errors but warnings
    //
    "jsdoc/check-examples": "off", // temporary disabled because it is incompatible with ESLint 8
    "jsdoc/check-indentation": "warn",
    "jsdoc/check-syntax": "warn",
    "jsdoc/require-hyphen-before-param-description": "warn",

    //
    // Warnings - styles
    // These are just a preference in coding style.
    // Following rules doesn't reduce quality or readability
    //
    "array-bracket-spacing": [ "warn", "always", { arraysInArrays: false, objectsInArrays: false }],
    curly: "warn",
    "no-multi-spaces": [ "warn", { ignoreEOLComments: true, exceptions: { Property: true }}],
    "object-curly-spacing": [ "warn", "always", { arraysInObjects: false, objectsInObjects: false }],
    "one-var": [ "warn", "never" ],
    "one-var-declaration-per-line": [ "warn", "initializations" ],
    "padded-blocks": [ "warn", "never" ],
    "prefer-arrow-callback": "warn",
    "quote-props": [ "warn", "as-needed" ],
    quotes: [ "warn", "double" ],
    "space-before-blocks": [ "warn", "always" ],
    "space-before-function-paren": [ "warn", {
      anonymous: "never",
      named: "never",
      asyncArrow: "always",
    }],
    "space-in-parens": [ "warn", "never" ],
    "spaced-comment": [ "warn", "always" ],
    "switch-colon-spacing": [ "warn", { before: false, after: true }],

    //
    // Off
    //
    "import/no-unresolved": "off", // Not working other than Node or Webpack
    "no-console": "off",

    "jsdoc/require-jsdoc": "off",
    "jsdoc/require-description-complete-sentence": "off",
  },
  overrides: [
    {
      files: [
        "*.js", "**/*.js",
        "*.mjs", "**/*.mjs",
        "*.cjs", "**/*.cjs",
      ],
      ...jsRules,
    },
    {
      files: [ "*.cjs", "**/*.cjs" ],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: [ "*.mjs", "**/*.mjs" ],
      parserOptions: {
        sourceType: "module",
      },
    },
    {
      files: [ "*.ts", "**/*.ts" ],
      ...tsRules,
    },
  ],
};
