import { MedicalSection } from "../content";
import { useEvidencePreview } from "./EvidencePreviewProvider";
import { GalleryItem } from "./GalleryItem";

export function EvidenceGallery() {
  const { items, failedItemIds, openItem, markImageFailed } =
    useEvidencePreview();

  return (
    <MedicalSection
      id="gallery"
      index="07"
      eyebrow="Gallery"
      title="My certificates and milestones"
      introduction="Take a look at the certificates and milestones from my academic journey, science competitions, and school activities."
      tone="accent"
    >
      {items.length ? (
        <div
          className="medical-gallery-grid"
          data-testid="medical-gallery-grid"
        >
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
