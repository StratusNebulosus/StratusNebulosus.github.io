import {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

import { getAllowlistedAssets } from "../../../data/medical/assetAllowlist";
import { APPROVED_GALLERY_SOURCE_FILE_NAMES } from "../../../data/medical/gallery";
import type {
  AllowedAsset,
  GalleryItemData,
  GallerySelectionState,
} from "../../../types/medicalPortfolio";
import {
  resolveGalleryItem,
  transitionGalleryState,
  validateGalleryCollection,
} from "../../../utils/medicalGallery";
import { GalleryModal } from "./GalleryModal";

type EvidencePreviewContextValue = {
  items: readonly GalleryItemData[];
  failedItemIds: ReadonlySet<string>;
  findItemByAsset: (asset?: AllowedAsset) => GalleryItemData | null;
  openItem: (itemId: string, trigger: HTMLButtonElement) => void;
  markImageFailed: (itemId: string) => void;
};

const EvidencePreviewContext = createContext<EvidencePreviewContextValue | null>(null);

type EvidencePreviewProviderProps = {
  items: readonly GalleryItemData[];
  children: ReactNode;
};

export function EvidencePreviewProvider({
  items,
  children,
}: EvidencePreviewProviderProps) {
  const validItems = useMemo(
    () =>
      validateGalleryCollection(
        items,
        getAllowlistedAssets(),
        APPROVED_GALLERY_SOURCE_FILE_NAMES,
      ).items,
    [items],
  );
  const [selection, setSelection] = useState<GallerySelectionState>({
    selectedItemId: null,
  });
  const [failedItemIds, setFailedItemIds] = useState<Set<string>>(new Set());
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const selectedItem = resolveGalleryItem(
    validItems,
    selection.selectedItemId,
    failedItemIds,
  );

  const openItem = (itemId: string, trigger: HTMLButtonElement) => {
    lastTrigger.current = trigger;
    setSelection((current) =>
      transitionGalleryState(
        current,
        { type: "open", itemId },
        validItems,
        failedItemIds,
      ),
    );
  };

  const closeModal = () => {
    setSelection((current) =>
      transitionGalleryState(current, { type: "close" }, validItems, failedItemIds),
    );
  };

  const markImageFailed = (itemId: string) => {
    setFailedItemIds((current) => new Set(current).add(itemId));
    setSelection((current) =>
      current.selectedItemId === itemId
        ? transitionGalleryState(current, { type: "close" }, validItems)
        : current,
    );
  };

  const findItemByAsset = (asset?: AllowedAsset) =>
    asset ? validItems.find((item) => item.asset === asset) ?? null : null;

  const restoreFocusEl = () => {
    if (lastTrigger.current?.isConnected && !lastTrigger.current.disabled) {
      return lastTrigger.current;
    }
    return (
      document.getElementById("gallery-heading") ??
      document.getElementById("science-heading")
    );
  };

  return (
    <EvidencePreviewContext.Provider
      value={{
        items: validItems,
        failedItemIds,
        findItemByAsset,
        openItem,
        markImageFailed,
      }}
    >
      {children}
      <GalleryModal
        item={selectedItem}
        onClose={closeModal}
        onImageError={markImageFailed}
        restoreFocusEl={restoreFocusEl}
      />
    </EvidencePreviewContext.Provider>
  );
}

// The provider and its colocated hook form one deliberately shared controller boundary.
// eslint-disable-next-line react-refresh/only-export-components
export function useEvidencePreview(): EvidencePreviewContextValue {
  const context = useContext(EvidencePreviewContext);
  if (!context) {
    throw new Error("useEvidencePreview must be used within EvidencePreviewProvider");
  }
  return context;
}
