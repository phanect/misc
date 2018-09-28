"use strict";

const config = {
  extends: [
    "eslint:recommended",
    "plugin:security/recommended",
    "plugin:vue/recommended",
  ],

  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: [
    "security",
    "typescript",
  ],
  rules: {
    "comma-dangle": [ "error", "always-multiline" ],
    "eol-last": [ "error", "always" ], // Not warning to keep diff in commit log readable
    indent: [ "error", 2, {
      SwitchCase: 1,
      VariableDeclarator: { var: 2, let: 2, const: 3 },
    }],
    "no-trailing-spaces": "error", // Not warning to keep diff in commit log readable
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "no-whitespace-before-property": "error",
    "no-var": "error",
    "prefer-const": [ "error", {
      destructuring: "all",
      ignoreReadBeforeAssign: true,
    }],
    semi: [ "error", "always" ],
    "unicode-bom": [ "error", "never" ],

    //
    // Warnings
    // These are just a preference in coding style.
    // Following rules doesn't reduce quality or readability
    //
    "array-bracket-spacing": [ "warn", "always", { arraysInArrays: false, objectsInArrays: false }],
    "brace-style": "warn",
    curly: "warn",
    "no-multi-spaces": [ "warn", { ignoreEOLComments: true, exceptions: { Property: true }}],
    "object-curly-spacing": [ "warn", "always", { arraysInObjects: false, objectsInObjects: false }],
    "one-var": [ "warn", {
      const: "consecutive",
      let: "consecutive",
      separateRequires: true,
    }],
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
  },
};

config.overrides = [
  {
    files: [ "*.ts" ],
    parserOptions: {
      parser: "typescript-eslint-parser",
    },
    rules: Object.assign(config.rules, {
      //
      // Warnings
      //
      "typescript/adjacent-overload-signatures": "warn",
      "typescript/class-name-casing": "warn",
      "typescript/interface-name-prefix": "warn",
      "typescript/no-unused-vars": "error",

      //
      // Disabled
      //
      // Temporary disabled due to known bug for typescript-eslint-parser:
      // https://github.com/eslint/typescript-eslint-parser/issues/416
      "no-undef": "off",
    }),
  },
  {
    files: [ "*.vue" ],
    plugins: config.plugins.concat("vue"),
    rules: Object.assign(config.rules, {
      //
      // Warnings
      //
      "vue/html-self-closing": [ "warn", { html: { normal: "never" }}],
      "vue/max-attributes-per-line": [ "warn", {
        singleline: 7,
        multiline: { max: 2 },
      }],
    }),
  },
];

module.exports = config;
