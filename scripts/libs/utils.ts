import { readdir } from "node:fs/promises";
import { join } from "node:path";

export const getModuleDirPaths = async (): Promise<string[]> => {
  const modulesDirPath = join(import.meta.dirname, "../../modules");

  return (await readdir(modulesDirPath))
    .map((moduleDirName) => join(modulesDirPath, moduleDirName));
};

export const getExampleDirPaths = async (): Promise<string[]> => {
  const examplesDirPath = join(import.meta.dirname, "../../examples");

  return (await readdir(examplesDirPath))
    .map((exampleDirName) => join(examplesDirPath, exampleDirName));
};
