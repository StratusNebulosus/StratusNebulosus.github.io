import { darkTheme, lightTheme } from "./tokens";
import type { Theme, ThemeMode } from "./tokens";

export function getTheme(mode: ThemeMode): Theme {
  return mode === "dark" ? darkTheme : lightTheme;
}
