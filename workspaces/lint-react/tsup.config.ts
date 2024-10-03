import { nodejsLib } from "@phanect/configs/tsup";
import { defineConfig } from "tsup";

export default defineConfig({
  ...nodejsLib,
  entry: [ "src/react.ts" ],
  format: "esm",
  minify: true,
});
