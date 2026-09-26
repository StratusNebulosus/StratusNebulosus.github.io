"use client";

import { useTheme } from "next-themes";

export type ColorMode = "light" | "dark";

export interface UseColorModeReturn {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
  toggleColorMode: () => void;
}

export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme();
  const colorMode = (forcedTheme || resolvedTheme || "light") as ColorMode;
  const applyColorMode = (nextMode: ColorMode) => {
    setTheme(nextMode);

    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-color-mode", nextMode);
      document.documentElement.classList.toggle("light", nextMode === "light");
      document.documentElement.classList.toggle("dark", nextMode === "dark");
    }
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
