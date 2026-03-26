import { lib } from "@phanect/configs/tsup";
import { defineConfig } from "tsdown";

export default defineConfig({
  ...lib,
  entry: [ "src/react.ts" ],
  format: "esm",
  minify: false,
});
