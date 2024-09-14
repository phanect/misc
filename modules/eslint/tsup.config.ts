import { defineConfig } from "tsup";

export default defineConfig({
  entry: [ "src/eslint.ts" ],
  target: "node18",
  format: "esm",

  dts: true,
  sourcemap: true,

  treeshake: true,
  minify: false,
  splitting: false,
  clean: true,
});
