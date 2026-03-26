import { defineConfig } from "tsdown";
import { lib } from "./src/tsup.ts";

export default defineConfig({
  ...lib,

  entry: {
    tsup: "src/tsup.ts",
    tsconfigs: "tmp/tsconfigs.ts",
  },
  format: "esm",
  minify: false,
});
