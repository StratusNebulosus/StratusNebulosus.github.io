/// <reference types="node" />

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

const medicalStyles = readFileSync(
  resolve(process.cwd(), "src/components/medical/medical-shell.css"),
  "utf8",
);
const medicalNavSource = readFileSync(
  resolve(process.cwd(), "src/components/medical/MedicalNav.tsx"),
  "utf8",
);
const appSource = readFileSync(resolve(process.cwd(), "src/App.tsx"), "utf8");

describe("medical shell accessibility and style safeguards", () => {
  it("uses the named medical design system without literal legacy colors", () => {
    [
      "--color-background-page",
      "--color-background-surface",
      "--color-text-primary",
      "--color-text-secondary",
      "--color-accent-teal",
      "--color-accent-surgical-green",
      "--color-accent-burgundy",
      "--color-border-subtle",
      "--font-heading-editorial",
      "--font-body-sans",
      "--font-nav-sans",
    ].forEach((token) => expect(medicalStyles).toContain(`var(${token})`));

    expect(medicalStyles).not.toMatch(/#[0-9a-f]{3,8}\b/i);
    expect(medicalStyles).not.toContain("--bg-900");
    expect(medicalStyles).not.toContain("--accent-300");
  });

  it("keeps navigation native-sticky, touch-friendly, and visibly focusable", () => {
    expect(medicalStyles).toMatch(
      /\.medical-header\s*{[^}]*position:\s*sticky;[^}]*top:\s*0;/s,
    );
    expect(medicalStyles).toMatch(
      /\.medical-icon-control\s*{[^}]*min-width:\s*2\.75rem[^}]*min-height:\s*2\.75rem/s,
    );
    expect(medicalStyles).toContain(":focus-visible");
    expect(medicalStyles).toContain("outline: 3px solid var(--color-accent-burgundy)");
    expect(medicalStyles).toContain("@media (max-width: 30rem)");
    expect(medicalStyles).toContain("@media (prefers-reduced-motion: reduce)");
  });

  it("keeps the skip link in the tab order while visually hiding it at rest", () => {
    expect(medicalStyles).toMatch(
      /\.medical-skip-link\s*{[^}]*width:\s*1px;[^}]*height:\s*1px;[^}]*clip-path:\s*inset\(50%\);/s,
    );
    expect(medicalStyles).toMatch(
      /\.medical-skip-link:focus\s*{[^}]*width:\s*auto;[^}]*height:\s*auto;[^}]*clip-path:\s*none;/s,
    );
    expect(medicalStyles).not.toContain("display: none;\n  visibility: hidden");
  });

  it("contains no retired public template or layout controls", () => {
    const activeSources = `${medicalNavSource}\n${appSource}`;

    expect(activeSources).not.toContain("PortfolioStyleSelector");
    expect(activeSources).not.toContain("usePortfolioLayout");
    expect(activeSources).not.toContain("EngineeringShell");
    expect(activeSources).not.toContain("BusinessShell");
    expect(activeSources).not.toContain("toggleLayoutMode");
    expect(activeSources).not.toContain("#/journal");
  });
});
