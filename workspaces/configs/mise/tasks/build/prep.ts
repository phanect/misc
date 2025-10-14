#!/usr/bin/env -S pnpm exec jiti

import { readFileSync } from "node:fs";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const tsconfigDirPath = join(import.meta.dirname, "../../configs/ts/");
const tmpDirPath = join(import.meta.dirname, "../../tmp");

const tsconfigs = (await readdir(tsconfigDirPath, {
  recursive: true,
  withFileTypes: true,
})).filter((fileOrDir) => fileOrDir.isFile())
  .map((tsconfigFile) => ({
    filename: tsconfigFile.name,
    path: join(tsconfigFile.parentPath, tsconfigFile.name),
  }));

const tsconfigTsContent = tsconfigs.map((tsconfig) => {
  const [ , tsconfigType ] = /^tsconfig\.([A-Za-z0-9]+)\.json$/.exec(tsconfig.filename) ?? [];
  const tsconfigContent = readFileSync(tsconfig.path).toString();

  return tsconfigType === "default"
    ? `export default ${ tsconfigContent };`
    : `export const ${ tsconfigType } = ${ tsconfigContent };`;
}).join("\n");

await mkdir(tmpDirPath, { recursive: true });
await writeFile(join(tmpDirPath, "tsconfigs.ts"), tsconfigTsContent);
