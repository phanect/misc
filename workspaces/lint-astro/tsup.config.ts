import { nodejsLib } from "@phanect/configs/tsup";
import { defineConfig } from "tsup";

export default defineConfig({
  ...nodejsLib,
  entry: [ "src/astro.ts" ],
  format: "esm",
  minify: false,
});
