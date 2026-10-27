/**
 * Dropdown examples based on the Specs 2 YAML (token-based).
 *
 * Purpose:
 * - Show how to use the Dropdown component.
 * - Preserve the prop names and values from the Figma spec.
 *
 * Props from the YAML:
 *   - State: Default | Hover | Open | Disabled
 *
 * Notes:
 * - Default / Hover / Disabled are closed states (chevron-down).
 * - Open shows the options-list with SelectItem instances and chevron-up.
 * - Label is optional; Selected value reflects the current selection.
 * - All colors, spacing, and radii resolve via design tokens.
 */
import { Dropdown } from "./Dropdown";
import { SelectItem } from "./SelectItem";

export function DropdownExamples() {
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
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Example label="Default (closed)">
            <Dropdown State="Default" />
          </Example>
          <Example label="Hover (closed)">
            <Dropdown State="Hover" />
          </Example>
          <Example label="Open">
            <Dropdown State="Open">
              <SelectItem State="Default">Option 1</SelectItem>
              <SelectItem State="Hover">Option 2</SelectItem>
              <SelectItem State="Selected">Option 3</SelectItem>
              <SelectItem State="Disabled">Option 4</SelectItem>
            </Dropdown>
          </Example>
          <Example label="Disabled">
            <Dropdown State="Disabled" />
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
    <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 320 }}>
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
