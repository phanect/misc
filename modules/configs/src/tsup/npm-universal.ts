import { tsupBaseConfig } from "./shared/base.ts";
import { tsupNpmConfig } from "./shared/npm.ts";
import { browsers, nodejs } from "./targets.ts";
import type { Options } from "tsup";

export const tsupConfig = {
  ...tsupBaseConfig,
  ...tsupNpmConfig,

  target: [
    ...browsers,
    ...nodejs,
  ],
  format: [ "esm", "cjs" ],
} as const satisfies Options;
