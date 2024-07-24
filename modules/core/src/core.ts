import promise from "eslint-plugin-promise";
import { jsConfigs, tsConfigs } from "./configs/defaults.ts";
import { ignoreConfigs } from "./configs/ignores.ts";
import { jsonConfigs } from "./configs/json.ts";
import { vitestConfigs } from "./configs/vitest.ts";
import type { Linter } from "eslint";
import { extensions } from "../utils.ts";
import { vitestWorkaroundConfig } from "./vitest-workaround.js";

const plain: Linter.FlatConfig[] = [
  ...ignoreConfigs,
  ...jsConfigs,
  ...tsConfigs,
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
      sourceType: "commonjs",
    },
    rules: {
      "import-x/no-unresolved": [ "error", { commonjs: true }],
    },
  },
  ...vitestConfigs,
  ...jsonConfigs,
  vitestWorkaroundConfig,
] as const;

export default plain;
