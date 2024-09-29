import { tsupBaseConfig } from "./shared/base.ts";
import { nodejsLatestLts } from "./targets.ts";
import type { Options } from "tsup";

export const tsupConfig = {
  ...tsupBaseConfig,

  target: [
    ...nodejsLatestLts,
  ],
  format: "esm",

  dts: false,
  sourcemap: false,

  treeshake: true,
  minify: true,
  splitting: true,
} as const satisfies Options;
