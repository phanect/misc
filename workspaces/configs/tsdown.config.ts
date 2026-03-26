import { defineConfig } from "tsdown";
import { nodejsLib } from "./src/tsup.ts";

export default defineConfig({
  ...nodejsLib,

  entry: {
    tsup: "src/tsup.ts",
    tsconfigs: "tmp/tsconfigs.ts",
  },
  format: "esm",
  minify: false,
});
