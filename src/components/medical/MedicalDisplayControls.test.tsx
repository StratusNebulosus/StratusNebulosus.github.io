import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { MedicalDisplayControls } from "./MedicalDisplayControls";
afterEach(cleanup);
it("names selections and reports style/layout choices", () => {
  const onStyleChange = vi.fn(),
    onLayoutChange = vi.fn();
  render(
    <MedicalDisplayControls
      style="casebook"
      layout="section"
      onStyleChange={onStyleChange}
      onLayoutChange={onLayoutChange}
    />,
  );
  expect(screen.getByLabelText("Portfolio style")).toHaveValue("casebook");
  expect(screen.getByLabelText("Portfolio view")).toHaveValue("section");
  fireEvent.change(screen.getByLabelText("Portfolio style"), {
    target: { value: "notebook" },
  });
  expect(onStyleChange).toHaveBeenCalledWith("notebook");
  fireEvent.change(screen.getByLabelText("Portfolio view"), {
    target: { value: "full-page" },
  });
  expect(onLayoutChange).toHaveBeenCalledWith("full-page");
});
