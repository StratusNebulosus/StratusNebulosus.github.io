import type { GalleryItemData } from "../../../types/medicalPortfolio";

type GalleryItemProps = {
  item: GalleryItemData;
  failed: boolean;
  onActivate: (itemId: string, trigger: HTMLButtonElement) => void;
  onImageError: (itemId: string) => void;
};

function GalleryCardContent({
  item,
  failed,
  onImageError,
}: Pick<GalleryItemProps, "item" | "failed" | "onImageError">) {
  return (
    <>
      <span className="medical-gallery-media">
        {failed ? (
          <span className="medical-gallery-unavailable" role="status">
            Preview unavailable
          </span>
        ) : (
          <img
            src={item.asset}
            alt={item.altText}
            width="720"
            height="540"
            loading="lazy"
            decoding="async"
            style={{ objectPosition: item.thumbnailPosition }}
            onError={() => onImageError(item.id)}
          />
        )}
        <span className="medical-gallery-number" aria-hidden="true">
          View
        </span>
      </span>
      <span className="medical-gallery-caption">
        <span className="medical-gallery-meta">
          {item.category.replace("-", " ")} · {item.period}
        </span>
        <strong>{item.title}</strong>
        <span>{item.description}</span>
      </span>
    </>
  );
}

export function GalleryItem({ item, failed, onActivate, onImageError }: GalleryItemProps) {
  if (failed) {
    return (
      <article
        className="medical-gallery-card is-unavailable"
        data-content-id={item.id}
        data-testid={`medical-gallery-unavailable-${item.id}`}
      >
        <GalleryCardContent
          item={item}
          failed={failed}
          onImageError={onImageError}
        />
      </article>
    );
  }

  return (
    <button
      type="button"
      className="medical-gallery-card"
      aria-label={`Open ${item.title} evidence preview`}
      data-content-id={item.id}
      data-testid={`medical-gallery-item-${item.id}`}
      onClick={(event) => onActivate(item.id, event.currentTarget)}
    >
      <GalleryCardContent
        item={item}
        failed={failed}
        onImageError={onImageError}
      />
    </button>
  );
}
