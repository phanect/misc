import { nodejsLib } from "@phanect/configs/tsup";
import { defineConfig } from "tsup";

export default defineConfig({
  ...nodejsLib,
  entry: {
    eslint: "src/eslint.ts",
  },
  format: "esm",
  minify: true,
});
