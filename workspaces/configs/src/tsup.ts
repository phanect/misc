import type { UserConfig } from "tsdown";

const baseConfig = {
  clean: true,
} as const satisfies UserConfig;

const baseLibConfig = {
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

export const universalLib = {
  ...baseConfig,
  ...baseLibConfig,

  format: [ "esm", "cjs" ],
} as const satisfies UserConfig;

export const nodejsLib = {
  ...baseConfig,
  ...baseLibConfig,

  format: [ "esm", "cjs" ],
} as const satisfies UserConfig;

export const frontendLib = {
  ...baseConfig,
  ...baseLibConfig,

  format: "esm",
} as const satisfies UserConfig;
