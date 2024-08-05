import js from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import ts, { type ConfigWithExtends } from "typescript-eslint";
import { toTSRules, type JsExtensions, type TsExtensions } from "../../utils.ts";
import type { Linter } from "eslint";

/** Rules to be prefixed with "@typescript-eslint/" when they are applied to TS */
const prefixRequiredRules: Linter.RulesRecord = {
  "no-unused-vars": "error",
  "no-use-before-define": "error",

  // Sometimes API requires async function as callback, and you don't use await
  // in the function. In such case, it is difficult to follow require-await.
  "require-await": "off",
};
/**
 * Rules applied to both JS and TS,
 * but they have to be declared after the extended rulesets to avoid to be overwritten.
 */
const commonRules: Linter.RulesRecord = {
  //
  // Errors
  //

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

  //
  // Warnings: JSDoc
  // JSDoc rules should not be reported as errors but warnings
  //
  "jsdoc/check-indentation": "warn",
  "jsdoc/check-syntax": "warn",
  "jsdoc/require-hyphen-before-param-description": "warn",

  //
  // Off
  //
  "jsdoc/require-jsdoc": "off",
  "jsdoc/require-description-complete-sentence": "off",
};

export const jsRules: Linter.Config[] = [{
  files: [ "*.js", "*.mjs", "*.cjs", "*.jsx", "*.vue" ] as (JsExtensions & [ "*.vue" ]),

  ...js.configs.recommended,
  ...jsdoc.configs["flat/recommended"],

  rules: {
    ...prefixRequiredRules,
    ...commonRules,

    // This rule also disallows "use strict"; in module-based code including TypeScript.
    // You can still add "use strict"; in each source TypeScript code,
    // so I enable this rule only for JavaScript
    strict: [ "error", "safe" ],
  },
}];

export const tsRules: Linter.Config[] = ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  jsdoc.configs["flat/recommended-typescript"] as ConfigWithExtends,
  {
    // TODO add import-x, editorconfig, and document-write plugins when it is ready to flat configs
    //...importConfigs["typescript"],

    rules: {
      ...toTSRules(prefixRequiredRules),
      ...commonRules,

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
  },
).map(config => ({
  ...config,
  files: [ "*.ts", "*.mts", "*.cts", "*.tsx", "*.vue" ] as (TsExtensions & [ "*.vue" ]),
})) as Linter.Config[];
