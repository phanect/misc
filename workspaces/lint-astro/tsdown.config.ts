import { nodejsLib } from "@phanect/configs/tsup";
import { defineConfig } from "tsdown";

export default defineConfig({
  ...nodejsLib,
  entry: [ "src/astro.ts" ],
  format: "esm",
  minify: false,
});
