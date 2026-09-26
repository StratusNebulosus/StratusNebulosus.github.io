import fc from "fast-check";
import { describe, expect, it } from "vitest";

import { content } from "./content";

const DATE_OF_BIRTH_PATTERN = /\b\d{1,2}\/\d{1,2}\/\d{4}\b/;
const LONG_DIGIT_IDENTIFIER_PATTERN = /\b\d{6,}\b/;

function collectStrings(value: unknown, out: string[] = []): string[] {
  if (typeof value === "string") {
    out.push(value);
  } else if (Array.isArray(value)) {
    value.forEach((item) => collectStrings(item, out));
  } else if (value && typeof value === "object") {
    Object.values(value).forEach((item) => collectStrings(item, out));
  }

  return out;
}

describe("private field exclusion (BR-4)", () => {
  const contentStrings = collectStrings(content);

  it("has a non-empty set of content strings to validate against", () => {
    expect(contentStrings.length).toBeGreaterThan(0);
  });

  it("no content string matches a date-of-birth-like or long-digit-identifier-like pattern", () => {
    fc.assert(
      fc.property(fc.constantFrom(...contentStrings), (text) => {
        expect(text).not.toMatch(DATE_OF_BIRTH_PATTERN);
        expect(text).not.toMatch(LONG_DIGIT_IDENTIFIER_PATTERN);
      }),
    );
  });
});
