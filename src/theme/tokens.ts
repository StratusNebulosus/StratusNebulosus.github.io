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
    { name: "colorBackgroundPage", value: "#f7f4ec", role: "background" },
    { name: "colorBackgroundSurface", value: "#fffdf7", role: "surface" },
    { name: "colorTextPrimary", value: "#172b2b", role: "text" },
    { name: "colorTextSecondary", value: "#374c49", role: "text" },
    { name: "colorAccentTeal", value: "#14534e", role: "accent" },
    { name: "colorAccentSurgicalGreen", value: "#405b3d", role: "accent" },
    { name: "colorAccentBurgundy", value: "#7a2e3a", role: "accent" },
    { name: "colorBorderSubtle", value: "#d5ddd5", role: "border" },
    { name: "colorBorderStrong", value: "#76867c", role: "border" },
  ],
  typography: sharedTypography,
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
