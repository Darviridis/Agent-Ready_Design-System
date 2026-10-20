/**
 * Button examples based on the Specs 2 YAML (token-based).
 *
 * Props from the YAML:
 *   - State: Default | Disabled | Loading | Waiting
 *   - Variant: Primary | Secondary | Icon
 *   - Interaction: Default | Hover
 *   - Size: lg | md
 *   - Instance: (e.g. "icon")
 */
import { Button } from "./Button";

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
        <div style={rowStyle}>
          <Example label="Large">
            <Button
              State="Default"
              Variant="Icon"
              Interaction="Default"
              Size="lg"
              Instance="icon"
              aria-label="Icon action"
            />
          </Example>

          <Example label="Medium">
            <Button
              State="Default"
              Variant="Icon"
              Interaction="Default"
              Size="md"
              Instance="icon"
              aria-label="Icon action"
            />
          </Example>
        </div>
      </section>
    </div>
  );
}

const rowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 24,
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
