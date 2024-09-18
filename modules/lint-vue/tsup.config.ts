import { defineConfig } from "tsup";
import { tsupConfig } from "../../tsup-shared.config.ts";

export default defineConfig({
  ...tsupConfig,
  entry: [ "src/vue.ts" ],
});
