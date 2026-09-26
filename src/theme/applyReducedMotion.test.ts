import { describe, expect, it } from "vitest";

import { applyReducedMotion } from "./applyReducedMotion";
import { lightTheme } from "./tokens";

describe("applyReducedMotion (BR-4)", () => {
  it("neutralizes every non-essential motion token when reduced motion is preferred", () => {
    const result = applyReducedMotion(lightTheme, true);

    result.motion.forEach((token) => {
      if (!token.essential) {
        expect(token.durationMs).toBe(0);
      }
    });
  });

  it("leaves motion tokens unchanged when reduced motion is not preferred", () => {
    const result = applyReducedMotion(lightTheme, false);

    expect(result).toBe(lightTheme);
    expect(result.motion).toEqual(lightTheme.motion);
  });
});
