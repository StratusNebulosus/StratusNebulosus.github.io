/**
 * Test-only WCAG contrast-ratio utility (BR-3). Never imported by any
 * production module so it is excluded from the production bundle.
 */
function channelToLinear(channel: number): number {
  const normalized = channel / 255;

  return normalized <= 0.04045
    ? normalized / 12.92
    : ((normalized + 0.055) / 1.055) ** 2.4;
}

function luminance(hex: string): number {
  const clean = hex.replace("#", "");
  const channels = [0, 2, 4].map((start) =>
    channelToLinear(Number.parseInt(clean.slice(start, start + 2), 16)),
  );

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

export function contrastRatio(colorA: string, colorB: string): number {
  const [lighter, darker] = [luminance(colorA), luminance(colorB)].sort(
    (left, right) => right - left,
  );

  return (lighter + 0.05) / (darker + 0.05);
}

export type ContrastSizeClass = "normal" | "large-or-essential";

export interface ContrastPair {
  textToken: string;
  backgroundToken: string;
  sizeClass: ContrastSizeClass;
}

export interface ContrastCheckResult extends ContrastPair {
  ratio: number;
  requiredRatio: 4.5 | 3;
  passes: boolean;
}

function requiredRatioFor(sizeClass: ContrastSizeClass): 4.5 | 3 {
  return sizeClass === "normal" ? 4.5 : 3;
}

export function validateContrast(
  colorsByToken: Record<string, string>,
  pairs: ContrastPair[],
): ContrastCheckResult[] {
  return pairs.map((pair) => {
    const textValue = colorsByToken[pair.textToken];
    const backgroundValue = colorsByToken[pair.backgroundToken];
    const ratio = contrastRatio(textValue, backgroundValue);
    const requiredRatio = requiredRatioFor(pair.sizeClass);

    return {
      ...pair,
      ratio,
      requiredRatio,
      passes: ratio >= requiredRatio,
    };
  });
}
