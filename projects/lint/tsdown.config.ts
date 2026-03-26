import { lib } from "@phanect/configs/tsdown";
import { defineConfig } from "tsdown";

export default defineConfig({
  ...lib,
  entry: {
    eslint: "src/eslint.ts",
  },
  format: "esm",
  minify: false,
});
