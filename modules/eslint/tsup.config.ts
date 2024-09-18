import { defineConfig } from "tsup";
import { tsupConfig } from "../../tsup-shared.config.ts";

export default defineConfig({
  ...tsupConfig,
  entry: {
    defaults: "src/configs/defaults.ts",
  },
});
