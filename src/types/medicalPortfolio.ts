export type AllowedAsset = string;

export interface IdentifiedContent {
  id: string;
}

export interface AssetAllowlistEntry {
  asset: AllowedAsset;
  sourceFileName: string;
  description: string;
}

export interface DownloadAsset {
  asset: AllowedAsset;
  sourceFileName: string;
  fileName: string;
  label: string;
  ariaLabel: string;
}

export interface HeroContent {
  eyebrow: string;
  name: string;
  role: string;
  positioningStatement: string;
  highlights: string[];
  academicHonor?: string;
  portrait: AllowedAsset;
  portraitAltText: string;
  cvDownload: DownloadAsset;
}

export interface NarrativeSection {
  aspirationParagraphs: string[];
  experienceParagraphs: string[];
}

export interface TimelineEntryData extends IdentifiedContent {
  institution: string;
  period: string;
  milestone: string;
  description: string;
}

export interface AcademicYearPerformance extends IdentifiedContent {
  grade: string;
  academicYear: string;
  gpa: string;
  scale: string;
}

export interface ScoreEntryData extends IdentifiedContent {
  label: string;
  value: string;
  context?: string;
}

export interface ScholarshipData extends IdentifiedContent {
  title: string;
  amount: string;
  academicYear: string;
  basis: string;
}

export interface AwardEntryData extends IdentifiedContent {
  title: string;
  year: string;
  organization?: string;
  description: string;
  evidence?: AllowedAsset;
  evidenceAltText?: string;
  illustration?: AllowedAsset;
  illustrationAltText?: string;
  illustrationDisclosure?: string;
}

export interface AwardGroup extends IdentifiedContent {
  theme: string;
  awards: AwardEntryData[];
}

export interface ResearchProjectData extends IdentifiedContent {
  title: string;
  period: string;
  context: string;
  methods: string[];
  reportedObservations: string[];
}

export type ActivityCategory =
  | "leadership"
  | "conference"
  | "community"
  | "school";

export interface ActivityEntryData extends IdentifiedContent {
  category: ActivityCategory;
  title: string;
  period: string;
  description: string;
}

export interface InterestEntry extends IdentifiedContent {
  label: string;
  image: AllowedAsset;
  imageAltText: string;
}

export interface ContactSectionData {
  statement: string;
  recipientEmail: string;
  draftSubject: string;
  privacyNotice: string;
  reviewNote: string;
}

export type GalleryCategory =
  | "portrait"
  | "science"
  | "conference"
  | "leadership"
  | "school-project"
  | "community";

export interface GalleryItemData extends IdentifiedContent {
  asset: AllowedAsset;
  sourceFileName: string;
  title: string;
  description: string;
  category: GalleryCategory;
  period: string;
  altText: string;
  thumbnailPosition?: string;
}

export interface GallerySelectionState {
  selectedItemId: string | null;
}

export type GalleryCommand =
  | { type: "open"; itemId: string }
  | { type: "close" };

export interface GalleryValidationResult {
  items: readonly GalleryItemData[];
  errors: readonly string[];
}

export interface PortfolioContent {
  hero: HeroContent;
  narrative: NarrativeSection;
  education: TimelineEntryData[];
  academicYears: AcademicYearPerformance[];
  scores: ScoreEntryData[];
  scholarship: ScholarshipData;
  researchProjects: ResearchProjectData[];
  awardGroups: AwardGroup[];
  activities: ActivityEntryData[];
  interests: InterestEntry[];
  contact: ContactSectionData;
}
