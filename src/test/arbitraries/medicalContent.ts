import fc from "fast-check";

import type {
  ActivityEntryData,
  ContactSectionData,
  DownloadAsset,
  ResearchProjectData,
} from "../../types/medicalPortfolio";

const idArbitrary = fc
  .tuple(
    fc.constantFrom("medical", "science", "service", "award", "study"),
    fc.integer({ min: 1, max: 999 }),
  )
  .map(([prefix, suffix]) => `${prefix}-${suffix}`);

const safeSentenceArbitrary = fc
  .array(
    fc.constantFrom(
      "student",
      "science",
      "learning",
      "project",
      "observation",
      "teamwork",
      "community",
      "study",
    ),
    { minLength: 3, maxLength: 10 },
  )
  .map((words) => `${words.join(" ")}.`);

const safeIdentifierArbitrary = fc
  .array(fc.constantFrom(..."abcdefghijklmnopqrstuvwxyz9876543210"), {
    minLength: 3,
    maxLength: 14,
  })
  .map((characters) => characters.join(""));

export const safeSectionCopyArbitrary = fc.record({
  title: safeSentenceArbitrary.map((sentence) => `Section ${sentence}`),
  body: safeSentenceArbitrary.map((sentence) => `Body ${sentence}`),
});

export const contactSectionArbitrary: fc.Arbitrary<ContactSectionData> = fc
  .tuple(
    safeSentenceArbitrary,
    safeSentenceArbitrary,
    safeSentenceArbitrary,
    safeIdentifierArbitrary,
  )
  .map(([statement, privacyNotice, reviewNote, identifier]) => ({
    statement,
    recipientEmail: `${identifier}@example.com`,
    draftSubject: `Portfolio contact ${identifier}`,
    privacyNotice,
    reviewNote,
  }));

export const activityEntryArbitrary: fc.Arbitrary<ActivityEntryData> =
  fc.record({
    id: idArbitrary,
    category: fc.constantFrom(
      "leadership",
      "conference",
      "community",
      "school",
    ),
    title: fc.constantFrom(
      "Student Leadership",
      "Community Initiative",
      "School Project",
    ),
    period: fc.constantFrom("2024", "2025", "Student activity"),
    description: safeSentenceArbitrary,
  });

export const researchProjectArbitrary: fc.Arbitrary<ResearchProjectData> =
  fc.record({
    id: idArbitrary,
    title: fc.constantFrom("Student Science Project", "Materials Study"),
    period: fc.constantFrom("2025", "2026", "February-August 2026"),
    context: safeSentenceArbitrary,
    methods: fc.array(safeSentenceArbitrary, { minLength: 1, maxLength: 4 }),
    reportedObservations: fc.array(safeSentenceArbitrary, {
      minLength: 1,
      maxLength: 4,
    }),
  });

export const downloadAssetArbitrary = (
  allowedAsset: string,
): fc.Arbitrary<DownloadAsset> =>
  fc.constant({
    asset: allowedAsset,
    sourceFileName: "bui-tuan-phat-cv.pdf",
    fileName: "bui-tuan-phat-cv.pdf",
    label: "Download CV",
    ariaLabel: "Download Bui Tuan Phat's CV as a PDF",
  });

export const stableIdCollectionArbitrary = fc.uniqueArray(idArbitrary, {
  minLength: 1,
  maxLength: 24,
});
