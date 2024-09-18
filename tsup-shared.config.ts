import { defineConfig } from "tsup";

export const tsupConfig = defineConfig({
  target: "node18",
  format: "esm",

  dts: true,
  sourcemap: false,

  treeshake: true,
  minify: false,
  splitting: false,
  clean: true,
});
