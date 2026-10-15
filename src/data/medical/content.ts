import profilePic from "../../assets/profile_pic.jpg";
import hkiso2022Gold from "../../assets/CV/HKISO2022gold.jpg";
import hkiso2022Silver from "../../assets/CV/HKISO2022silver.jpg";
import hkiso2023Bronze from "../../assets/CV/HKISO2023bronze.jpg";
import hkiso2025Bronze from "../../assets/CV/HKISO2025bronze.jpg";
import sapFinal from "../../assets/CV/SAPfinalg11.jpg";
import chemistryExcellentSecond from "../../assets/CV/excellentsecond.jpg";
import wellspringValedictorian from "../../assets/CV/wellspring-valedictorian-2026.jpg";
import origamiInterest from "../../assets/illustrations/origami-interest.webp";
import pianoInterest from "../../assets/illustrations/piano-interest.webp";
import type {
  ActivityEntryData,
  AwardGroup,
  PortfolioContent,
  ResearchProjectData,
  ScoreEntryData,
  TimelineEntryData,
} from "../../types/medicalPortfolio";
import { APPROVED_CV_ASSET } from "./assetAllowlist";

export const content: PortfolioContent = {
  hero: {
    eyebrow: "Welcome to my portfolio",
    name: "Bui Tuan Phat",
    role: "Medical Student at Thai Nguyen University of Medicine and Pharmacy",
    positioningStatement:
      "I am Bui Tuan Phat, a medical student bringing my curiosity for science and commitment to service into the next chapter of my education.",
    highlights: ["SAT 1500", "IELTS 8.0", "AP Biology 5", "AP Chemistry 5"],
    academicHonor: "Valedictorian · American Dual Diploma Program · 2026",
    portrait: profilePic,
    portraitAltText: "Bui Tuan Phat in graduation attire",
    cvDownload: {
      asset: APPROVED_CV_ASSET,
      sourceFileName: "bui-tuan-phat-cv.pdf",
      fileName: "bui-tuan-phat-cv.pdf",
      label: "Download CV",
      ariaLabel: "Download Bui Tuan Phat's CV as a PDF",
    },
  },
  narrative: {
    aspirationParagraphs: [
      "I am drawn to medicine because it brings careful scientific thinking together with compassion and service.",
      "As I continue my medical education, I want to grow in knowledge, discipline, and empathy.",
    ],
    experienceParagraphs: [
      "My time at Wellspring, science competitions, student research, leadership training, and community projects have shaped how I learn and work with others.",
      "I carry the lessons from these experiences into my studies and look forward to building on them as I grow.",
    ],
  },
  education: [
    {
      id: "wellspring-american-dual",
      institution: "Wellspring International Bilingual School",
      period: "2023-2026",
      milestone: "American Dual Course",
      description:
        "I completed a bilingual high-school pathway at Wellspring, with a strong focus on science.",
    },
    {
      id: "thai-nguyen-medicine",
      institution: "Thai Nguyen University of Medicine and Pharmacy",
      period: "Current",
      milestone: "Medicine Program",
      description:
        "I am continuing my education as a medical student at Thai Nguyen University of Medicine and Pharmacy.",
    },
  ],
  academicYears: [
    {
      id: "gpa-grade-10",
      grade: "Grade 10",
      academicYear: "2023-2024",
      gpa: "9.38",
      scale: "/10",
    },
    {
      id: "gpa-grade-11",
      grade: "Grade 11",
      academicYear: "2024-2025",
      gpa: "9.4",
      scale: "/10",
    },
    {
      id: "gpa-grade-12",
      grade: "Grade 12",
      academicYear: "2025-2026",
      gpa: "9.4",
      scale: "/10",
    },
  ],
  scores: [
    {
      id: "score-sat",
      label: "SAT",
      value: "1500",
      context: "Current total score",
    },
    {
      id: "score-ielts",
      label: "IELTS Academic",
      value: "8.0",
      context: "Current overall band",
    },
    {
      id: "score-ap-scholar",
      label: "AP Scholar",
      value: "Awarded",
      context: "College Board recognition",
    },
    {
      id: "score-ap-biology",
      label: "AP Biology",
      value: "5",
      context: "2025",
    },
    {
      id: "score-ap-chemistry",
      label: "AP Chemistry",
      value: "5",
      context: "2024",
    },
    {
      id: "score-ap-microeconomics",
      label: "AP Microeconomics",
      value: "4",
      context: "2025",
    },
  ],
  scholarship: {
    id: "wellspring-merit-scholarship",
    title: "Wellspring Merit Scholarship",
    amount: "VND 14,000,000",
    academicYear: "2022-2023",
    basis:
      "Awarded on the historical basis of IELTS 7.5 and PSAT 1310 results.",
  },
  researchProjects: [
    {
      id: "innoverse-nanomaterials-medicine",
      video: { youtubeId: "iLVkk7hrsHU", title: "INNOVERSE 2026" },
      title: "Exploring Nanomaterials in Medicine",
      period: "February-August 2026",
      context:
        "An Innoverse 2026 student project examining a top-down approach to nanomaterial preparation and reporting laboratory observations in a medical-science context.",
      methods: [
        "Used ball-mill processing as the project's top-down material-preparation method.",
        "Compared project samples through OD600 measurements and observations involving named cell lines.",
      ],
      reportedObservations: [
        "Recorded OD600 readings showed differences across the prepared samples.",
        "In this student project, I recorded observations across the referenced cell-line conditions.",
      ],
    },
  ],
  awardGroups: [
    {
      id: "awards-hkiso",
      theme: "Hong Kong International Science Olympiad",
      awards: [
        {
          id: "hkiso-gold-2022-heat",
          title: "Gold Award, Heat Round",
          year: "2021-2022",
          organization: "Hong Kong International Science Olympiad",
          description:
            "Earned Gold in the heat round of the 2021-2022 competition cycle.",
          evidence: hkiso2022Gold,
          evidenceAltText:
            "Certificate recognizing an HKISO Gold Award in the 2021-2022 heat round",
        },
        {
          id: "hkiso-silver-2022-final",
          title: "Silver Award, Final Round",
          year: "2021-2022",
          organization: "Hong Kong International Science Olympiad",
          description:
            "Earned Silver in the final round of the 2021-2022 competition cycle.",
          evidence: hkiso2022Silver,
          evidenceAltText:
            "Certificate recognizing an HKISO Silver Award in the 2021-2022 cycle",
        },
        {
          id: "hkiso-bronze-2023-heat",
          title: "Bronze Award, Heat Round",
          year: "2022-2023",
          organization: "Hong Kong International Science Olympiad",
          description:
            "Earned Bronze in the heat round of the 2022-2023 competition cycle.",
          evidence: hkiso2023Bronze,
          evidenceAltText:
            "Certificate recognizing an HKISO Bronze Award in the 2022-2023 cycle",
        },
        {
          id: "hkiso-bronze-2025-heat",
          title: "Bronze Award, Heat Round",
          year: "2024-2025",
          organization: "Hong Kong International Science Olympiad",
          description:
            "Earned Bronze in the heat round of the 2024-2025 competition cycle.",
          evidence: hkiso2025Bronze,
          evidenceAltText:
            "Certificate recognizing an HKISO Bronze Award in the 2024-2025 cycle",
        },
      ],
    },
    {
      id: "awards-school-honors",
      theme: "School Honors",
      awards: [
        {
          id: "american-dual-diploma-valedictorian",
          title: "American Dual Diploma Program Valedictorian",
          year: "2025-2026",
          organization: "Wellspring International Bilingual School",
          description:
            "Received the Wellspring Student Emulation and Reward as valedictorian of the American Dual Diploma Program.",
          evidence: wellspringValedictorian,
          evidenceAltText:
            "Wellspring certificate recognizing Bui Tuan Phat as valedictorian of the American Dual Diploma Program",
        },
      ],
    },
    {
      id: "awards-school-science",
      theme: "School Science Recognition",
      awards: [
        {
          id: "chemistry-second-prize",
          title: "Grade 12 Chemistry Selection Exam, Second Prize",
          year: "2025",
          organization: "Wellspring International Bilingual School",
          description:
            "Placed second in the school's Grade 12 Chemistry excellent-student selection exam.",
          evidence: chemistryExcellentSecond,
          evidenceAltText:
            "Certificate recognizing Second Prize in the Grade 12 Chemistry selection exam",
        },
        {
          id: "science-passion-first-prize",
          title: "Science and Passion, First Prize",
          year: "2024",
          organization: "Wellspring International Bilingual School",
          description:
            "Received First Prize in the Science and Passion competition final round.",
          evidence: sapFinal,
          evidenceAltText:
            "Certificate recognizing First Prize in the Science and Passion competition",
        },
      ],
    },
  ],
  activities: [
    {
      id: "iogt-vn-training",
      category: "leadership",
      title: "IOGT-VN Teamwork and Leadership Training",
      period: "Student development",
      description:
        "Completed structured training focused on teamwork, communication, and leadership.",
    },
    {
      id: "wellspring-hunger-games",
      category: "school",
      title: "Wellspring Hunger Games",
      period: "School activity",
      description:
        "Contributed to a collaborative Wellspring student event emphasizing participation and teamwork.",
    },
    {
      id: "wis-conference-who",
      category: "conference",
      title: "WIS Conference - WHO Committee",
      period: "2023",
      description:
        "Represented a country in the World Health Organization committee and was ranked fourth among the Top 10 Delegates.",
    },
    {
      id: "community-gift-fundraising",
      category: "community",
      title: "Fundraising and Gift Donation",
      period: "Community initiative",
      description:
        "Worked with a team to raise funds and donate 100 gifts to children receiving care for thalassemia and hemophilia.",
    },
    {
      id: "tram-and-cham",
      category: "school",
      title: "Science of Tram & Cham",
      period: "Student project",
      description:
        "Participated as a team member in the Science of Tram & Cham student project.",
    },
    {
      id: "happy-run",
      category: "community",
      title: "Happy Run",
      period: "Community event",
      description:
        "Participated in a community-oriented running event supporting shared engagement and wellbeing.",
    },
  ],
  interests: [
    {
      id: "interest-origami",
      label: "Origami",
      image: origamiInterest,
      imageAltText: "Teal origami crane arranged on warm ivory paper",
    },
    {
      id: "interest-piano",
      label: "Piano",
      image: pianoInterest,
      imageAltText: "Piano keys beside a teal notebook in warm natural light",
    },
  ],
  contact: {
    statement:
      "Thank you for taking the time to explore my portfolio. If you would like to connect, discuss a project, or share an opportunity, I would be glad to hear from you.",
    recipientEmail: "buituanphat123456@gmail.com",
    draftSubject: "Portfolio contact for Bui Tuan Phat",
    privacyNotice:
      "Nothing is submitted to or stored by this site. Your message opens in your email app for review.",
    reviewNote: "Review, edit, and send the message from your email app.",
  },
};

export function getPortfolioContent(): PortfolioContent {
  return content;
}

export function getHeroContent() {
  return content.hero;
}

export function getEducationJourney(): TimelineEntryData[] {
  return content.education;
}

export function getAcademicCredentials(): ScoreEntryData[] {
  return content.scores;
}

export function getResearchProjects(): ResearchProjectData[] {
  return content.researchProjects;
}

export function getScienceRecognitions(): AwardGroup[] {
  return content.awardGroups;
}

export function getLeadershipAndActivities(): ActivityEntryData[] {
  return content.activities;
}

export function getContactContent() {
  return content.contact;
}
