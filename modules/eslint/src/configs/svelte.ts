import svelte from "eslint-plugin-svelte";
import type { Linter } from "eslint";

const config: Linter.Config[] = [
  ...(svelte.configs["flat/recommended"] as Linter.Config[]),
  {
    files: [ "**/*.svelte" ],
    rules: {
      "svelte/no-target-blank": [ "error", { allowReferrer: true }],
    },
  } satisfies Linter.Config,
];

export default config;
