import type { UserConfig } from "tsdown";

const browsers = [
  "chrome128",
  "edge128",
  "firefox130",
  "safari18",
  "ios17",
] as const;

const nodejs = [
  "node18",
  "node20",
  "node22",
] as const;

const nodejsLatestLts = [
  "node22",
] as const;

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

  target: [
    ...nodejsLatestLts,
  ],
  format: "esm",

  dts: false,
  sourcemap: false,

  treeshake: true,
  minify: true,
} as const satisfies UserConfig;

export const universalLib = {
  ...baseConfig,
  ...baseLibConfig,

  target: [
    ...browsers,
    ...nodejs,
  ],
  format: [ "esm", "cjs" ],
} as const satisfies UserConfig;

export const nodejsLib = {
  ...baseConfig,
  ...baseLibConfig,

  target: [
    ...nodejs,
  ],
  format: [ "esm", "cjs" ],
} as const satisfies UserConfig;

export const frontendLib = {
  ...baseConfig,
  ...baseLibConfig,

  target: [
    ...browsers,
  ],
  format: "esm",
} as const satisfies UserConfig;
