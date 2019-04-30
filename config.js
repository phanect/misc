"use strict";

const js = {
        extends: [
          "eslint:recommended",
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
      },
      ts = {
        extends: js.extends.concat([ "plugin:@typescript-eslint/recommended" ]),
        parserOptions: {
          parser: "@typescript-eslint/parser",
        },
        plugins: js.plugins.concat([ "@typescript-eslint" ]),
        rules: Object.assign({
          "@typescript-eslint/indent": js.rules.indent,

          //
          // Warnings
          //
          "@typescript-eslint/adjacent-overload-signatures": "warn",
          "@typescript-eslint/class-name-casing": "warn",
          "@typescript-eslint/interface-name-prefix": "warn",
          "@typescript-eslint/no-unused-vars": "error",
        }, js.rules),
      },
      vue = (lang) => {
        return {
          extends: lang.extends.concat([ "plugin:vue/recommended" ]),
          plugins: lang.plugins.concat("vue"),
          rules: Object.assign({
            //
            // Warnings
            //
            "vue/html-self-closing": [ "warn", { html: { normal: "never" }}],
            "vue/max-attributes-per-line": [ "warn", {
              singleline: 7,
              multiline: { max: 2 },
            }],
          }, lang.rules),
        };
      };

module.exports = {
  configs: {
    js, ts,
    "js+vue": vue(js),
    "ts+vue": vue(ts),
  },
};
