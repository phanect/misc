import { defineConfig } from "tsup";
import { nodejsLib } from "./src/tsup.ts";

export default defineConfig({
  ...nodejsLib,

  entry: [ "src/tsup.ts" ],
  format: "esm",
  minify: true,
});
