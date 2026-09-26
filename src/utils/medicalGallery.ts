import type {
  AssetAllowlistEntry,
  GalleryCommand,
  GalleryItemData,
  GallerySelectionState,
  GalleryValidationResult,
} from "../types/medicalPortfolio";

const EMPTY_SELECTION: GallerySelectionState = { selectedItemId: null };

function hasText(value: string): boolean {
  return value.trim().length > 0;
}

export function isGalleryImage(
  item: GalleryItemData,
  allowlist: readonly AssetAllowlistEntry[],
): boolean {
  const matchingEntry = allowlist.find(
    (entry) =>
      entry.asset === item.asset && entry.sourceFileName === item.sourceFileName,
  );

  return Boolean(
    matchingEntry &&
      !item.sourceFileName.toLowerCase().endsWith(".pdf") &&
      hasText(item.id) &&
      hasText(item.title) &&
      hasText(item.description) &&
      hasText(item.period) &&
      hasText(item.altText),
  );
}

export function validateGalleryCollection(
  items: readonly GalleryItemData[],
  allowlist: readonly AssetAllowlistEntry[],
  expectedSourceFileNames: readonly string[],
): GalleryValidationResult {
  const errors: string[] = [];
  const idCounts = new Map<string, number>();
  const sourceCounts = new Map<string, number>();

  items.forEach((item) => {
    idCounts.set(item.id, (idCounts.get(item.id) ?? 0) + 1);
    sourceCounts.set(
      item.sourceFileName,
      (sourceCounts.get(item.sourceFileName) ?? 0) + 1,
    );
  });

  const expectedSources = new Set(expectedSourceFileNames);
  const validItems = items.filter((item) => {
    const valid = isGalleryImage(item, allowlist);
    const uniqueId = idCounts.get(item.id) === 1;
    const uniqueSource = sourceCounts.get(item.sourceFileName) === 1;
    const expected = expectedSources.has(item.sourceFileName);

    if (!valid) errors.push(`Invalid gallery item: ${item.id || "(empty id)"}`);
    if (!uniqueId) errors.push(`Duplicate gallery id: ${item.id}`);
    if (!uniqueSource) errors.push(`Duplicate gallery source: ${item.sourceFileName}`);
    if (!expected) errors.push(`Unexpected gallery source: ${item.sourceFileName}`);

    return valid && uniqueId && uniqueSource && expected;
  });

  expectedSourceFileNames.forEach((sourceFileName) => {
    if (sourceCounts.get(sourceFileName) !== 1) {
      errors.push(`Missing gallery source: ${sourceFileName}`);
    }
  });

  return { items: validItems, errors: [...new Set(errors)] };
}

export function getValidatedGalleryItems(
  items: readonly GalleryItemData[],
  allowlist: readonly AssetAllowlistEntry[],
  expectedSourceFileNames: readonly string[],
  failedItemIds: ReadonlySet<string> = new Set(),
): readonly GalleryItemData[] {
  return validateGalleryCollection(items, allowlist, expectedSourceFileNames).items.filter(
    (item) => !failedItemIds.has(item.id),
  );
}

export function resolveGalleryItem(
  items: readonly GalleryItemData[],
  itemId: string | null,
  failedItemIds: ReadonlySet<string> = new Set(),
): GalleryItemData | null {
  if (!itemId || failedItemIds.has(itemId)) return null;
  return items.find((item) => item.id === itemId) ?? null;
}

export function transitionGalleryState(
  state: GallerySelectionState,
  command: GalleryCommand,
  items: readonly GalleryItemData[],
  failedItemIds: ReadonlySet<string> = new Set(),
): GallerySelectionState {
  if (command.type === "close") return EMPTY_SELECTION;

  const selected = resolveGalleryItem(items, command.itemId, failedItemIds);
  if (!selected) return EMPTY_SELECTION;
  if (state.selectedItemId === selected.id) return state;
  return { selectedItemId: selected.id };
}
