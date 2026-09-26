export const EXPECTED_ASSET_PREFIXES: readonly string[];
export const EXPECTED_WEBP_PREFIXES: readonly string[];
export const PROHIBITED_FILENAME_PATTERN: RegExp;
export function normalizeBasePath(value: unknown): string;
export function validateProductionFiles(fileNames: readonly string[]): string[];
export function validateBundleText(bundleText: string): string[];
export function validateHtmlBasePath(
  html: string,
  expectedBasePath: string,
): string[];
