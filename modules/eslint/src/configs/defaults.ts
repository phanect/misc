import { jsonConfigs } from "./components/json.ts";
import { devConfigs } from "./components/nodejs.ts";
import { vitestConfigs } from "./components/vitest.ts";
import type { Linter } from "eslint";
import { commonConfigs, jsConfigs, tsConfigs } from "./components/languages.ts";

export const core: Linter.Config[] = [
  {
    ignores: [
      "package-lock.json",
      "npm-shrinkwrap.json",
      ".svelte-kit/",
      "dist/",
      "tmp/",
    ],
  } satisfies Linter.Config,
  {
    files: [ "*" ],
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: "error",
    },
  } satisfies Linter.Config,
  ...jsConfigs,
  ...tsConfigs,
  ...commonConfigs,
  ...devConfigs,
  ...vitestConfigs,
  ...jsonConfigs,
] as const;

export {
  nodejsConfigs as nodejs,
  unbundledConfigs as unbundled,
} from "./components/nodejs.ts";