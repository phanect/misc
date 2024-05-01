import { mkdir, writeFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "node:url";

import plain from "../src/configs/plain";
import node from "../src/configs/node";
import react from "../src/configs/react";
import next from "../src/configs/next";
import vueJS from "../src/configs/vue+js";
import vueTS from "../src/configs/vue+ts";
import nuxtJS from "../src/configs/nuxt+js";
import nuxtTS from "../src/configs/nuxt+ts";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const distDir = join(__dirname, "../dist");

(async () => {
  await mkdir(distDir, { recursive: true });
  await Promise.all([
    writeFile(join(distDir, "plain.json"), JSON.stringify(plain, null, 2)),
    writeFile(join(distDir, "node.json"), JSON.stringify(node, null, 2)),
    writeFile(join(distDir, "react.json"), JSON.stringify(react, null, 2)),
    writeFile(join(distDir, "next.json"), JSON.stringify(next, null, 2)),
    writeFile(join(distDir, "vue+js.json"), JSON.stringify(vueJS, null, 2)),
    writeFile(join(distDir, "vue+ts.json"), JSON.stringify(vueTS, null, 2)),
    writeFile(join(distDir, "nuxt+js.json"), JSON.stringify(nuxtJS, null, 2)),
    writeFile(join(distDir, "nuxt+ts.json"), JSON.stringify(nuxtTS, null, 2)),
  ]);

  console.log("JSONs are successfully generated");
})();
