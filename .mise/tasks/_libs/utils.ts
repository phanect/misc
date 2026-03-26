import { readdir } from "node:fs/promises";
import { join } from "node:path";

const projectsDirPath = join(import.meta.dirname, "../../../projects");

export const getProjectDirNames = async (): Promise<string[]> =>
  readdir(projectsDirPath);

export const getProjectDirPaths = async (): Promise<string[]> =>
  (await getProjectDirNames())
    .map((workspaceDirName) => join(projectsDirPath, workspaceDirName));

export const getExampleDirPaths = async (): Promise<string[]> => {
  const examplesDirPath = join(import.meta.dirname, "../../../examples");

  return (await readdir(examplesDirPath))
    .map((exampleDirName) => join(examplesDirPath, exampleDirName));
};
