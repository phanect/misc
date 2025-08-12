import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import imports from "eslint-plugin-import";
import jsdoc from "eslint-plugin-jsdoc";
import promise from "eslint-plugin-promise";
import ts from "typescript-eslint";
import { toTSRules, type CodeExtensions, type JsExtensions, type TsExtensions } from "../utils.ts";
import type { ESLint, Linter } from "eslint";

/** Rules to be prefixed with "@typescript-eslint/" when they are applied to TS */
const prefixRequiredRules: Linter.RulesRecord = {
  // Workaround: Empty options are required as of @typescript-eslint v8.14.0 due to its bug
  "dot-notation": [ "error", {}],
  "no-empty-function": [ "error", { allow: []}],

  "no-unused-expressions": [ "error", {
    allowShortCircuit: true,
    allowTernary: true,
    allowTaggedTemplates: true,
  }],
  "no-unused-vars": [ "error", { ignoreRestSiblings: true }],

  // Unnecessary stylistic issue
  "no-use-before-define": "off",
  // Sometimes API requires async function as callback, and you don't use await
  // in the function. In such case, it is difficult to follow require-await.
  "require-await": "off",
};

/**
 * Config to be applied to both JS and TS.
 * This config have to be declared after the recommended rulesets to avoid to be overwritten.
 */
export const commonConfigs: Linter.Config[] = [
  stylistic.configs.recommended,
  imports.flatConfigs.recommended,
  promise.configs["flat/recommended"],
  // TODO add editorconfig and document-write plugins when it is ready to flat configs
  // editorConfigConfigs["recommended"],
  // docWriteConfigs["recommended"],
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "@stylistic": stylistic as ESLint.Plugin,
      jsdoc: jsdoc as ESLint.Plugin,
      promise,
    },

    rules: {
      //
      // Errors
      //
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

      // Temporal equivalent rules for editorconfig plugin
      "unicode-bom": [ "error", "never" ],
      "@stylistic/eol-last": [ "error", "always" ],
      "@stylistic/indent": [ "error", 2, {
        flatTernaryExpressions: true,
        SwitchCase: 1,
      }],
      "@stylistic/linebreak-style": [ "error", "unix" ],
      "@stylistic/no-trailing-spaces": "error",

      "import/no-deprecated": "warn",
      "import/order": [ "warn", {
        alphabetize: {
          // By enabling this, it forces to put the types from relative path
          // (e.g. `import type { Ext } from "./utils.ts";`) before the types
          // from the external modules (e.g. `import type { Linter } from "eslint";`)
          // order: "asc",

          orderImportKind: "asc",
          caseInsensitive: true,
        },
        named: {
          enabled: true,
          import: true,
          export: true,
          require: true,
          cjsExports: true,
          types: "types-last",
        },
        warnOnUnassignedImports: true,
        groups: [
          "builtin",
          "external",
          "internal",
          [ "parent", "sibling", "index" ],
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "~/**",
            group: "internal",
          },
          {
            pattern: "~~/**",
            group: "internal",
          },
          {
            pattern: "@/**",
            group: "internal",
          },
          {
            pattern: "@@/**",
            group: "internal",
          },
        ],
      }],

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
      "@stylistic/multiline-ternary": "off",
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
      "@stylistic/spaced-comment": [ "warn", "always", {
        markers: [ "/" ], // docblock-style comments (Comments starting with triple slashes`///`)
      }],
      "@stylistic/switch-colon-spacing": [ "warn", { before: false, after: true }],
      "@stylistic/template-curly-spacing": [ "warn", "always" ],

      // If `always`, whitespace is required between `{}` and array's `[]`
      // e.g. `<Cmp attr={ [ el1, el2 ] }>`
      "@stylistic/jsx-curly-spacing": [ "warn", { when: "never" }],

      // Require file extensions in `import`s
      "import/extensions": [ "warn", "always", {
        checkTypeImports: true,
        ignorePackages: true,
      }],

      //
      // Off
      //
      "no-console": "off",

      // Only enable in TypeScript. Use no-duplicate-imports for JS.
      "import/no-duplicates": "off",
      // Only enable in JavaScript. In TypeScript, tsc checks it
      "import/no-unresolved": "off",

      "jsdoc/require-jsdoc": "off",
      "jsdoc/require-description-complete-sentence": "off",

      "arrow-body-style": "off",
      "@stylistic/jsx-one-expression-per-line": "off",
    },
    settings: {
      "import/ignore": [
        "node_modules",
        "vitest", // not working with import/named
      ],
    },
  } satisfies Linter.Config,
].map((config) => ({
  ...config,
  files: [
    "**/*.js",
    "**/*.mjs",
    "**/*.jsx",
    "**/*.ts",
    "**/*.mts",
    "**/*.tsx",
    "**/*.vue",
    "**/*.svelte",
    "**/*.astro",
  ] as CodeExtensions,
}));

export const jsConfigs: Linter.Config[] = [
  js.configs.recommended,
  (jsdoc as ESLint.Plugin).configs?.["flat/recommended"] as Linter.Config ?? {},
  {
    rules: {
      ...prefixRequiredRules,

      // This rule also disallows "use strict"; in module-based code including TypeScript.
      // You can still add "use strict"; in each source TypeScript code,
      // so I enable this rule only for JavaScript
      strict: [ "error", "safe" ],

      "no-duplicate-imports": "error",
      "import/no-unresolved": [ "error", { ignore: [ "vitest/config" ]}],
    },
  } satisfies Linter.Config,
].map((config) => ({
  files: [ "**/*.js", "**/*.mjs", "**/*.jsx" ] as JsExtensions,
  ...config,
}));

export const tsConfigs: Linter.Config[] = ts.config(
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  imports.flatConfigs.typescript,
  (jsdoc as ESLint.Plugin).configs?.["flat/recommended-typescript"] as Linter.Config ?? {},
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      ...toTSRules(prefixRequiredRules),

      //
      // Errors
      //
      "import/no-duplicates": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/ban-ts-comment": [ "error", {
        "ts-check": false,
        "ts-ignore": true,
        "ts-expect-error": "allow-with-description",
        "ts-nocheck": "allow-with-description",
      }],

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
      "@typescript-eslint/consistent-type-imports": [ "error", {
        prefer: "type-imports",
        fixStyle: "separate-type-imports",
        disallowTypeAnnotations: true,
      }],

      //
      // Off
      //

      // Too strict. Return types are not written in the library and framework documents
      // and I often spend too much time to investigate which return type should be added.
      "@typescript-eslint/explicit-function-return-type": "off",
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
      "import/resolver": {
        typescript: {
          extensions: [
            ".js", ".mjs", ".cjs",
            ".ts", ".mts", ".cts",
            ".d.ts", ".json",
            ".jsx", ".tsx",
            ".vue", ".svelte", ".astro",
          ],
          alwaysTryTypes: true,
        },
      },
    },
  } satisfies Linter.Config,
).map((config) => ({
  ...config,
  files: [
    "**/*.ts",
    "**/*.mts",
    "**/*.tsx",
    "**/*.vue",
    "**/*.svelte",
    "**/*.astro",
  ] as TsExtensions,
})) as Linter.Config[];
