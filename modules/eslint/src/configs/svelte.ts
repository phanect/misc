import sveltePlugin from "eslint-plugin-svelte";
import type { Linter } from "eslint";

export const svelte: Linter.Config[] = [
  ...sveltePlugin.configs["flat/recommended"],
  {
    files: [ "**/*.svelte" ],
    rules: {
      "svelte/no-target-blank": [ "error", { allowReferrer: true }],
    },
  } satisfies Linter.Config,
];
