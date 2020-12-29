"use strict";

const { toTSRules } = require("../helpers");

const commonRulesJS = {
  "no-unused-vars": "error",
  "no-use-before-define": "error",
  semi: [ "error", "always" ],

  // Sometimes API requires async function as callback, and you don't use await
  // in the function. In such case, it is difficult to follow require-await.
  "require-await": "off",
};

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
    ecmaVersion: 2019,
    sourceType: "script", // "module" is only for JavaScript modules
  },
  plugins: [
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

    "editorconfig/charset": "error",
    "editorconfig/eol-last": "error",
    "editorconfig/indent": [ "error", { SwitchCase: 1 }],
    "editorconfig/linebreak-style": "error",
    "editorconfig/no-trailing-spaces": "error",

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
      extends: [
        "eslint:recommended",
      ],
      rules: {
        ...commonRulesJS,

        // This rule also disallows "use strict"; in module-based code including TypeScript.
        // You can still add "use strict"; in each source TypeScript code,
        // so I enable this rule only for JavaScript
        strict: [ "error", "safe" ],
      },
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

      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
      },
      plugins: [ "@typescript-eslint" ],
      rules: {
        ...toTSRules(commonRulesJS),

        //
        // Errors
        //
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/explicit-function-return-type": [ "error", { allowExpressions: true }],

        //
        // Warnings
        //
        "@typescript-eslint/adjacent-overload-signatures": "warn",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
        "@typescript-eslint/prefer-optional-chain": "warn",

        //
        // Off
        //
        "@typescript-eslint/indent": "off", // avoid conflict against editorconfig/indent
        "@typescript-eslint/no-this-alias": "off",

        // These rules may warn new ES syntax which is supported by TypeScript (e.g. import)
        "node/no-unsupported-features/es-builtins": "off",
        "node/no-unsupported-features/es-syntax": "off",
      },
      settings: {
        jsdoc: {
          mode: "typescript",
        },
      },
    },
  ],
};
