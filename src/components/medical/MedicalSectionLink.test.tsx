import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { MedicalSectionLink } from "./MedicalSectionLink";
import { MedicalNavigationContext } from "./MedicalNavigationContext";
afterEach(cleanup);
it("provides a real section href and only handles ordinary activation", () => {
  const navigate = vi.fn();
  render(
    <MedicalNavigationContext.Provider
      value={{
        layout: "section",
        getNavigationHref: (id) => `#/${id}`,
        navigateToSection: navigate,
      }}
    >
      <MedicalSectionLink section="education">Education</MedicalSectionLink>
    </MedicalNavigationContext.Provider>,
  );
  const a = screen.getByRole("link");
  expect(a).toHaveAttribute("href", "#/education");
  fireEvent.click(a, { ctrlKey: true });
  expect(navigate).not.toHaveBeenCalled();
  fireEvent.click(a);
  expect(navigate).toHaveBeenCalledWith("education");
});
