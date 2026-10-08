import { useCallback, useState } from "react";
import type {
  MedicalLayoutMode,
  MedicalStyleId,
} from "../data/medical/presentation";
import {
  readMedicalDisplayPreferences,
  persistMedicalDisplayPreference,
} from "../utils/medicalDisplayPreferences";
export function useMedicalDisplayPreferences() {
  const [preferences, setPreferences] = useState(readMedicalDisplayPreferences);
  const setStyle = useCallback((style: MedicalStyleId) => {
    setPreferences((current) => ({ ...current, style }));
    persistMedicalDisplayPreference("medical-style", style);
  }, []);
  const setLayout = useCallback((layout: MedicalLayoutMode) => {
    setPreferences((current) => ({ ...current, layout }));
    persistMedicalDisplayPreference("medical-layout", layout);
  }, []);
  return { ...preferences, setStyle, setLayout };
}
