import { loadJSON } from "@phanect/utils/nodejs";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { PackageJson } from "type-fest";
import { getExampleDirPaths, getModuleDirPaths } from "./libs/utils.ts";

const packageJsonPaths = [
  // Project root
  join(import.meta.dirname, "../package.json"),
  // modules/*/package.json
  ...(
    (await getModuleDirPaths())
      .map((moduleDirPath) => join(moduleDirPath, "package.json"))
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

const pkgNames = pkgJsons.map((pkgJson) => {
  if (!pkgJson.content.name) {
    throw new Error(`\`name\` property is not set in ${ pkgJson.path }.`);
  }

  return pkgJson.content.name;
});

const today = new Date();
const newVersion = `${ today.getFullYear() }.${ today.getMonth() + 1 }.${ today.getDate() }`;

for (const pkgJson of pkgJsons) {
  if (pkgJson.content.version) {
    pkgJson.content.version = newVersion;
  }

  for (const pkgName of pkgNames) {
    if (pkgJson.content.dependencies?.[pkgName]) {
      pkgJson.content.dependencies[pkgName] = newVersion;
    }
    if (pkgJson.content.devDependencies?.[pkgName]) {
      pkgJson.content.devDependencies[pkgName] = newVersion;
    }
  }

  await writeFile(pkgJson.path, JSON.stringify(pkgJson.content, null, 2) + "\n");
}
