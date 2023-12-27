import { jsRules } from "./overrides/lang-specific.ts";
import { nuxtBase } from "./overrides/nuxt.ts";
import plain from "./plain.ts";
import type { Linter } from "eslint";
import type { FlatConfigComposer } from "eslint-flat-config-utils";

export const nuxtJS: (Linter.FlatConfig | FlatConfigComposer)[] = [
  ...plain,
  nuxtBase,
  {
    files: [ "*.vue" ],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
      }
    },
    ...jsRules,
  },
];
