/// <reference types="node" />

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

const CSS_PATH = resolve(
  process.cwd(),
  "src/components/medical/content/medical-content.css",
);
const PRIMITIVES_PATH = resolve(
  process.cwd(),
  "src/components/medical/content/ContentPrimitives.tsx",
);
const HERO_PATH = resolve(
  process.cwd(),
  "src/components/medical/content/MedicalHero.tsx",
);

describe("medical content styling safeguards", () => {
  const css = readFileSync(CSS_PATH, "utf8");

  it("uses named theme tokens instead of literal palette colors", () => {
    expect(css).not.toMatch(/#[0-9a-f]{3,8}\b/i);
    expect(css).not.toMatch(/\brgba?\(/i);
    expect(css).toContain("var(--color-accent-teal)");
    expect(css).toContain("var(--color-background-surface)");
  });

  it("defines focus, compact-width, reserved-media, and reduced-motion rules", () => {
    expect(css).toContain(":focus-visible");
    expect(css).toContain("@media (max-width: 30rem)");
    expect(css).toContain("aspect-ratio");
    expect(css).toContain("@media (prefers-reduced-motion: reduce)");
  });

  it("prioritizes section content with bounded headings at every breakpoint", () => {
    expect(css).toContain(
      "grid-template-columns: minmax(10rem, 22fr) minmax(0, 78fr);",
    );
    expect(css).toContain("font-size: clamp(2rem, 2.7vw, 2.4rem);");
    expect(css).toContain("font-size: clamp(1.85rem, 4vw, 2.1rem);");
    expect(css).toContain("font-size: clamp(1.6rem, 7vw, 1.8rem);");
    expect(css).toContain(".medical-contact-panel");
    expect(css).toContain(".medical-contact-fields");
    expect(css).toContain(".medical-contact-message-field");
    expect(css).toContain(".medical-contact-actions button");
  });

  it("keeps the Contact form inside the established medical card system", () => {
    const panelRule = css.match(
      /\.medical-contact-panel\s*\{([\s\S]*?)\}/,
    )?.[1];
    expect(panelRule).toBeDefined();
    expect(panelRule).toContain(
      "border-top: 3px solid var(--color-accent-burgundy);",
    );
    expect(panelRule).toContain("border-radius: 0.55rem;");
    expect(panelRule).toContain("var(--color-background-surface) 92%");
    expect(panelRule).toContain("var(--color-accent-surgical-green) 6%");
    expect(panelRule).not.toContain("var(--color-accent-surgical-green) 9%");
    expect(css).toContain(".medical-contact-field label");
    expect(css).toContain("color: var(--color-accent-surgical-green);");
    expect(css).toContain("border-radius: 0.3rem;");
    expect(css).toContain("var(--motion-nav-highlight) ease");
  });

  it("keeps GPA metrics intact and awards evidence-first", () => {
    expect(css).toContain(".medical-gpa-metric");
    expect(css).toContain("white-space: nowrap;");
    expect(css).toContain(".medical-award-evidence-action");
    expect(css).toContain("aspect-ratio: 3 / 2;");
    expect(css).toContain("grid-template-columns: repeat(2, minmax(0, 1fr));");
  });

  it("keeps consistent activity colors and responsive illustrated interests", () => {
    expect(css).not.toContain(
      '.medical-activity-card[data-category="leadership"]',
    );
    expect(css).not.toContain(
      '.medical-activity-card[data-category="conference"]',
    );
    expect(css).not.toContain(
      '.medical-activity-card[data-category="community"]',
    );
    expect(css).not.toContain('.medical-activity-card[data-category="school"]');
    expect(css).toContain(".medical-interest-grid");
    expect(css).toContain(".medical-award-illustration figcaption");
  });

  it("keeps critical media eager and optional evidence lazy with dimensions", () => {
    const primitives = readFileSync(PRIMITIVES_PATH, "utf8");
    const hero = readFileSync(HERO_PATH, "utf8");
    expect(hero).toContain('loading="eager"');
    expect(hero).toContain('width="920"');
    expect(primitives).toContain('loading="lazy"');
    expect(primitives).toContain('width="720"');
  });
});
