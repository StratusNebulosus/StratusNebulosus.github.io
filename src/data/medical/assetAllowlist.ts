import profilePic from "../../assets/profile_pic.jpg";
import hkiso2022Gold from "../../assets/CV/HKISO2022gold.jpg";
import hkiso2022Silver from "../../assets/CV/HKISO2022silver.jpg";
import hkiso2023Bronze from "../../assets/CV/HKISO2023bronze.jpg";
import hkiso2025Bronze from "../../assets/CV/HKISO2025bronze.jpg";
import wisConParticipation from "../../assets/CV/WISCONg10.jpg";
import wisConTop4 from "../../assets/CV/WISCONg10top4.jpg";
import sapFinal from "../../assets/CV/SAPfinalg11.jpg";
import sapRound1G11 from "../../assets/CV/SAPround1g11.jpg";
import sapRound1G12 from "../../assets/CV/SAPround1g12.jpg";
import sapRound3G11 from "../../assets/CV/SAPround3g11.jpg";
import chemistryExcellentSecond from "../../assets/CV/excellentsecond.jpg";
import tramChamProject from "../../assets/CV/Tram&Chamg11.jpg";
import embracePresentContribution from "../../assets/CV/presentg11.jpg";
import vucaProject from "../../assets/CV/VUCAg9.jpg";
import greatProgress from "../../assets/CV/greatprogressg11.jpg";
import internationalMerit from "../../assets/CV/internationalg9.jpg";
import wellspringValedictorian from "../../assets/CV/wellspring-valedictorian-2026.jpg";
import buiTuanPhatCv from "../../assets/documents/bui-tuan-phat-cv.pdf";
import origamiInterest from "../../assets/illustrations/origami-interest.webp";
import pianoInterest from "../../assets/illustrations/piano-interest.webp";
import type {
  AllowedAsset,
  AssetAllowlistEntry,
} from "../../types/medicalPortfolio";

export const APPROVED_CV_ASSET = buiTuanPhatCv;

export const ALLOWED_ASSETS: AssetAllowlistEntry[] = [
  {
    asset: profilePic,
    sourceFileName: "profile_pic.jpg",
    description: "Publication-ready graduation portrait",
  },
  {
    asset: hkiso2022Gold,
    sourceFileName: "HKISO2022gold.jpg",
    description:
      "Hong Kong International Science Olympiad Gold Award, Heat Round 2021-2022",
  },
  {
    asset: hkiso2022Silver,
    sourceFileName: "HKISO2022silver.jpg",
    description: "Hong Kong International Science Olympiad Silver Award, 2022",
  },
  {
    asset: hkiso2023Bronze,
    sourceFileName: "HKISO2023bronze.jpg",
    description: "Hong Kong International Science Olympiad Bronze Award, 2023",
  },
  {
    asset: hkiso2025Bronze,
    sourceFileName: "HKISO2025bronze.jpg",
    description: "Hong Kong International Science Olympiad Bronze Award, 2025",
  },
  {
    asset: wisConParticipation,
    sourceFileName: "WISCONg10.jpg",
    description:
      "WIS Conference World Health Organization committee delegate certificate",
  },
  {
    asset: wisConTop4,
    sourceFileName: "WISCONg10top4.jpg",
    description: "WIS Conference Top 10 Delegate recognition, ranked fourth",
  },
  {
    asset: sapFinal,
    sourceFileName: "SAPfinalg11.jpg",
    description: "Science and Passion competition, First Prize final round",
  },
  {
    asset: sapRound1G11,
    sourceFileName: "SAPround1g11.jpg",
    description: "Science and Passion competition, Round 1 recognition",
  },
  {
    asset: sapRound1G12,
    sourceFileName: "SAPround1g12.jpg",
    description: "Science and Passion competition, Round 1 recognition",
  },
  {
    asset: sapRound3G11,
    sourceFileName: "SAPround3g11.jpg",
    description: "Science and Passion competition, Round 3 recognition",
  },
  {
    asset: chemistryExcellentSecond,
    sourceFileName: "excellentsecond.jpg",
    description:
      "School-level Grade 12 Chemistry excellent-student selection exam, Second Prize",
  },
  {
    asset: tramChamProject,
    sourceFileName: "Tram&Chamg11.jpg",
    description: "Science of Tram and Cham project participation certificate",
  },
  {
    asset: embracePresentContribution,
    sourceFileName: "presentg11.jpg",
    description:
      '"Embrace the Present" school event outstanding contributor certificate',
  },
  {
    asset: vucaProject,
    sourceFileName: "VUCAg9.jpg",
    description:
      "Grade 9 VUCA interdisciplinary project participation certificate",
  },
  {
    asset: greatProgress,
    sourceFileName: "greatprogressg11.jpg",
    description: "Grade 11 Great Progress recognition",
  },
  {
    asset: internationalMerit,
    sourceFileName: "internationalg9.jpg",
    description:
      "International Program outstanding academic achievement merit scholarship",
  },
  {
    asset: wellspringValedictorian,
    sourceFileName: "wellspring-valedictorian-2026.jpg",
    description:
      "Wellspring Student Emulation and Reward, American Dual Diploma Program valedictorian, 2025-2026",
  },
  {
    asset: origamiInterest,
    sourceFileName: "origami-interest.webp",
    description:
      "Original editorial illustration of origami as a personal interest",
  },
  {
    asset: pianoInterest,
    sourceFileName: "piano-interest.webp",
    description:
      "Original editorial illustration of piano as a personal interest",
  },
  {
    asset: buiTuanPhatCv,
    sourceFileName: "bui-tuan-phat-cv.pdf",
    description: "Approved public curriculum vitae for Bui Tuan Phat",
  },
];

export function isAllowedAsset(candidate: AllowedAsset): boolean {
  return ALLOWED_ASSETS.some((entry) => entry.asset === candidate);
}

export function getAllowlistedAssets(): AssetAllowlistEntry[] {
  return ALLOWED_ASSETS;
}

export function getAllowlistedAssetBySourceFileName(
  sourceFileName: string,
): AssetAllowlistEntry | undefined {
  return ALLOWED_ASSETS.find(
    (entry) => entry.sourceFileName === sourceFileName,
  );
}
