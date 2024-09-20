import { copyFile } from "node:fs/promises";
import { join } from "node:path";
import { getModuleDirNames } from "./libs/utils.ts";

const modulesDirPath = join(import.meta.dirname, "../modules");
const srcReadMePath = join(modulesDirPath, "lint/README.md");

const generatedReadMePaths = (await getModuleDirNames())
  .filter((moduleDirName) => moduleDirName.startsWith("lint-"))
  .map((moduleDirName) => join(modulesDirPath, moduleDirName, "README.md"));

await Promise.all(
  generatedReadMePaths.map(async (generatedReadMePath) => copyFile(
    srcReadMePath,
    generatedReadMePath,
  ))
);
