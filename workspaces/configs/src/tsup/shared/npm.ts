import type { Options } from "tsup";

export const tsupNpmConfig = {
  dts: true,
  sourcemap: true,

  treeshake: true,
  minify: false,
  splitting: false,
} as const satisfies Options;
