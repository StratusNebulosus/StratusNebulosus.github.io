import { describe, expect, it } from "vitest";

import { parseFastCheckSeed } from "./propertySeed";

describe("fast-check seed configuration", () => {
  it("leaves ordinary randomized runs unseeded", () => {
    expect(parseFastCheckSeed(undefined)).toBeUndefined();
    expect(parseFastCheckSeed(" ")).toBeUndefined();
  });

  it("accepts signed 32-bit replay seeds", () => {
    expect(parseFastCheckSeed("123456789")).toBe(123456789);
    expect(parseFastCheckSeed("-42")).toBe(-42);
  });

  it("rejects malformed or out-of-range replay seeds", () => {
    expect(() => parseFastCheckSeed("12.5")).toThrow(/FC_SEED/);
    expect(() => parseFastCheckSeed("not-a-seed")).toThrow(/FC_SEED/);
    expect(() => parseFastCheckSeed("2147483648")).toThrow(/FC_SEED/);
  });
});
