import { tsupConfig } from "@phanect/configs/tsup/npm/nodejs";
import { defineConfig } from "tsup";

export default defineConfig({
  ...tsupConfig,
  entry: [ "src/svelte.ts" ],
  format: "esm",
  minify: true,
});
