/**
 * Checkbox examples based on the Specs 2 YAML (token-based).
 *
 * Purpose:
 * - Show how to use the Checkbox component.
 * - Preserve the prop names and values from the Figma spec.
 *
 * Props from the YAML:
 *   - State: Default | Active | Disabled
 *   - Interaction: Default | Hover
 *
 * Notes:
 * - Default state uses tertiary background + secondary stroke.
 * - Active states show the check instance and primary background.
 * - Active + Hover adds a glow effect.
 * - Disabled unsets the background.
 */
import { Checkbox } from "./Checkbox";

export function CheckboxExamples() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        padding: 24,
        background: "var(--semantic-color-background-primary-bg, #0B1819)",
        color: "var(--semantic-color-text-primary-text, #D1DEDF)",
        fontFamily: "var(--semantic-typography-font-family-primary, Chirp), sans-serif",
      }}
    >
      <section>
        <h3>States</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Example label="Default">
            <Checkbox State="Default" Interaction="Default" />
          </Example>

          <Example label="Active">
            <Checkbox State="Active" Interaction="Default" />
          </Example>

          <Example label="Disabled">
            <Checkbox State="Disabled" Interaction="Default" />
          </Example>
        </div>
      </section>

      <section>
        <h3>Hover states</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Example label="Default hover">
            <Checkbox State="Default" Interaction="Hover" />
          </Example>

          <Example label="Active hover">
            <Checkbox State="Active" Interaction="Hover" />
          </Example>
        </div>
      </section>
    </div>
  );
}

function Example({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{ fontSize: 14, color: "var(--semantic-color-text-secondary-text, #C2D4CD)" }}>
        {label}
      </span>
      {children}
    </div>
  );
}
