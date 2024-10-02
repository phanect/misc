import { join } from "node:path";
import { defineConfig } from "tsup";
import { tsupConfig } from "./src/tsup/npm-nodejs.ts";

export default defineConfig({
  ...tsupConfig,

  entry: [
    "src/tsup/app-nodejs.ts",
    "src/tsup/npm-frontend.ts",
    "src/tsup/npm-nodejs.ts",
    "src/tsup/npm-universal.ts",
  ],
  outDir: join(import.meta.dirname, "dist/tsup/"),
  format: "esm",
  minify: true,
});
