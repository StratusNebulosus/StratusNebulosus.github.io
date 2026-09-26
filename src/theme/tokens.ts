export type ThemeMode = "light" | "dark";

export type ColorTokenRole = "background" | "surface" | "text" | "accent" | "border";

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
    { name: "colorBackgroundPage", value: "#faf6ee", role: "background" },
    { name: "colorBackgroundSurface", value: "#fffdf8", role: "surface" },
    { name: "colorTextPrimary", value: "#1f2723", role: "text" },
    { name: "colorTextSecondary", value: "#4a564e", role: "text" },
    { name: "colorAccentTeal", value: "#0f4c4c", role: "accent" },
    { name: "colorAccentSurgicalGreen", value: "#2f6f4e", role: "accent" },
    { name: "colorAccentBurgundy", value: "#7a2e3a", role: "accent" },
    { name: "colorBorderSubtle", value: "#d8cfb8", role: "border" },
  ],
  typography: sharedTypography,
  motion: sharedMotion,
};

export const darkTheme: Theme = {
  mode: "dark",
  colors: [
    { name: "colorBackgroundPage", value: "#0d1a19", role: "background" },
    { name: "colorBackgroundSurface", value: "#12211f", role: "surface" },
    { name: "colorTextPrimary", value: "#f4f1e8", role: "text" },
    { name: "colorTextSecondary", value: "#c9d2c9", role: "text" },
    { name: "colorAccentTeal", value: "#5fd6c8", role: "accent" },
    { name: "colorAccentSurgicalGreen", value: "#7fd39a", role: "accent" },
    { name: "colorAccentBurgundy", value: "#d98a97", role: "accent" },
    { name: "colorBorderSubtle", value: "#324a46", role: "border" },
  ],
  typography: sharedTypography,
  motion: sharedMotion,
};
