import * as tsParser from "@typescript-eslint/parser";
import { defineConfig, globalIgnores } from "eslint/config";
import sveltePlugin from "eslint-plugin-svelte";
import globals from "globals";
import type { CodeExtensions } from "@phanect/lint";
import type { Linter } from "eslint";

export const svelte: Linter.Config[] = defineConfig([
  globalIgnores([
    "**/.svelte-kit/**",
  ]),
  {
    files: [ "**/*.svelte" ],
    extends: [
      sveltePlugin.configs["flat/recommended"],
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [ ".svelte" ],
      },
    },
    rules: {
      "svelte/indent": [ "error", {
        indent: 2,
        alignAttributesVertically: false,
      }],
      "svelte/no-target-blank": [ "error", { allowReferrer: true }],

      // Maybe it does not work properly on Svelte
      "@typescript-eslint/no-unsafe-member-access": "off",
    },
  },
  {
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
    rules: {
      //
      // The following rules does not work properly in Svelte/Kit projects as of 2025.02.
      //
      "@typescript-eslint/no-unsafe-call": "off",
      // This rule warns to add extension to `$env/static/private` although you shouldn't.
      "import/extensions": "off",
      "import/order": "off",

      // enable no-duplicate-imports instead of
      // import/no-duplicates which does not work well in Svelte/Kit projects
      "import/no-duplicates": "off",
      "no-duplicate-imports": "error",
    },
  } satisfies Linter.Config,
  {
    files: [ "**/app.d.ts" ],
    rules: {
      // You have to use `interface` in app.d.ts
      "@typescript-eslint/consistent-type-definitions": "off",
    },
  } satisfies Linter.Config,
  {
    settings: {
      svelte: {
        ignoreWarnings: [
          "@typescript-eslint/no-unsafe-member-access",
        ],
        kit: {
          files: {
            routes: "src/routes",
          },
        },
      },
    },
  } satisfies Linter.Config,
]);
