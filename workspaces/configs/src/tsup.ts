import type { UserConfig } from "tsdown";

const baseConfig = {
  clean: true,
} as const satisfies UserConfig;

export const lib = {
  ...baseConfig,

  format: [ "esm", "cjs" ],
  dts: true,
  sourcemap: true,

  treeshake: true,
  minify: false,
} as const satisfies UserConfig;

export const nodejsApp = {
  ...baseConfig,

  format: "esm",

  dts: false,
  sourcemap: false,

  treeshake: true,
  minify: true,
} as const satisfies UserConfig;

