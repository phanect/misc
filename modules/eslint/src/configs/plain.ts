import stylistic from "@stylistic/eslint-plugin";
import jsonc from "eslint-plugin-jsonc";
import promise from "eslint-plugin-promise";
import vitest from "eslint-plugin-vitest";
import type { Linter } from "eslint";
import { jsRules, tsRules } from "./components/languages.ts";
import type { CodeExtensions, JsonExtensions } from "../utils.ts";

const plain: Linter.Config[] = [
  {
    ignores: [
      "package-lock.json",
      "npm-shrinkwrap.json",
      ".svelte-kit/",
      "dist/",
      "tmp/",
    ]
  },
  {
    files: [ "*" ],
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: "error",
    },
    plugins: {
      "@stylistic": stylistic,
      jsonc,
      promise,
      vitest,
    },
  },
  stylistic.configs["recommended-flat"],
  ...jsRules,
  ...tsRules,
  promise.configs["flat/recommended"],
  // TODO add import-x, editorconfig, and document-write plugins when it is ready to flat configs
  // importConfigs["flat/recommended"],
  // editorConfigConfigs["recommended"],
  // docWriteConfigs["recommended"],
  {
    files: [ "*.js", "*.mjs", "*.cjs", "*.jsx", "*.ts", "*.mts", "*.cts", "*.tsx", "*.vue", "*.svelte" ] as CodeExtensions,

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      "arrow-body-style": [ "error", "as-needed" ],
      "@stylistic/comma-dangle": [ "error", {
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

      // "document-write/no-document-write": "error",
      // "editorconfig/charset": "error",
      // "editorconfig/eol-last": "error",
      // "editorconfig/indent": [ "error", { SwitchCase: 1 }],
      // "editorconfig/linebreak-style": "error",
      // "editorconfig/no-trailing-spaces": "error",

      // Temporal equivalent rules for editorconfig plugin
      "unicode-bom": [ "error", "never" ],
      "@stylistic/eol-last": [ "error", "always" ],
      "@stylistic/indent": [ "error", 2, { SwitchCase: 1 }],
      "@stylistic/linebreak-style": [ "error", "unix" ],
      "@stylistic/no-trailing-spaces": "error",

      // "import-x/no-unresolved": [ "error", { ignore: [ "vitest/config" ]}],
      "promise/prefer-await-to-callbacks": "error",
      "promise/prefer-await-to-then": "error",

      //
      // Warnings - styles
      // These are just a preference in coding style.
      // Following rules doesn't reduce quality or readability
      //
      "@stylistic/array-bracket-spacing": [ "warn", "always", { arraysInArrays: false, objectsInArrays: false }],
      curly: "warn",
      "@stylistic/no-multi-spaces": [ "warn", { ignoreEOLComments: true, exceptions: { Property: true }}],
      "@stylistic/object-curly-spacing": [ "warn", "always", { arraysInObjects: false, objectsInObjects: false }],
      "one-var": [ "warn", "never" ],
      "@stylistic/one-var-declaration-per-line": [ "warn", "initializations" ],
      "@stylistic/padded-blocks": [ "warn", "never" ],
      "prefer-arrow-callback": "warn",
      "@stylistic/quote-props": [ "warn", "as-needed" ],
      "@stylistic/quotes": [ "warn", "double" ],
      "@stylistic/semi": [ "error", "always" ],
      "@stylistic/space-before-function-paren": [ "warn", {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      }],
      "@stylistic/spaced-comment": [ "warn", "always" ],
      "@stylistic/switch-colon-spacing": [ "warn", { before: false, after: true }],

      // Require file extensions in `import`s
      // "import-x/extensions": [ "warn", "always", { ignorePackages: true }],

      //
      // Off
      //
      "no-console": "off",
    },
    settings: {
      // "import-x/ignore": [
      //   "node_modules",
      //   "vitest", // not working with import-x/named
      // ],
    },
  },
  {
    files: [ "*.cjs" ],
    languageOptions: {
      sourceType: "commonjs",
    },
  },
  {
    files: [
      "*.test.js",
      "*.test.jsx",
      "*.test.mjs",
      "*.test.cjs",
      "*.test.ts",
      "*.test.tsx",
    ],
    rules: {
      ...vitest.configs.recommended.rules,

      //
      // Errors
      //
      "vitest/no-disabled-tests": "error",
      "vitest/no-focused-tests": "error",
      "vitest/expect-expect": [ "error", {
        assertFunctionNames: [ "expect", "ok" ],
      }],

      //
      // Warnings - styles
      //
      "vitest/prefer-lowercase-title": [ "warn", { ignore: [ "describe", "test" ]}],
      "vitest/prefer-to-have-length": "warn",

      //
      // Off
      //
      "vitest/no-conditional-expect": "off",
      "vitest/require-top-level-describe": "off",
    },
  },
  {
    files: [ "*.json", "*.jsonc", "*.json5" ] as JsonExtensions,
    rules: {
      "jsonc/array-bracket-spacing": [ "error", "always", {
        objectsInArrays: false,
        arraysInArrays: false,
      }],
      "jsonc/comma-style": [ "error", "last" ],
      "jsonc/indent": [ "error", 2 ],
      "jsonc/key-spacing": [ "error", {
        beforeColon: false,
        afterColon: true,
        mode: "minimum",
      }],
      "jsonc/object-curly-spacing": [ "error", "always", {
        arraysInObjects: false,
        objectsInObjects: false,
      }],
    }
  },
  ...(
    jsonc.configs["flat/recommended-with-json"].map(config => ({
      files: [ "*.json" ],
      ignores: [ "**/tsconfig.json", ".vscode/**/*.json" ],
      ...config
    }))
  ),
  ...(
    jsonc.configs["flat/recommended-with-jsonc"].map(config => ({
      files: [ "*.jsonc", "**/tsconfig.json", ".vscode/**/*.json" ],
      ...config
    }))
  ),
  ...jsonc.configs["flat/recommended-with-json5"],
  {
    files: [ "*.json5" ],
    rules: {
      "jsonc/comma-dangle": [ "error", {
        arrays: "always-multiline",
        objects: "always-multiline",
      }],
      "jsonc/quote-props": [ "error", "as-needed" ],
    },
  },
] as const;

export default plain;
