import { darkTheme, lightTheme } from "./tokens";
import type { Theme } from "./tokens";

function toCssVarName(tokenName: string): string {
  return `--${tokenName.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`;
}

function themeToDeclarationBlock(theme: Theme): string {
  const colorDeclarations = theme.colors.map(
    (token) => `  ${toCssVarName(token.name)}: ${token.value};`,
  );
  const typographyDeclarations = theme.typography.map(
    (token) => `  ${toCssVarName(token.name)}: ${token.family};`,
  );
  const motionDeclarations = theme.motion.map(
    (token) => `  ${toCssVarName(token.name)}: ${token.durationMs}ms;`,
  );

  return [
    ...colorDeclarations,
    ...typographyDeclarations,
    ...motionDeclarations,
  ].join("\n");
}

/**
 * NFR Design Pattern 2: walks both themes once and emits static CSS custom
 * property blocks scoped by the `data-color-mode` attribute. Intended to be
 * called at module load time, not per render.
 */
export function generateThemeCss(): string {
  return [
    `[data-color-mode="light"] {\n${themeToDeclarationBlock(lightTheme)}\n}`,
    `[data-color-mode="dark"] {\n${themeToDeclarationBlock(darkTheme)}\n}`,
  ].join("\n\n");
}
