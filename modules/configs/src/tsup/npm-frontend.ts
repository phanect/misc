import { tsupBaseConfig } from "./shared/base.ts";
import { tsupNpmConfig } from "./shared/npm.ts";
import { browsers } from "./targets.ts";
import type { Options } from "tsup";

export const tsupConfig = {
  ...tsupBaseConfig,
  ...tsupNpmConfig,

  target: [
    ...browsers,
  ],
  format: "esm",
} as const satisfies Options;
