/**
 * SelectItem examples based on the Specs 2 YAML (token-based).
 *
 * Purpose:
 * - Show how to use the SelectItem component (option row inside Dropdown).
 * - Preserve the prop names and values from the Figma spec.
 *
 * Props from the YAML:
 *   - State: Default | Hover | Selected | Disabled
 *
 * Notes:
 * - Default uses secondary background + secondary text.
 * - Hover / Selected use secondary-hover background + primary text.
 * - Selected adds a primary border.
 * - Disabled uses secondary-bg, tertiary text, and reduced opacity.
 * - Intended to be composed inside a Dropdown options-list.
 */
import { SelectItem } from "./SelectItem";

export function SelectItemExamples() {
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            width: 308,
            padding: 16,
            borderRadius: "var(--semantic-radius-md, 12px)",
            background: "var(--semantic-color-background-secondary-bg, #1F2C2A)",
          }}
        >
          <Example label="Default">
            <SelectItem State="Default">Option label</SelectItem>
          </Example>
          <Example label="Hover">
            <SelectItem State="Hover">Option label</SelectItem>
          </Example>
          <Example label="Selected">
            <SelectItem State="Selected">Option label</SelectItem>
          </Example>
          <Example label="Disabled">
            <SelectItem State="Disabled">Option label</SelectItem>
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
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <span
        style={{
          fontSize: 12,
          color: "var(--semantic-color-text-tertiary-text, #A0ADAA)",
        }}
      >
        {label}
      </span>
      {children}
    </div>
  );
}
