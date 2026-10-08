import {
  render,
  cleanup,
  waitFor,
  fireEvent,
  screen,
} from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { ColorModeProvider } from "./color-mode";
import { useColorMode } from "./color-mode-utils";
function Toggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return <button onClick={toggleColorMode}>{colorMode}</button>;
}
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  localStorage.clear();
});
it("normalizes invalid saved themes and supports light toggling", async () => {
  localStorage.setItem("theme", "unknown");
  render(
    <ColorModeProvider>
      <Toggle />
    </ColorModeProvider>,
  );
  await waitFor(() =>
    expect(document.documentElement.dataset.colorMode).toBe("dark"),
  );
  fireEvent.click(screen.getByRole("button"));
  await waitFor(() =>
    expect(document.documentElement.dataset.colorMode).toBe("light"),
  );
});
