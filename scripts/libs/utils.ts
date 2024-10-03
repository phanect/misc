import { readdir } from "node:fs/promises";
import { join } from "node:path";

const modulesDirPath = join(import.meta.dirname, "../../workspaces");

export const getModuleDirNames = async (): Promise<string[]> =>
  readdir(modulesDirPath);

export const getModuleDirPaths = async (): Promise<string[]> =>
  (await getModuleDirNames())
    .map((moduleDirName) => join(modulesDirPath, moduleDirName));

export const getExampleDirPaths = async (): Promise<string[]> => {
  const examplesDirPath = join(import.meta.dirname, "../../examples");

  return (await readdir(examplesDirPath))
    .map((exampleDirName) => join(examplesDirPath, exampleDirName));
};
