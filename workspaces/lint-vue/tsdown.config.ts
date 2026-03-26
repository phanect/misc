import { nodejsLib } from "@phanect/configs/tsup";
import { defineConfig } from "tsdown";

export default defineConfig({
  ...nodejsLib,
  entry: [ "src/vue.ts" ],
  format: "esm",
  minify: false,
});
