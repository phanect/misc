import { join } from "node:path";
import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [ join(__dirname, "./src/eslint.ts") ],
  declaration: true,
});
