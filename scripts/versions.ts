import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { loadJSON } from "@phanect/utils/nodejs";
import { getExampleDirPaths, getWorkspaceDirPaths } from "./libs/utils.ts";
import type { PackageJson } from "type-fest";

const packageJsonPaths = [
  // Project root
  join(import.meta.dirname, "../package.json"),
  // workspaces/*/package.json
  ...(
    (await getWorkspaceDirPaths())
      .map((workspaceDirPath) => join(workspaceDirPath, "package.json"))
  ),
  // examples/*/package.json
  ...(
    (await getExampleDirPaths())
      .map((exampleDirPath) => join(exampleDirPath, "package.json"))
  ),
];
const pkgJsons = await Promise.all(
  packageJsonPaths.map(async (packageJsonPath) => ({
    path: packageJsonPath,
    content: await loadJSON<PackageJson>(packageJsonPath),
  })),
);

const today = new Date();
const newVersion = `${ today.getFullYear() }.${ today.getMonth() + 1 }.${ today.getDate() }`;

for (const pkgJson of pkgJsons) {
  if (pkgJson.content.version) {
    pkgJson.content.version = newVersion;
  }

  await writeFile(pkgJson.path, JSON.stringify(pkgJson.content, null, 2) + "\n");
}
