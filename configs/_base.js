"use strict";

const { getLangSpecificRules } = require("../helpers");

module.exports = (lang) => ({
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
  plugins: [
    "editorconfig",
    "import",
    "jsdoc",
    "no-unsanitized",
    "promise",
  ],
  rules: Object.assign({
    "arrow-body-style": [ "error", "as-needed" ],
    "comma-dangle": [ "error", "always-multiline" ],
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

    "editorconfig/editorconfig": "error",

    "no-unsanitized/method": "error",
    "no-unsanitized/property": "error",

    //
    // Warnings - Testing
    // Because following rules might make a problem,
    // currently they are not treated as errors.
    //
    "no-prototype-builtins": "warn",
    "class-methods-use-this": "warn",
    complexity: "warn",

    //
    // Warnings: JSDoc
    // JSDoc rules should not be reported as errors but warnings
    //
    "jsdoc/check-examples": "warn",
    "jsdoc/check-indentation": "warn",
    "jsdoc/check-syntax": "warn",
    "jsdoc/require-description-complete-sentence": "warn",
    "jsdoc/require-hyphen-before-param-description": "warn",

    //
    // Warnings - styles
    // These are just a preference in coding style.
    // Following rules doesn't reduce quality or readability
    //
    "array-bracket-spacing": [ "warn", "always", { arraysInArrays: false, objectsInArrays: false }],
    "brace-style": "warn",
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

    "no-console": "off",
  }, getLangSpecificRules({
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "require-await": "error",
    semi: [ "error", "always" ],
  }, lang)),
});
