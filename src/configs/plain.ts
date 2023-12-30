import { configs as jsoncConfigs } from "eslint-plugin-jsonc";
import promise from "eslint-plugin-promise";
import vitest from "eslint-plugin-vitest";
import type { Linter } from "eslint";
import { jsRules, tsRule } from "./overrides/lang-specific.ts";
import { extensions } from "../utils.ts";

const plain: Linter.FlatConfig[] = [
  {
    ignores: [
      "package-lock.json",
      "npm-shrinkwrap.json",
      ".svelte-kit/",
      "dist/",
      "tmp/",
    ]
  },
  jsRules,
  tsRule,
  promise.configs["flat/recommended"],
  // TODO add import-x, editorconfig, and document-write plugins when it is ready to flat configs
  //importConfigs["flat/recommended"],
  //editorConfigConfigs["recommended"],
  //docWriteConfigs["recommended"],
  {
    files: extensions,

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: "error",
    },
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
      "import-x/no-unresolved": [ "error", { ignore: [ "vitest/config" ]}],
      "promise/prefer-await-to-callbacks": "error",
      "promise/prefer-await-to-then": "error",

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

      // Require file extensions in `import`s
      "import-x/extensions": [ "warn", "always", { ignorePackages: true }],

      //
      // Off
      //
      "no-console": "off",
    },
    settings: {
      "import-x/ignore": [
        "node_modules",
        "vitest", // not working with import-x/named
      ],
    },
  },
  {
    files: [ "*.cjs" ],
    languageOptions: {
      sourceType: "script",
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
    files: [ "*.json", "*.jsonc", "*.json5" ],
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
    jsoncConfigs["flat/recommended-with-json"].map(config => ({
      files: [ "*.json" ],
      ignores: [ "**/tsconfig.json", ".vscode/**/*.json" ],
      ...config
    }))
  ),
  ...(
    jsoncConfigs["flat/recommended-with-jsonc"].map(config => ({
      files: [ "*.jsonc", "**/tsconfig.json", ".vscode/**/*.json" ],
      ...config
    }))
  ),
  ...jsoncConfigs["flat/recommended-with-json5"],
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
