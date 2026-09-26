import type { Theme } from "./tokens";

/**
 * BR-4: when reduced motion is preferred, every non-essential motion token
 * resolves to zero duration regardless of the active color mode.
 */
export function applyReducedMotion(
  theme: Theme,
  prefersReducedMotion: boolean,
): Theme {
  if (!prefersReducedMotion) {
    return theme;
  }

  return {
    ...theme,
    motion: theme.motion.map((token) =>
      token.essential
        ? token
        : { ...token, durationMs: 0 },
    ),
  };
}
