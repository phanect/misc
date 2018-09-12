"use strict";

const config = {
  extends: [
    "eslint:recommended",
    "plugin:security/recommended",
    "plugin:vue/recommended",
    "prettier",
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
  plugins: ["prettier", "security", "typescript"],
  rules: {
    "eol-last": ["error", "always"], // Not warning to keep diff in commit log readable
    "no-trailing-spaces": "error", // Not warning to keep diff in commit log readable
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "no-whitespace-before-property": "error",
    "no-var": "error",
    "prefer-const": [
      "error",
      {
        destructuring: "all",
        ignoreReadBeforeAssign: true,
      },
    ],
    semi: ["error", "always"],
    "unicode-bom": ["error", "never"],

    //
    // Warnings
    // These are just a preference in coding style.
    // Following rules doesn't reduce quality or readability
    //
    "one-var": [
      "warn",
      {
        const: "consecutive",
        let: "consecutive",
        separateRequires: true,
      },
    ],
    "prefer-arrow-callback": "warn",
    "spaced-comment": ["warn", "always"],

    // Prettier
    "prettier/prettier": ["warn", require("./.prettierrc.js")],

    "no-console": "off",
  },
};

config.overrides = [
  {
    files: ["*.ts"],
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
    files: ["*.vue"],
    plugins: config.plugins.concat("vue"),
    rules: Object.assign(config.rules, {
      //
      // Warnings
      //
      "vue/html-self-closing": ["warn", { html: { normal: "never" } }],
      "vue/max-attributes-per-line": [
        "warn",
        {
          singleline: 7,
          multiline: {
            max: 2,
          },
        },
      ],
    }),
  },
];

module.exports = config;
