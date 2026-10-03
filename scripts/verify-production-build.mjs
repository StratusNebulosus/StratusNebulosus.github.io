import { readdir, readFile, stat } from "node:fs/promises";
import { resolve, relative } from "node:path";

import {
  normalizeBasePath,
  validateBundleText,
  validateHtmlBasePath,
  validateProductionFiles,
} from "./production-build-policy.mjs";

const workspaceRoot = process.cwd();
const distRoot = resolve(workspaceRoot, "dist");
const expectedBasePath = normalizeBasePath(
  process.env.EXPECTED_BASE_PATH ?? process.env.VITE_BASE_PATH ?? "/",
);

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collectFiles(fullPath)));
    else if (entry.isFile()) files.push(fullPath);
  }

  return files;
}

try {
  if (!(await stat(distRoot)).isDirectory()) throw new Error("dist is not a directory");

  const files = await collectFiles(distRoot);
  const relativeFiles = files.map((filePath) => relative(distRoot, filePath));
  const indexPath = resolve(distRoot, "index.html");
  const html = await readFile(indexPath, "utf8");
  const textFiles = files.filter((filePath) => /\.(?:html|js|css)$/i.test(filePath));
  const bundleText = (
    await Promise.all(textFiles.map((filePath) => readFile(filePath, "utf8")))
  ).join("\n");
  const errors = [
    ...validateProductionFiles(relativeFiles),
    ...validateBundleText(bundleText),
    ...validateHtmlBasePath(html, expectedBasePath),
  ];

  if (errors.length) {
    errors.forEach((error) => console.error(`- ${error}`));
    process.exitCode = 1;
  } else {
    console.log(
      `Production build verified: 20 approved images, 1 approved CV, base path ${expectedBasePath}`,
    );
  }
} catch (error) {
  console.error(`Unable to verify production build: ${error.message}`);
  process.exitCode = 1;
}
