/// <reference types="node" />

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

import { APPROVED_SECTION_IDS } from "./medicalPortfolioPolicy";

const read = (path: string) =>
  readFileSync(resolve(process.cwd(), path), "utf8");
const readme = read("README.md");
const deployment = read("DEPLOYMENT.md");
const workflow = read(".github/workflows/deploy.yml");
const packageJson = JSON.parse(read("package.json")) as {
  scripts: Record<string, string>;
};

describe("medical portfolio documentation contract", () => {
  it("documents the current identity, section structure, and authoritative files", () => {
    expect(readme).toContain("Bui Tuan Phat Medical Portfolio");
    APPROVED_SECTION_IDS.forEach((sectionId) => {
      expect(readme.toLowerCase()).toContain(sectionId);
    });
    [
      "src/App.tsx",
      "src/data/medical/content.ts",
      "src/data/medical/assetAllowlist.ts",
      "src/data/medical/gallery.ts",
      "src/data/medical/navigation.ts",
      "src/components/medical/content/",
      "src/components/medical/gallery/",
      "src/theme/",
    ].forEach((path) => expect(readme).toContain(path));
    expect(readme).not.toContain("src/data/template.ts");
    expect(readme).not.toContain("selectedTemplateId");
    expect(readme).not.toContain("check both styles");
  });

  it("documents the public/private boundary and CV/gallery separation", () => {
    [
      "Public and private asset boundary",
      "passport",
      "national identity card",
      "visa",
      "birth certificate",
      "transcript",
      "report card",
      "dontuse",
      "bui-tuan-phat-cv.pdf",
      "The CV is not gallery media",
      "18-image collection",
      "placeholder contact line",
      "buituanphat123456@gmail.com",
      "local email application",
      "does not submit, store, or report delivery",
      "no phone contact",
      "src/utils/contact.ts",
    ].forEach((marker) => expect(readme).toContain(marker));
  });

  it("documents local quality, seed replay, build verification, and safe contribution", () => {
    [
      "npm install",
      "npm run dev",
      "npm run quality",
      "FC_SEED=<reported-seed> npm test",
      "npm run build",
      "npm run verify:dist",
      "VITE_BASE_PATH=/repository-name/",
      "EXPECTED_BASE_PATH=/repository-name/",
      "git diff --staged",
      "Settings > Pages",
      "GitHub Actions",
      "node_modules",
      "dist/",
      ".env",
    ].forEach((instruction) => expect(readme).toContain(instruction));
  });

  it("keeps deployment guidance aligned with the medical release gate", () => {
    [
      "npm run quality",
      "npm run build",
      "npm run verify:dist",
      "FC_SEED=<reported-seed> npm test",
      "13 reviewed gallery images",
      "Bui Tuan Phat CV",
      "VITE_BASE_PATH",
      "EXPECTED_BASE_PATH",
      "GitHub Actions",
      "GitHub Pages",
    ].forEach((marker) => expect(deployment).toContain(marker));
  });
});

describe("GitHub Pages workflow contract", () => {
  it("runs install, quality, build, verification, and upload in order", () => {
    const orderedMarkers = [
      "run: npm ci",
      "name: Derive GitHub Pages base path",
      "run: npm run quality",
      "run: npm run build",
      "run: npm run verify:dist",
      "uses: actions/upload-pages-artifact@v3",
    ];
    let previousIndex = -1;

    orderedMarkers.forEach((marker) => {
      const currentIndex = workflow.indexOf(marker);
      expect(
        currentIndex,
        `${marker} must exist after its predecessor`,
      ).toBeGreaterThan(previousIndex);
      previousIndex = currentIndex;
    });
    expect(workflow).toContain('echo "VITE_BASE_PATH=/"');
    expect(workflow).toContain('echo "VITE_BASE_PATH=/${repository}/"');
    expect(workflow).toContain("path: './dist'");
  });

  it("exposes the documented quality and production verification scripts", () => {
    expect(packageJson.scripts.quality).toContain("npm run typecheck");
    expect(packageJson.scripts.quality).toContain("npm run lint");
    expect(packageJson.scripts.quality).toContain("npm test");
    expect(packageJson.scripts["verify:dist"]).toBe(
      "node scripts/verify-production-build.mjs",
    );
  });
});
