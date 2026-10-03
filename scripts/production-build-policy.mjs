export const EXPECTED_ASSET_PREFIXES = [
  "profile_pic-",
  "HKISO2022gold-",
  "HKISO2022silver-",
  "HKISO2023bronze-",
  "HKISO2025bronze-",
  "SAPfinalg11-",
  "SAPround1g11-",
  "SAPround3g11-",
  "SAPround1g12-",
  "excellentsecond-",
  "WISCONg10-",
  "WISCONg10top4-",
  "Tram_Chamg11-",
  "presentg11-",
  "VUCAg9-",
  "greatprogressg11-",
  "internationalg9-",
  "wellspring-valedictorian-2026-",
  "origami-interest-",
  "piano-interest-",
  "bui-tuan-phat-cv-",
];

export const EXPECTED_WEBP_PREFIXES = ["origami-interest-", "piano-interest-"];

export const PROHIBITED_FILENAME_PATTERN =
  /(?:dontuse|passport|cccd|visa|birth|transcript|recordg|scorerecord|graduation|acceptance|donation|ythainguyen|ielts|iogtvn|dhtn|apreport|sat)/i;

const PROHIBITED_BUNDLE_TEXT = [
  "Nham Quoc Hung",
  "Data Engineer at Torilab Inc.",
  "nhamhung.gttn@gmail.com",
  "quoc-hung-nham",
  "Engineering Portfolio",
  "Business Showcase",
  "PortfolioStyleSelector",
  "EngineeringShell",
  "BusinessShell",
  "portfolio-layout-mode",
  "portfolio-template-id",
  ["testemail", "gmail.com"].join("@"),
  ["123", "456", "789"].join(""),
  "import.meta.glob",
  "XMLHttpRequest",
];

export function normalizeBasePath(value) {
  const trimmed = String(value || "/").trim();
  const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  const collapsed = withLeadingSlash.replace(/\/{2,}/g, "/");
  return collapsed.endsWith("/") ? collapsed : `${collapsed}/`;
}

export function validateProductionFiles(fileNames) {
  const normalizedNames = [...fileNames].map((name) =>
    name.replaceAll("\\", "/"),
  );
  const assetNames = normalizedNames
    .filter((name) => name.startsWith("assets/"))
    .map((name) => name.slice("assets/".length));
  const errors = [];

  if (!normalizedNames.includes("index.html")) {
    errors.push("Missing dist/index.html.");
  }
  if (
    assetNames.filter((name) => name.toLowerCase().endsWith(".jpg")).length !==
    18
  ) {
    errors.push(
      "Production output must contain exactly 18 approved JPG files.",
    );
  }
  if (
    assetNames.filter((name) => name.toLowerCase().endsWith(".webp")).length !==
    2
  ) {
    errors.push(
      "Production output must contain exactly 2 approved WebP files.",
    );
  }
  if (
    assetNames.filter((name) => name.toLowerCase().endsWith(".pdf")).length !==
    1
  ) {
    errors.push(
      "Production output must contain exactly one approved PDF file.",
    );
  }

  for (const prefix of EXPECTED_ASSET_PREFIXES) {
    const matches = assetNames.filter((name) => name.startsWith(prefix));
    if (matches.length !== 1) {
      errors.push(
        `Expected exactly one production asset beginning with ${prefix}.`,
      );
    }
  }

  const unexpectedMedia = assetNames.filter(
    (name) =>
      /\.(?:avif|gif|heic|jpe?g|pdf|png|svg|webp)$/i.test(name) &&
      !EXPECTED_ASSET_PREFIXES.some((prefix) => name.startsWith(prefix)),
  );
  if (unexpectedMedia.length) {
    errors.push(`Unexpected production media: ${unexpectedMedia.join(", ")}.`);
  }

  const prohibited = normalizedNames.filter((name) =>
    PROHIBITED_FILENAME_PATTERN.test(name),
  );
  if (prohibited.length) {
    errors.push(`Prohibited production filename: ${prohibited.join(", ")}.`);
  }

  return errors;
}

export function validateBundleText(bundleText) {
  const errors = [];

  for (const marker of PROHIBITED_BUNDLE_TEXT) {
    if (bundleText.includes(marker))
      errors.push(`Prohibited bundle marker: ${marker}.`);
  }

  const fetchCount = bundleText.match(/\bfetch\s*\(/g)?.length ?? 0;
  const hasViteModulePreload = bundleText.includes("modulepreload");
  if (fetchCount > 1 || (fetchCount === 1 && !hasViteModulePreload)) {
    errors.push("Unexpected application runtime request marker detected.");
  }

  return errors;
}

export function validateHtmlBasePath(html, expectedBasePath) {
  const basePath = normalizeBasePath(expectedBasePath);
  const errors = [];
  const localUrls = [...html.matchAll(/(?:src|href)=["']([^"']+)["']/g)]
    .map((match) => match[1])
    .filter((url) => url.startsWith("/") && !url.startsWith("//"));

  for (const url of localUrls) {
    if (!url.startsWith(basePath)) {
      errors.push(
        `Local URL ${url} is outside expected base path ${basePath}.`,
      );
    }
  }

  return errors;
}
