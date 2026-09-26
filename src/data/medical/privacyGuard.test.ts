/// <reference types="node" />

import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

import { describe, expect, it } from "vitest";

const SRC_ROOT = resolve(process.cwd(), "src");
const ALLOWED_FILES = new Set([
  join(SRC_ROOT, "data", "medical", "assetAllowlist.ts"),
  join(SRC_ROOT, "data", "medical", "content.ts"),
]);
const CV_IMPORT_MARKER = "assets/CV/";
const PLACEHOLDER_PHONE = ["123", "456", "789"].join("");
const PLACEHOLDER_EMAIL = ["testemail", "gmail.com"].join("@");
const DYNAMIC_ASSET_DISCOVERY = "import.meta.glob";

function collectSourceFiles(dir: string): string[] {
  const entries = readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      return collectSourceFiles(fullPath);
    }

    const isSourceFile =
      (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx")) &&
      !entry.name.endsWith(".test.ts") &&
      !entry.name.endsWith(".test.tsx");

    return isSourceFile ? [fullPath] : [];
  });
}

describe("privacy guard (BR-1, NFR Design Pattern 1)", () => {
  it("only assetAllowlist.ts and content.ts import from src/assets/CV/", () => {
    const violatingFiles = collectSourceFiles(SRC_ROOT)
      .filter((filePath) => !ALLOWED_FILES.has(filePath))
      .filter((filePath) => readFileSync(filePath, "utf8").includes(CV_IMPORT_MARKER));

    expect(violatingFiles).toEqual([]);
  });

  it("keeps approved-PDF placeholder contacts out of production source", () => {
    const violations = collectSourceFiles(SRC_ROOT).filter((filePath) => {
      const source = readFileSync(filePath, "utf8");
      return source.includes(PLACEHOLDER_PHONE) || source.includes(PLACEHOLDER_EMAIL);
    });

    expect(violations).toEqual([]);
  });

  it("does not discover source assets dynamically at runtime", () => {
    const violations = collectSourceFiles(SRC_ROOT).filter((filePath) =>
      readFileSync(filePath, "utf8").includes(DYNAMIC_ASSET_DISCOVERY),
    );

    expect(violations).toEqual([]);
  });
});
