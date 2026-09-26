import { Dialog } from "@chakra-ui/react";

import type { GalleryItemData } from "../../../types/medicalPortfolio";

type GalleryModalProps = {
  item: GalleryItemData | null;
  onClose: () => void;
  onImageError: (itemId: string) => void;
  restoreFocusEl: () => HTMLElement | null;
};

export function GalleryModal({
  item,
  onClose,
  onImageError,
  restoreFocusEl,
}: GalleryModalProps) {
  return (
    <Dialog.Root
      open={item !== null}
      onOpenChange={(details) => {
        if (!details.open) onClose();
      }}
      finalFocusEl={restoreFocusEl}
      placement="top"
      size="cover"
    >
      <Dialog.Backdrop className="medical-gallery-modal-backdrop" />
      <Dialog.Positioner className="medical-gallery-modal-positioner">
        <Dialog.Content
          className="medical-gallery-modal"
          data-testid="medical-gallery-modal"
        >
          {item ? (
            <>
              <Dialog.CloseTrigger
                className="medical-gallery-modal-close"
                aria-label="Close evidence preview"
                data-testid="medical-gallery-modal-close"
              >
                <span aria-hidden="true">×</span>
              </Dialog.CloseTrigger>
              <div className="medical-gallery-modal-media">
                <img
                  src={item.asset}
                  alt={item.altText}
                  width="1440"
                  height="1080"
                  decoding="async"
                  onError={() => onImageError(item.id)}
                  data-testid="medical-gallery-modal-image"
                />
              </div>
              <div className="medical-gallery-modal-copy">
                <p className="medical-gallery-meta">
                  {item.category.replace("-", " ")} · {item.period}
                </p>
                <Dialog.Title className="medical-gallery-modal-title">
                  {item.title}
                </Dialog.Title>
                <Dialog.Description className="medical-gallery-modal-description">
                  {item.description}
                </Dialog.Description>
              </div>
            </>
          ) : null}
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
