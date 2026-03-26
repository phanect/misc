import { defineConfig } from "tsdown";
import { lib } from "./src/tsdown.ts";

export default defineConfig({
  ...lib,

  entry: {
    tsdown: "src/tsdown.ts",
    tsconfigs: "tmp/tsconfigs.ts",
  },
  format: "esm",
  minify: false,
});
