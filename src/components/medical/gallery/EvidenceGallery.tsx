import { MedicalSection } from "../content";
import { useEvidencePreview } from "./EvidencePreviewProvider";
import { GalleryItem } from "./GalleryItem";

export function EvidenceGallery() {
  const { items, failedItemIds, openItem, markImageFailed } = useEvidencePreview();

  return (
    <MedicalSection
      id="gallery"
      index="07"
      eyebrow="Evidence gallery"
      title="A visual record of the journey"
      introduction="Sixteen reviewed images trace academic recognition, scientific curiosity, conference participation, and collaborative school projects."
      tone="accent"
    >
      {items.length ? (
        <div className="medical-gallery-grid" data-testid="medical-gallery-grid">
          {items.map((item) => (
            <GalleryItem
              key={item.id}
              item={item}
              failed={failedItemIds.has(item.id)}
              onActivate={openItem}
              onImageError={markImageFailed}
            />
          ))}
        </div>
      ) : (
        <p className="medical-gallery-empty" role="status">
          Verified gallery evidence is temporarily unavailable.
        </p>
      )}
    </MedicalSection>
  );
}
