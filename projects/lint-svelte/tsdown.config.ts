import { lib } from "@phanect/configs/tsdown";
import { defineConfig } from "tsdown";

export default defineConfig({
  ...lib,
  entry: [ "src/svelte.ts" ],
  format: "esm",
  minify: false,
});
