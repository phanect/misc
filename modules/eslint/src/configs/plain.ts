import { jsonConfigs } from "./components/json.ts";
import { vitestConfigs } from "./components/vitest.ts";
import type { Linter } from "eslint";
import { commonRules, jsRules, tsRules } from "./components/languages.ts";

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
  ...jsRules,
  ...tsRules,
  ...commonRules,
  ...vitestConfigs,
  ...jsonConfigs,
] as const;

export default plain;
