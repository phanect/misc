#!/usr/bin/env -S pnpm exec jiti

import { copyFile } from "node:fs/promises";
import { join } from "node:path";
import { getWorkspaceDirNames } from "../_libs/utils.ts";

const workspacesDirPath = join(import.meta.dirname, "../../../workspaces");
const srcReadMePath = join(workspacesDirPath, "lint/README.md");

const generatedReadMePaths = (await getWorkspaceDirNames())
  .filter((moduleDirName) => moduleDirName.startsWith("lint-"))
  .map((moduleDirName) => join(workspacesDirPath, moduleDirName, "README.md"));

await Promise.all(
  generatedReadMePaths.map(async (generatedReadMePath) => copyFile(
    srcReadMePath,
    generatedReadMePath,
  ))
);
