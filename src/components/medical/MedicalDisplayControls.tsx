import {
  medicalStyles,
  type MedicalStyleId,
  type MedicalLayoutMode,
} from "../../data/medical/presentation";
export type DisplayProps = {
  style?: MedicalStyleId;
  layout?: MedicalLayoutMode;
  onStyleChange?: (style: MedicalStyleId) => void;
  onLayoutChange?: (layout: MedicalLayoutMode) => void;
};
export function MedicalDisplayControls({
  style = "notebook",
  layout = "full-page",
  onStyleChange,
  onLayoutChange,
}: DisplayProps) {
  return (
    <div className="medical-display-controls">
      <label>
        <span>Style</span>
        <select
          aria-label="Portfolio style"
          data-testid="medical-display-style"
          value={style}
          onChange={(e) => onStyleChange?.(e.target.value as MedicalStyleId)}
        >
          {medicalStyles.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>View</span>
        <select
          aria-label="Portfolio view"
          data-testid="medical-display-layout"
          value={layout}
          onChange={(e) =>
            onLayoutChange?.(e.target.value as MedicalLayoutMode)
          }
        >
          <option value="full-page">Full page</option>
          <option value="section">Sections</option>
        </select>
      </label>
    </div>
  );
}
