import sveltePlugin from "eslint-plugin-svelte";
import * as tsParser from "@typescript-eslint/parser";
import globals from "globals";
import type { Linter } from "eslint";
import type { CodeExtensions } from "@phanect/lint";

export const svelte: Linter.Config[] = [
  ...sveltePlugin.configs["flat/recommended"],
  {
    files: [ "**/*.svelte" ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [ ".svelte" ],
      },
    },
    rules: {
      "svelte/no-target-blank": [ "error", { allowReferrer: true }],
    },
  } satisfies Linter.Config,
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
    settings: {
      svelte: {
        kit: {
          files: {
            routes: "src/routes",
          },
        },
      },
    },
  } satisfies Linter.Config,
];
