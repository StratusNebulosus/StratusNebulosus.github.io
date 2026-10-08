import { useLayoutEffect } from "react";
import { useTheme } from "next-themes";
import {
  applyColorModeToRoot,
  isColorModeValue,
  resolveColorModePreference,
} from "../../theme/resolveColorModePreference";
export function ColorModeSynchronizer() {
  const { theme, setTheme, forcedTheme } = useTheme();
  const value = isColorModeValue(forcedTheme)
    ? forcedTheme
    : isColorModeValue(theme)
      ? theme
      : resolveColorModePreference().value;
  useLayoutEffect(() => {
    applyColorModeToRoot(value);
    if (theme !== value && !forcedTheme) setTheme(value);
  }, [theme, forcedTheme, value, setTheme]);
  return null;
}
