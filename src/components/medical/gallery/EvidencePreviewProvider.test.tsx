import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { Provider } from "../../ui/provider";
import { galleryItems } from "../../../data/medical/gallery";
import {
  EvidencePreviewProvider,
  useEvidencePreview,
} from "./EvidencePreviewProvider";
function Trigger() {
  const { openItem } = useEvidencePreview();
  return (
    <button onClick={(e) => openItem(galleryItems[0].id, e.currentTarget)}>
      Preview
    </button>
  );
}
function Tree({ context }: { context: string }) {
  return (
    <Provider>
      <main id="main-content" tabIndex={-1}>
        <EvidencePreviewProvider items={galleryItems} presentationKey={context}>
          <Trigger />
        </EvidencePreviewProvider>
      </main>
    </Provider>
  );
}
afterEach(cleanup);
it("dismisses a preview safely when presentation context changes", async () => {
  const tree = render(<Tree context="notebook" />);
  fireEvent.click(screen.getByRole("button", { name: "Preview" }));
  expect(await screen.findByRole("dialog")).toBeInTheDocument();
  tree.rerender(<Tree context="casebook" />);
  await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
  fireEvent.click(screen.getByRole("button", { name: "Preview" }));
  expect(await screen.findByRole("dialog")).toBeInTheDocument();
});
