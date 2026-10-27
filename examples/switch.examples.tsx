/**
 * Switch examples based on the Specs 2 YAML (token-based).
 *
 * Purpose:
 * - Show how to use the Switch component.
 * - Preserve the prop names and values from the Figma spec.
 *
 * Props from the YAML:
 *   - State: Default | Active | Disabled
 *   - Interaction: Default | Hover
 *
 * Notes:
 * - Default = off (thumb at start, primary border + primary thumb).
 * - Active = on (thumb at end, secondary-bg track).
 * - Active + Hover adds a green glow and lighter thumb.
 * - Disabled changes the thumb to secondary color; interaction is blocked.
 * - All colors, spacing, and radii resolve via design tokens.
 */
import { Switch } from "./Switch";

export function SwitchExamples() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        padding: 24,
        background: "var(--semantic-color-background-primary-bg, #0B1819)",
        color: "var(--semantic-color-text-primary-text, #E8F4F0)",
        fontFamily: "var(--semantic-typography-font-family-primary, Chirp), sans-serif",
      }}
    >
      <section>
        <h3>States</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Example label="Default (off)">
            <Switch State="Default" Interaction="Default" />
          </Example>
          <Example label="Active (on)">
            <Switch State="Active" Interaction="Default" />
          </Example>
          <Example label="Disabled">
            <Switch State="Disabled" Interaction="Default" />
          </Example>
        </div>
      </section>
      <section>
        <h3>Hover states</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Example label="Active + Hover">
            <Switch State="Active" Interaction="Hover" />
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
      <span
        style={{
          fontSize: 14,
          color: "var(--semantic-color-text-secondary-text, #C2D4CD)",
        }}
      >
        {label}
      </span>
      {children}
    </div>
  );
}
