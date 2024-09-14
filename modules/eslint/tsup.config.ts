import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    defaults: "src/configs/defaults.ts",
    // react: "src/configs/react.ts",
    vue: "src/configs/vue.ts",
    svelte: "src/configs/svelte.ts",
  },
  target: "node18",
  format: "esm",

  dts: true,
  sourcemap: true,

  treeshake: true,
  minify: false,
  splitting: false,
  clean: true,
});
