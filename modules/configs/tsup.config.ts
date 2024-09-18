import { defineConfig } from "tsup";
import { tsupConfig } from "../../tsup-shared.config.ts";

export default defineConfig({
  ...tsupConfig,
  entry: {
    eslint: "src/eslint/eslint.ts",
  },
});
