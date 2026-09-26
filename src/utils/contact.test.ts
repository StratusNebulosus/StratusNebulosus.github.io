import { describe, expect, it } from "vitest";

import { buildMailtoUrl } from "./contact";

describe("buildMailtoUrl", () => {
  it("trims and percent-encodes a complete local email draft", () => {
    const result = buildMailtoUrl(
      {
        name: "  Nguyễn A & B  ",
        email: "  visitor+portfolio@example.com  ",
        subject: "  Portfolio contact for Bui Tuan Phat  ",
        message: "  Hello?\nScience & service + medicine.  ",
      },
      "  buituanphat123456@gmail.com  ",
    );

    const [address, query] = result.split("?");
    const params = new URLSearchParams(query);

    expect(address).toBe("mailto:buituanphat123456@gmail.com");
    expect(params.get("subject")).toBe("Portfolio contact for Bui Tuan Phat");
    expect(params.get("body")).toBe(
      "Name: Nguyễn A & B\nReply-to email: visitor+portfolio@example.com\n\nHello?\nScience & service + medicine.",
    );
    expect(result).toContain("%26");
    expect(result).toContain("%2B");
    expect(result).toContain("%0A");
  });

  it("uses the stable fallback subject when the supplied subject is blank", () => {
    const result = buildMailtoUrl(
      {
        name: "Visitor",
        email: "visitor@example.com",
        subject: " ",
        message: "Hello",
      },
      "owner@example.com",
    );

    expect(new URLSearchParams(result.split("?")[1]).get("subject")).toBe(
      "Portfolio contact",
    );
  });
});
