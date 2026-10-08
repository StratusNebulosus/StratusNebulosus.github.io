import { render, cleanup, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { MedicalSectionRenderer } from "./MedicalSectionRenderer";
import { EvidencePreviewProvider } from "./gallery";
import { Provider } from "../ui/provider";
import { galleryItems } from "../../data/medical/gallery";
afterEach(cleanup);
it("renders only selected section while preserving shared evidence controls", () => {
  render(
    <Provider>
      <EvidencePreviewProvider items={galleryItems}>
        <MedicalSectionRenderer layout="section" section="science" />
      </EvidencePreviewProvider>
    </Provider>,
  );
  expect(screen.getByTestId("medical-section-science")).toBeInTheDocument();
  expect(screen.queryByTestId("medical-section-overview")).toBeNull();
  expect(screen.getByTestId("medical-next-section")).toHaveAttribute(
    "href",
    "#leadership",
  );
});
