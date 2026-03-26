#!/usr/bin/env -S pnpm exec jiti

import { copyFile } from "node:fs/promises";
import { join } from "node:path";
import { getProjectDirNames } from "../_libs/utils.ts";

const monorepoRootPath = join(import.meta.dirname, "../../../projects");
const srcReadMePath = join(monorepoRootPath, "lint/README.md");

const generatedReadMePaths = (await getProjectDirNames())
  .filter((moduleDirName) => moduleDirName.startsWith("lint-"))
  .map((moduleDirName) => join(monorepoRootPath, moduleDirName, "README.md"));

await Promise.all(
  generatedReadMePaths.map(async (generatedReadMePath) => copyFile(
    srcReadMePath,
    generatedReadMePath,
  ))
);
