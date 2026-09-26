/// <reference types="node" />

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

const GALLERY_ROOT = resolve(process.cwd(), "src/components/medical/gallery");
const CSS_PATH = resolve(GALLERY_ROOT, "medical-gallery.css");
const ITEM_PATH = resolve(GALLERY_ROOT, "GalleryItem.tsx");
const MODAL_PATH = resolve(GALLERY_ROOT, "GalleryModal.tsx");
const ORCHESTRATOR_PATH = resolve(GALLERY_ROOT, "EvidenceGallery.tsx");

describe("medical gallery source and styling safeguards", () => {
  const css = readFileSync(CSS_PATH, "utf8");
  const item = readFileSync(ITEM_PATH, "utf8");
  const modal = readFileSync(MODAL_PATH, "utf8");
  const orchestrator = readFileSync(ORCHESTRATOR_PATH, "utf8");

  it("uses theme tokens without literal palette colors", () => {
    expect(css).not.toMatch(/#[0-9a-f]{3,8}\b/i);
    expect(css).not.toMatch(/\brgba?\(/i);
    expect(css).toContain("var(--color-accent-surgical-green)");
    expect(css).toContain("var(--color-background-surface)");
  });

  it("reserves media, uses cover/contain, and defines responsive safeguards", () => {
    expect(css).toContain("aspect-ratio");
    expect(css).toMatch(/object-fit:\s*cover/);
    expect(css).toMatch(/object-fit:\s*contain/);
    expect(css).toContain("@media (min-width: 45rem)");
    expect(css).not.toContain("repeat(3, minmax(0, 1fr))");
    expect(css).toContain("grid-template-columns: repeat(2, minmax(0, 1fr));");
    expect(css).toContain("@media (max-width: 30rem)");
    expect(css).toContain(":focus-visible");
    expect(css).toContain("@media (prefers-reduced-motion: reduce)");
    expect(css).toContain("--medical-dialog-top-inset: 3rem;");
    expect(css).toContain("calc(1rem + env(safe-area-inset-top))");
    expect(css).toContain("align-items: flex-start !important;");
    expect(css).toMatch(/\.medical-gallery-modal-media\s*\{[^}]*margin-top:\s*1rem;/s);
    expect(modal).toContain('placement="top"');
  });

  it("keeps browser and Chakra interaction semantics without custom traps or discovery", () => {
    expect(item).toContain('<button');
    expect(item).toContain('loading="lazy"');
    expect(item).not.toContain("onKeyDown");
    expect(modal).toContain("Dialog.Root");
    expect(modal).not.toMatch(/previous|next|download|zoom/i);
    expect(`${item}${modal}${orchestrator}`).not.toContain("import.meta.glob");
    expect(`${item}${modal}${orchestrator}`).not.toContain("assets/CV/");
    expect(`${item}${modal}${orchestrator}`).not.toMatch(/focus-trap|querySelectorAll/);
  });
});
