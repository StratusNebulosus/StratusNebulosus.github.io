import fc from "fast-check";
import { describe, expect, it } from "vitest";

import { darkTheme, lightTheme } from "./tokens";

function tokenNames(theme: typeof lightTheme): string[] {
  return [
    ...theme.colors.map((token) => token.name),
    ...theme.typography.map((token) => token.name),
    ...theme.motion.map((token) => token.name),
  ];
}

describe("theme token parity (BR-1)", () => {
  const lightNames = tokenNames(lightTheme);
  const darkNames = tokenNames(darkTheme);

  it("has a non-empty token set to validate against", () => {
    expect(lightNames.length).toBeGreaterThan(0);
    expect(darkNames.length).toBeGreaterThan(0);
  });

  it("every light theme token name also exists in the dark theme", () => {
    fc.assert(
      fc.property(fc.constantFrom(...lightNames), (name) => {
        expect(darkNames).toContain(name);
      }),
    );
  });

  it("every dark theme token name also exists in the light theme", () => {
    fc.assert(
      fc.property(fc.constantFrom(...darkNames), (name) => {
        expect(lightNames).toContain(name);
      }),
    );
  });
});
