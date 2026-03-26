import { lib } from "@phanect/configs/tsdown";
import { defineConfig } from "tsdown";

export default defineConfig({
  ...lib,
  entry: [ "src/vue.ts" ],
  format: "esm",
  minify: false,
});
