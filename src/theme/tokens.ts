export type ThemeMode = "light" | "dark";

export type ColorTokenRole =
  | "background"
  | "surface"
  | "text"
  | "accent"
  | "border";

export interface ColorToken {
  name: string;
  value: string;
  role: ColorTokenRole;
}

export type TypographyUsage = "heading" | "body" | "nav" | "control" | "metric";

export interface TypographyToken {
  name: string;
  family: string;
  usage: TypographyUsage;
}

export interface MotionToken {
  name: string;
  essential: boolean;
  durationMs: number;
  reducedMotionBehavior: "suppress" | "retain";
}

export interface Theme {
  mode: ThemeMode;
  colors: ColorToken[];
  typography: TypographyToken[];
  motion: MotionToken[];
}

const editorialSerif = "'Source Serif 4', 'Georgia', serif";
const readableSans = "'Inter', 'Segoe UI', sans-serif";

const sharedTypography: TypographyToken[] = [
  { name: "fontHeadingEditorial", family: editorialSerif, usage: "heading" },
  { name: "fontBodySans", family: readableSans, usage: "body" },
  { name: "fontNavSans", family: readableSans, usage: "nav" },
  { name: "fontControlSans", family: readableSans, usage: "control" },
  { name: "fontMetricSans", family: readableSans, usage: "metric" },
];

const sharedMotion: MotionToken[] = [
  {
    name: "motionSectionReveal",
    essential: false,
    durationMs: 220,
    reducedMotionBehavior: "suppress",
  },
  {
    name: "motionNavHighlight",
    essential: false,
    durationMs: 160,
    reducedMotionBehavior: "suppress",
  },
  {
    name: "motionGalleryModal",
    essential: false,
    durationMs: 180,
    reducedMotionBehavior: "suppress",
  },
];

export const lightTheme: Theme = {
  mode: "light",
  colors: [
    { name: "colorBackgroundPage", value: "#f4faf8", role: "background" },
    { name: "colorBackgroundSurface", value: "#ffffff", role: "surface" },
    { name: "colorTextPrimary", value: "#15312e", role: "text" },
    { name: "colorTextSecondary", value: "#52635f", role: "text" },
    { name: "colorAccentTeal", value: "#176b62", role: "accent" },
    { name: "colorAccentSurgicalGreen", value: "#10544d", role: "accent" },
    { name: "colorAccentBurgundy", value: "#ad4652", role: "accent" },
    { name: "colorBorderSubtle", value: "#d6e7e1", role: "border" },
    { name: "colorBorderStrong", value: "#66867c", role: "border" },
  ],
  typography: sharedTypography.map((token) =>
    token.name === "fontHeadingEditorial"
      ? { ...token, family: readableSans }
      : token,
  ),
  motion: sharedMotion,
};

export const darkTheme: Theme = {
  mode: "dark",
  colors: [
    { name: "colorBackgroundPage", value: "#0b1718", role: "background" },
    { name: "colorBackgroundSurface", value: "#112326", role: "surface" },
    { name: "colorTextPrimary", value: "#f5f1e8", role: "text" },
    { name: "colorTextSecondary", value: "#bbc9c5", role: "text" },
    { name: "colorAccentTeal", value: "#83ddd0", role: "accent" },
    { name: "colorAccentSurgicalGreen", value: "#b9cca4", role: "accent" },
    { name: "colorAccentBurgundy", value: "#f3a6b4", role: "accent" },
    { name: "colorBorderSubtle", value: "#2c4241", role: "border" },
    { name: "colorBorderStrong", value: "#68817c", role: "border" },
  ],
  typography: sharedTypography,
  motion: sharedMotion,
};
