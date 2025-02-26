import type { Options } from "tsup";

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
} as const satisfies Options;

const baseLibConfig = {
  dts: true,
  sourcemap: true,

  treeshake: true,
  minify: false,
  splitting: false,
} as const satisfies Options;

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
  splitting: true,
} as const satisfies Options;

export const universalLib = {
  ...baseConfig,
  ...baseLibConfig,

  target: [
    ...browsers,
    ...nodejs,
  ],
  format: [ "esm", "cjs" ],
} as const satisfies Options;

export const nodejsLib = {
  ...baseConfig,
  ...baseLibConfig,

  target: [
    ...nodejs,
  ],
  format: [ "esm", "cjs" ],
} as const satisfies Options;

export const frontendLib = {
  ...baseConfig,
  ...baseLibConfig,

  target: [
    ...browsers,
  ],
  format: "esm",
} as const satisfies Options;
