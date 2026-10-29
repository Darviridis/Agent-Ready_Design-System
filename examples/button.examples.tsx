/**
 * Button examples based on the Specs 2 YAML (token-based).
 *
 * Props from the YAML:
 *   - State: Default | Disabled | Loading | Waiting
 *   - Variant: Primary | Secondary | Icon
 *   - Interaction: Default | Hover
 *   - Size: lg | md
 *   - Instance: name of an icon from Assets/Icons (default "close").
 *     Only used with Variant="Icon". Icon hover changes only the icon
 *     color (Interaction="Hover"). The list is open: any icon from
 *     Assets/Icons is valid, new icons are added to ICONS below.
 */
import { useState } from "react";
import { Button } from "./Button";

/**
 * Icons used in the examples. `name` is the value passed to the Instance prop,
 * `label` is the accessible name for that icon. Add new icons from
 * Assets/Icons here, no changes to the Button itself are needed.
 */
const ICONS = [
  { name: "close", label: "Close" },
  { name: "arrow-left", label: "Back" },
];

export function ButtonExamples() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 32,
        padding: 24,
        background: "var(--semantic-color-background-primary-bg, #0B1819)",
        color: "var(--semantic-color-text-primary-text, #D1DEDF)",
        fontFamily: "var(--semantic-typography-font-family-primary, Chirp), sans-serif",
      }}
    >
      <section>
        <h3>Primary</h3>
        <div style={rowStyle}>
          <Example label="Default">
            <Button
              State="Default"
              Variant="Primary"
              Interaction="Default"
              Size="lg"
            />
          </Example>

          <Example label="Hover">
            <Button
              State="Default"
              Variant="Primary"
              Interaction="Hover"
              Size="lg"
            />
          </Example>

          <Example label="Disabled">
            <Button
              State="Disabled"
              Variant="Primary"
              Interaction="Default"
              Size="lg"
            />
          </Example>
        </div>
      </section>

      <section>
        <h3>Secondary</h3>
        <div style={rowStyle}>
          <Example label="Default">
            <Button
              State="Default"
              Variant="Secondary"
              Interaction="Default"
              Size="lg"
            />
          </Example>

          <Example label="Hover">
            <Button
              State="Default"
              Variant="Secondary"
              Interaction="Hover"
              Size="lg"
            />
          </Example>
        </div>
      </section>

      <section>
        <h3>Sizes</h3>
        <div style={rowStyle}>
          <Example label="Large">
            <Button
              State="Default"
              Variant="Primary"
              Interaction="Default"
              Size="lg"
            />
          </Example>

          <Example label="Medium">
            <Button
              State="Default"
              Variant="Primary"
              Interaction="Default"
              Size="md"
            />
          </Example>
        </div>
      </section>

      <section>
        <h3>Loading and waiting</h3>
        <div style={rowStyle}>
          <Example label="Loading">
            <Button
              State="Loading"
              Variant="Primary"
              Interaction="Default"
              Size="lg"
            />
          </Example>

          <Example label="Loading secondary">
            <Button
              State="Loading"
              Variant="Secondary"
              Interaction="Default"
              Size="lg"
            />
          </Example>

          <Example label="Waiting">
            <Button
              State="Waiting"
              Variant="Primary"
              Interaction="Default"
              Size="lg"
            />
          </Example>
        </div>
      </section>

      <section>
        <h3>Icon</h3>
        <p style={noteStyle}>
          The icon is swappable. The Instance prop takes any icon name from
          Assets/Icons (default: close). Button size, padding and colors stay
          the same, only the icon changes.
        </p>

        <h4 style={subheadingStyle}>Same button, different icons (lg)</h4>
        <div style={rowStyle}>
          {ICONS.map((icon) => (
            <Example key={icon.name} label={`Instance="${icon.name}"`}>
              <Button
                State="Default"
                Variant="Icon"
                Interaction="Default"
                Size="lg"
                Instance={icon.name}
                aria-label={icon.label}
              />
            </Example>
          ))}
        </div>

        <h4 style={subheadingStyle}>Same button, different icons (md)</h4>
        <div style={rowStyle}>
          {ICONS.map((icon) => (
            <Example key={icon.name} label={`Instance="${icon.name}"`}>
              <Button
                State="Default"
                Variant="Icon"
                Interaction="Default"
                Size="md"
                Instance={icon.name}
                aria-label={icon.label}
              />
            </Example>
          ))}
        </div>

        <h4 style={subheadingStyle}>Default icon (no Instance passed)</h4>
        <div style={rowStyle}>
          <Example label="Instance omitted → close">
            <Button
              State="Default"
              Variant="Icon"
              Interaction="Default"
              Size="lg"
              aria-label="Close"
            />
          </Example>
        </div>

        <h4 style={subheadingStyle}>Hover (only the icon color changes)</h4>
        <p style={noteStyle}>
          On hover the icon takes the icon hover color. Nothing else changes:
          no background, size, or shape change. It works the same for every
          icon and both sizes. Interaction="Hover" forces the hover look for
          display; in real use it comes from CSS :hover.
        </p>
        <div style={rowStyle}>
          {ICONS.map((icon) => (
            <Example key={`${icon.name}-default`} label={`${icon.name} · Default`}>
              <Button
                State="Default"
                Variant="Icon"
                Interaction="Default"
                Size="lg"
                Instance={icon.name}
                aria-label={icon.label}
              />
            </Example>
          ))}
          {ICONS.map((icon) => (
            <Example key={`${icon.name}-hover`} label={`${icon.name} · Hover`}>
              <Button
                State="Default"
                Variant="Icon"
                Interaction="Hover"
                Size="lg"
                Instance={icon.name}
                aria-label={icon.label}
              />
            </Example>
          ))}
        </div>

        <h4 style={subheadingStyle}>Try swapping</h4>
        <IconSwapDemo />
      </section>
    </div>
  );
}

/**
 * Interactive demo: pick an icon and see it replaced in the same button.
 * Note that the accessible name changes together with the icon.
 */
function IconSwapDemo() {
  const [selected, setSelected] = useState(ICONS[0]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
      <Button
        State="Default"
        Variant="Icon"
        Interaction="Default"
        Size="lg"
        Instance={selected.name}
        aria-label={selected.label}
      />

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }} role="group" aria-label="Choose icon">
        {ICONS.map((icon) => (
          <button
            key={icon.name}
            type="button"
            onClick={() => setSelected(icon)}
            aria-pressed={selected.name === icon.name}
            style={{
              ...pickerStyle,
              borderColor:
                selected.name === icon.name
                  ? "var(--semantic-color-text-primary-text, #D1DEDF)"
                  : "transparent",
            }}
          >
            {icon.name}
          </button>
        ))}
      </div>

      <span style={{ fontSize: 14, color: "var(--semantic-color-text-secondary-text, #C2D4CD)" }}>
        Instance="{selected.name}"
      </span>
    </div>
  );
}

const rowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 24,
};

const noteStyle: React.CSSProperties = {
  margin: "0 0 16px",
  fontSize: 14,
  color: "var(--semantic-color-text-secondary-text, #C2D4CD)",
};

const subheadingStyle: React.CSSProperties = {
  margin: "16px 0 8px",
  fontSize: 14,
  fontWeight: 500,
};

const pickerStyle: React.CSSProperties = {
  padding: "6px 12px",
  borderRadius: 8,
  border: "1px solid transparent",
  background: "transparent",
  color: "inherit",
  font: "inherit",
  fontSize: 14,
  cursor: "pointer",
};

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
