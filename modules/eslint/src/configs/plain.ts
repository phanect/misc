import { jsonConfigs } from "./components/json.ts";
import { vitestConfigs } from "./components/vitest.ts";
import type { Linter } from "eslint";
import { commonConfigs, jsConfigs, tsConfigs } from "./components/languages.ts";

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
  },
  ...jsConfigs,
  ...tsConfigs,
  ...commonConfigs,
  ...vitestConfigs,
  ...jsonConfigs,
] as const;

export default plain;
