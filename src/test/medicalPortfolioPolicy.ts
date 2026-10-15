export const APPROVED_SECTION_IDS = [
  "overview",
  "calling",
  "education",
  "academics",
  "science",
  "leadership",
  "gallery",
  "contact",
] as const;

export const CURRENT_PUBLIC_IDENTITY_MARKERS = [
  "Bui Tuan Phat",
  "Medical Student",
  "University of Debrecen",
] as const;

export const FORMER_PUBLIC_IDENTITY_MARKERS = [
  "Nham Quoc Hung",
  "Data Engineer at Torilab Inc.",
  "nhamhung.gttn@gmail.com",
  "quoc-hung-nham",
] as const;

export const RETIRED_PUBLIC_EXPERIENCE_MARKERS = [
  "Engineering Portfolio",
  "Business Showcase",
  "PortfolioStyleSelector",
  "EngineeringShell",
  "BusinessShell",
  "portfolio-layout-mode",
  "portfolio-template-id",
] as const;

export const APPROVED_PRODUCTION_ASSET_PREFIXES = [
  "profile_pic-",
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
  "origami-interest-",
  "piano-interest-",
  "HKISO2022gold-",
  "wellspring-valedictorian-2026-",
  "bui-tuan-phat-cv-",
] as const;

export const PROHIBITED_PRODUCTION_FILENAME_PATTERN =
  /(?:dontuse|passport|cccd|visa|birth|transcript|recordg|scorerecord|graduation|acceptance|donation|ythainguyen|ielts|iogtvn|dhtn|apreport|sat)/i;

export const PLACEHOLDER_CONTACT_MARKERS = [
  ["testemail", "gmail.com"].join("@"),
  ["123", "456", "789"].join(""),
] as const;

export const APPROVED_WEBSITE_CONTACT_MARKERS = [
  "buituanphat123456@gmail.com",
] as const;

export const EXPECTED_GALLERY_IMAGE_COUNT = 18;
export const EXPECTED_PUBLIC_PDF_COUNT = 1;
