import fc from "fast-check";
import { describe, expect, it } from "vitest";

import type { ContrastPair } from "../test/theme/contrastRatio";
import { validateContrast } from "../test/theme/contrastRatio";
import { darkTheme, lightTheme } from "./tokens";
import type { Theme } from "./tokens";

const DOCUMENTED_PAIRS: ContrastPair[] = [
  {
    textToken: "colorTextPrimary",
    backgroundToken: "colorBackgroundPage",
    sizeClass: "normal",
  },
  {
    textToken: "colorTextSecondary",
    backgroundToken: "colorBackgroundPage",
    sizeClass: "normal",
  },
  {
    textToken: "colorTextPrimary",
    backgroundToken: "colorBackgroundSurface",
    sizeClass: "normal",
  },
  {
    textToken: "colorAccentTeal",
    backgroundToken: "colorBackgroundSurface",
    sizeClass: "large-or-essential",
  },
  {
    textToken: "colorAccentSurgicalGreen",
    backgroundToken: "colorBackgroundSurface",
    sizeClass: "large-or-essential",
  },
  {
    textToken: "colorAccentBurgundy",
    backgroundToken: "colorBackgroundSurface",
    sizeClass: "large-or-essential",
  },
];

function colorsByToken(theme: Theme): Record<string, string> {
  return Object.fromEntries(theme.colors.map((token) => [token.name, token.value]));
}

describe("theme contrast validation (BR-3)", () => {
  it.each([
    ["light", lightTheme],
    ["dark", darkTheme],
  ] as const)("every documented pair passes WCAG AA in %s mode", (_mode, theme) => {
    const results = validateContrast(colorsByToken(theme), DOCUMENTED_PAIRS);

    results.forEach((result) => {
      expect(result.passes).toBe(true);
    });
  });

  it("holds for every documented pair via property-based sampling", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...DOCUMENTED_PAIRS),
        fc.constantFrom(lightTheme, darkTheme),
        (pair, theme) => {
          const [result] = validateContrast(colorsByToken(theme), [pair]);
          expect(result.passes).toBe(true);
        },
      ),
    );
  });
});
