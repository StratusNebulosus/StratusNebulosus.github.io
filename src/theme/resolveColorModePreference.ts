export type ColorModeValue = "light" | "dark";

export interface ColorModePreference {
  value: ColorModeValue;
  source: "user-selected" | "system-default";
}

const STORAGE_KEY = "theme";

function isColorModeValue(value: unknown): value is ColorModeValue {
  return value === "light" || value === "dark";
}

function readSystemPreference(): ColorModeValue {
  try {
    if (
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
  } catch {
    // Fall through to the default below.
  }

  return "light";
}

/**
 * BR-5: a persisted-preference read failure always falls back to the
 * system's prefers-color-scheme signal, and finally to "light", and never
 * throws or blocks rendering.
 */
export function resolveColorModePreference(): ColorModePreference {
  try {
    const stored =
      typeof window !== "undefined"
        ? window.localStorage.getItem(STORAGE_KEY)
        : null;

    if (isColorModeValue(stored)) {
      return { value: stored, source: "user-selected" };
    }
  } catch {
    // Storage unavailable or corrupted; fall back to system default below.
  }

  return { value: readSystemPreference(), source: "system-default" };
}
