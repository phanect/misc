import { tsupBaseConfig } from "./shared/base.ts";
import { tsupNpmConfig } from "./shared/npm.ts";
import { nodejs } from "./targets.ts";
import type { Options } from "tsup";

export const tsupConfig = {
  ...tsupBaseConfig,
  ...tsupNpmConfig,

  target: [
    ...nodejs,
  ],
  format: [ "esm", "cjs" ],
} as const satisfies Options;
