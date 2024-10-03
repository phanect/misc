import { readdir } from "node:fs/promises";
import { join } from "node:path";

const workspacesDirPath = join(import.meta.dirname, "../../workspaces");

export const getWorkspaceDirNames = async (): Promise<string[]> =>
  readdir(workspacesDirPath);

export const getWorkspaceDirPaths = async (): Promise<string[]> =>
  (await getWorkspaceDirNames())
    .map((workspaceDirName) => join(workspacesDirPath, workspaceDirName));

export const getExampleDirPaths = async (): Promise<string[]> => {
  const examplesDirPath = join(import.meta.dirname, "../../examples");

  return (await readdir(examplesDirPath))
    .map((exampleDirName) => join(examplesDirPath, exampleDirName));
};
