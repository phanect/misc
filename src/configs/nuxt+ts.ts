import { tsRule } from "./overrides/lang-specific.ts";
import { nuxtBase } from "./overrides/nuxt.ts";
import plain from "./plain.ts";
import type { Linter } from "eslint";
import type { FlatConfigComposer } from "eslint-flat-config-utils";

export const nuxtTS: (Linter.FlatConfig | FlatConfigComposer)[] =  [
  ...plain,
  nuxtBase,
  {
    files: [ "*.vue" ],
    languageOptions: {
      parserOptions: {
        // overwrite tsRule's `files` property, so place after `...tsRule`.
        parser: "@typescript-eslint/parser",
      }
    },
    ...tsRule,
  },
];
