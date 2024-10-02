import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import jsdoc from "eslint-plugin-jsdoc";
import promise from "eslint-plugin-promise";
import ts from "typescript-eslint";
import { toTSRules, type CodeExtensions, type JsExtensions, type TsExtensions } from "../utils.ts";
import type { ESLint, Linter } from "eslint";
import "../types/plugins.d.ts";

/** Rules to be prefixed with "@typescript-eslint/" when they are applied to TS */
const prefixRequiredRules: Linter.RulesRecord = {
  "no-unused-vars": "error",
  "no-use-before-define": "error",

  // Sometimes API requires async function as callback, and you don't use await
  // in the function. In such case, it is difficult to follow require-await.
  "require-await": "off",
};

/**
 * Config to be applied to both JS and TS.
 * This config have to be declared after the recommended rulesets to avoid to be overwritten.
 */
export const commonConfigs: Linter.Config[] = [
  stylistic.configs["recommended-flat"],
  promise.configs["flat/recommended"],
  // TODO add import-x, editorconfig, and document-write plugins when it is ready to flat configs
  // importConfigs["flat/recommended"],
  // editorConfigConfigs["recommended"],
  // docWriteConfigs["recommended"],
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    plugins: {
      "@stylistic": stylistic as ESLint.Plugin,
      jsdoc,
      promise,
    },

    rules: {
      //
      // Errors
      //
      "arrow-body-style": [ "error", "as-needed" ],
      "@stylistic/comma-dangle": [ "error", {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        enums: "always-multiline",
        generics: "always-multiline",
        tuples: "always-multiline",
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

      // "document-write/no-document-write": "error",
      // "editorconfig/charset": "error",
      // "editorconfig/eol-last": "error",
      // "editorconfig/indent": [ "error", { SwitchCase: 1 }],
      // "editorconfig/linebreak-style": "error",
      // "editorconfig/no-trailing-spaces": "error",
      // "import-x/no-unresolved": [ "error", { ignore: [ "vitest/config" ]}],

      // Temporal equivalent rules for editorconfig plugin
      "unicode-bom": [ "error", "never" ],
      "@stylistic/eol-last": [ "error", "always" ],
      "@stylistic/indent": [ "error", 2, { SwitchCase: 1 }],
      "@stylistic/linebreak-style": [ "error", "unix" ],
      "@stylistic/no-trailing-spaces": "error",

      // Declare again to avoid to be overwritten by `plugin:import-x/typescript`
      // "import-x/order": [ "warn", {
      //   alphabetize: {
      //     order: "asc",
      //     orderImportKind: "asc",
      //   },
      //   warnOnUnassignedImports: true,
      //   groups: [
      //     "builtin",
      //     "external",
      //     "internal",
      //     [ "parent", "sibling", "index" ],
      //     "object",
      //     "type",
      //   ],
      // }],

      "promise/prefer-await-to-callbacks": "error",
      "promise/prefer-await-to-then": "error",

      //
      // Warnings: JSDoc
      // JSDoc rules should not be reported as errors but warnings
      //
      "jsdoc/check-indentation": "warn",
      "jsdoc/check-syntax": "warn",
      "jsdoc/require-hyphen-before-param-description": "warn",

      //
      // Warnings - styles
      // These are just a preference in coding style.
      // Following rules doesn't reduce quality or readability
      //
      "@stylistic/array-bracket-spacing": [ "warn", "always", { arraysInArrays: false, objectsInArrays: false }],
      "@stylistic/arrow-parens": [ "warn", "always" ],
      "@stylistic/brace-style": [ "warn", "1tbs" ],
      curly: "warn",
      "@stylistic/member-delimiter-style": [ "warn", {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: true,
        },
      }],
      "@stylistic/no-multi-spaces": [ "warn", { ignoreEOLComments: true, exceptions: { Property: true }}],
      "@stylistic/object-curly-spacing": [ "warn", "always", { arraysInObjects: false, objectsInObjects: false }],
      "one-var": [ "warn", "never" ],
      "@stylistic/one-var-declaration-per-line": [ "warn", "initializations" ],
      "@stylistic/padded-blocks": [ "warn", "never" ],
      "prefer-arrow-callback": "warn",
      "@stylistic/quote-props": [ "warn", "as-needed" ],
      "@stylistic/quotes": [ "warn", "double" ],
      "@stylistic/semi": [ "error", "always" ],
      "@stylistic/space-before-blocks": [ "warn", "always" ],
      "@stylistic/space-before-function-paren": [ "warn", {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      }],
      "@stylistic/space-in-parens": [ "warn", "never" ],
      "@stylistic/spaced-comment": [ "warn", "always" ],
      "@stylistic/switch-colon-spacing": [ "warn", { before: false, after: true }],
      "@stylistic/template-curly-spacing": [ "warn", "always" ],

      "@stylistic/jsx-curly-spacing": [ "warn", { when: "always" }],

      // Require file extensions in `import`s
      // "import-x/extensions": [ "warn", "always", { ignorePackages: true }],

      //
      // Off
      //
      "no-console": "off",
      "jsdoc/require-jsdoc": "off",
      "jsdoc/require-description-complete-sentence": "off",

      "@stylistic/jsx-one-expression-per-line": "off",
    },
    // settings: {
    //   "import-x/ignore": [
    //     "node_modules",
    //     "vitest", // not working with import-x/named
    //   ],
    // },
  } satisfies Linter.Config,
].map((config) => ({
  ...config,
  files: [
    "**/*.js",
    "**/*.mjs",
    "**/*.cjs",
    "**/*.jsx",
    "**/*.ts",
    "**/*.mts",
    "**/*.cts",
    "**/*.tsx",
    "**/*.vue",
    "**/*.svelte",
    "**/*.astro",
  ] as CodeExtensions,
}));

export const jsConfigs: Linter.Config[] = [
  js.configs.recommended,
  jsdoc.configs["flat/recommended"],
  {
    rules: {
      ...prefixRequiredRules,

      // This rule also disallows "use strict"; in module-based code including TypeScript.
      // You can still add "use strict"; in each source TypeScript code,
      // so I enable this rule only for JavaScript
      strict: [ "error", "safe" ],
    },
  } satisfies Linter.Config,
].map((config) => ({
  files: [ "**/*.js", "**/*.mjs", "**/*.cjs", "**/*.jsx" ] as JsExtensions,
  ...config,
}));

export const tsConfigs: Linter.Config[] = ts.config(
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  jsdoc.configs["flat/recommended-typescript"],
  {
    // TODO add import-x, editorconfig, and document-write plugins when it is ready to flat configs
    // ...importConfigs["typescript"],

    rules: {
      ...toTSRules(prefixRequiredRules),

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
      // Warnings - style
      //
      "@typescript-eslint/consistent-type-definitions": [ "warn", "type" ],

      //
      // Off
      //

      // Sometimes I want to declare variables with types to emphasize the type.
      "@typescript-eslint/no-inferrable-types": "off",

      "@typescript-eslint/no-this-alias": "off",

      // These rules may warn new ES syntax which is supported by TypeScript (e.g. import)
      "n/no-unsupported-features/es-builtins": "off",
      "n/no-unsupported-features/es-syntax": "off",
    },
    settings: {
      jsdoc: {
        mode: "typescript", // TODO Check if this setting is required.
      },
      // "import-x/resolver": {
      //   typescript: {
      //     extensions: [
      //       ".js", ".mjs", ".cjs",
      //       ".ts", ".mts", ".cts",
      //       ".d.ts", ".json",
      //       ".jsx", ".tsx", ".vue", ".svelte",
      //     ],
      //     alwaysTryTypes: true,
      //   },
      // },
    },
  } satisfies Linter.Config,
).map((config) => ({
  ...config,
  files: [
    "**/*.ts",
    "**/*.mts",
    "**/*.cts",
    "**/*.tsx",
    "**/*.vue",
    "**/*.svelte",
    "**/*.astro",
  ] as TsExtensions,
})) as Linter.Config[];
