/// <reference types="node" />

import { readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

const ASSET_ROOT = resolve(process.cwd(), "src/assets/CV");
const expectedLandscapeAssets = [
  ["greatprogressg11.jpg", 1344, 940],
  ["internationalg9.jpg", 1386, 946],
  ["HKISO2022gold.jpg", 1208, 892],
  ["wellspring-valedictorian-2026.jpg", 1600, 1156],
] as const;

function jpegDimensions(path: string): { height: number; width: number } {
  const bytes = readFileSync(path);
  let offset = 2;

  while (offset < bytes.length) {
    if (bytes[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = bytes[offset + 1];
    const length = bytes.readUInt16BE(offset + 2);
    if (marker >= 0xc0 && marker <= 0xc3) {
      return {
        height: bytes.readUInt16BE(offset + 5),
        width: bytes.readUInt16BE(offset + 7),
      };
    }
    offset += length + 2;
  }

  throw new Error(`No JPEG dimensions found for ${path}`);
}

describe("corrected and added award evidence quality", () => {
  it("stores every affected certificate as an upright landscape JPEG", () => {
    expectedLandscapeAssets.forEach(([fileName, width, height]) => {
      const path = resolve(ASSET_ROOT, fileName);
      expect(jpegDimensions(path)).toEqual({ width, height });
      expect(width).toBeGreaterThan(height);
    });
  });

  it("keeps every affected certificate below the public image budget", () => {
    expectedLandscapeAssets.forEach(([fileName]) => {
      expect(statSync(resolve(ASSET_ROOT, fileName)).size).toBeLessThanOrEqual(
        300_000,
      );
    });
  });
});
