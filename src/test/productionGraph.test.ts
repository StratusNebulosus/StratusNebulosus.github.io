/// <reference types="node" />

import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, relative, resolve } from "node:path";

import { describe, expect, it } from "vitest";

import { ALLOWED_ASSETS } from "../data/medical/assetAllowlist";
import {
  APPROVED_WEBSITE_CONTACT_MARKERS,
  FORMER_PUBLIC_IDENTITY_MARKERS,
  PLACEHOLDER_CONTACT_MARKERS,
  RETIRED_PUBLIC_EXPERIENCE_MARKERS,
} from "./medicalPortfolioPolicy";

const ROOT = process.cwd();
const SRC_ROOT = resolve(ROOT, "src");
const ENTRY = resolve(SRC_ROOT, "main.tsx");
const SOURCE_EXTENSIONS = ["", ".ts", ".tsx", ".css"];
const importPattern = /(?:from\s*|import\s*)["']([^"']+)["']/g;

function resolveRelativeImport(
  importer: string,
  specifier: string,
): string | null {
  if (!specifier.startsWith(".")) return null;
  const base = resolve(dirname(importer), specifier);

  for (const suffix of SOURCE_EXTENSIONS) {
    const candidate = `${base}${suffix}`;
    if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
  }

  for (const suffix of [".ts", ".tsx"]) {
    const candidate = resolve(base, `index${suffix}`);
    if (existsSync(candidate)) return candidate;
  }

  return existsSync(base) && statSync(base).isFile() ? base : null;
}

function collectProductionGraph(): Set<string> {
  const visited = new Set<string>();
  const pending = [ENTRY];

  while (pending.length) {
    const filePath = pending.pop();
    if (!filePath || visited.has(filePath)) continue;
    visited.add(filePath);

    if (![".ts", ".tsx"].includes(extname(filePath))) continue;
    const source = readFileSync(filePath, "utf8");
    importPattern.lastIndex = 0;
    for (const match of source.matchAll(importPattern)) {
      const resolved = resolveRelativeImport(filePath, match[1]);
      if (resolved && resolved.startsWith(SRC_ROOT)) pending.push(resolved);
    }
  }

  return visited;
}

describe("production entry graph", () => {
  const graph = collectProductionGraph();
  const relativePaths = [...graph].map((filePath) =>
    relative(SRC_ROOT, filePath),
  );
  const sourceText = [...graph]
    .filter((filePath) => [".ts", ".tsx", ".css"].includes(extname(filePath)))
    .map((filePath) => readFileSync(filePath, "utf8"))
    .join("\n");

  it("uses the medical application without retired template or legacy data modules", () => {
    expect(relativePaths).toContain("App.tsx");
    expect(
      relativePaths.some((path) => path.startsWith("components/medical/")),
    ).toBe(true);
    expect(relativePaths.some((path) => path.startsWith("data/medical/"))).toBe(
      true,
    );
    expect(relativePaths).not.toContain("data/profile.ts");
    expect(relativePaths).not.toContain("data/portfolio.ts");
    expect(relativePaths.some((path) => path.startsWith("templates/"))).toBe(
      false,
    );
    expect(relativePaths).not.toContain(
      "components/shared/PortfolioStyleSelector.tsx",
    );
  });

  it("contains the verified recipient but no former or CV-only contact markers", () => {
    APPROVED_WEBSITE_CONTACT_MARKERS.forEach((marker) => {
      expect(sourceText).toContain(marker);
    });
    [
      ...FORMER_PUBLIC_IDENTITY_MARKERS,
      ...RETIRED_PUBLIC_EXPERIENCE_MARKERS,
      ...PLACEHOLDER_CONTACT_MARKERS,
    ].forEach((marker) => expect(sourceText).not.toContain(marker));
  });

  it("imports exactly the explicit public asset allowlist", () => {
    const graphAssetNames = [...graph]
      .filter((filePath) =>
        filePath.includes(`${resolve(SRC_ROOT, "assets")}/`),
      )
      .map((filePath) => filePath.split("/").at(-1))
      .filter((name): name is string => Boolean(name))
      .sort();
    const allowlistedNames = ALLOWED_ASSETS.map(
      (entry) => entry.sourceFileName,
    ).sort();

    expect(graphAssetNames).toEqual(allowlistedNames);
  });

  it("does not add runtime content requests or dynamic asset discovery", () => {
    expect(sourceText).not.toContain("import.meta.glob");
    expect(sourceText).not.toMatch(/\bfetch\s*\(/);
    expect(sourceText).not.toMatch(/\bXMLHttpRequest\b/);
  });
});
