import sveltePlugin from "eslint-plugin-svelte";
import * as tsParser from "@typescript-eslint/parser";
import type { Linter } from "eslint";
import type { CodeExtensions } from "@phanect/lint";

export const svelte: Linter.Config[] = [
  ...sveltePlugin.configs["flat/recommended"],
  {
    files: [ "**/*.svelte" ],
    languageOptions: {
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
    rules: {
      // enable no-duplicate-imports instead of
      // import/no-duplicates which does not work well in Svelte/Kit projects
      "import/no-duplicates": "off",
      "no-duplicate-imports": "error",
    },
  } satisfies Linter.Config,
];
