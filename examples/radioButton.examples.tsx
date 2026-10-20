/**
 * RadioButton examples based on the Specs 2 YAML (token-based).
 *
 * Props:
 *   - State: Active | Disabled | Default
 *   - Interaction: Default | Hover
 */
import { RadioButton } from "./RadioButton";

export function RadioButtonExamples() {
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
          <Example label="Active">
            <RadioButton State="Active" Interaction="Default" />
          </Example>

          <Example label="Default">
            <RadioButton State="Default" Interaction="Default" />
          </Example>

          <Example label="Disabled">
            <RadioButton State="Disabled" Interaction="Default" />
          </Example>
        </div>
      </section>

      <section>
        <h3>Hover states</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Example label="Active hover">
            <RadioButton State="Active" Interaction="Hover" />
          </Example>

          <Example label="Default hover">
            <RadioButton State="Default" Interaction="Hover" />
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
