import type { UserConfig } from "tsdown";

const baseConfig = {
  treeshake: true,
  clean: true,
} as const satisfies UserConfig;

export const lib = {
  ...baseConfig,

  format: [ "esm", "cjs" ],
  dts: true,
  sourcemap: true,
  minify: false,
} as const satisfies UserConfig;

export const app = {
  ...baseConfig,

  format: "esm",
  dts: false,
  sourcemap: false,
  minify: true,
} as const satisfies UserConfig;

export { app as cli };
