import { defineConfig } from "tsup";
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
