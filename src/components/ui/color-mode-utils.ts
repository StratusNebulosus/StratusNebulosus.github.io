"use client";

import { useTheme } from "next-themes";
import {
  applyColorModeToRoot,
  isColorModeValue,
  resolveColorModePreference,
} from "../../theme/resolveColorModePreference";

export type ColorMode = "light" | "dark";

export interface UseColorModeReturn {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
  toggleColorMode: () => void;
}

export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme();
  const candidate = forcedTheme || resolvedTheme;
  const colorMode = isColorModeValue(candidate)
    ? candidate
    : resolveColorModePreference().value;
  const applyColorMode = (nextMode: ColorMode) => {
    setTheme(nextMode);

    applyColorModeToRoot(nextMode);
  };
  const toggleColorMode = () =>
    applyColorMode(colorMode === "dark" ? "light" : "dark");

  return {
    colorMode,
    setColorMode: applyColorMode,
    toggleColorMode,
  };
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? dark : light;
}
