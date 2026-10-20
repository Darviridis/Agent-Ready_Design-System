/**
 * Input examples based on the Specs 2 YAML (token-based).
 *
 * Props:
 *   - State: Default | Filled | Disabled | Focus | Readonly | Warning | Error
 *   - Interaction: Default | Hover
 *   - showErrorText: boolean
 */
import { Input } from "./Input";

export function InputExamples() {
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
        <h3>Basic states</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <InputExample label="Default">
            <Input
              State="Default"
              Interaction="Default"
              showErrorText={false}
            />
          </InputExample>

          <InputExample label="Filled">
            <Input
              State="Filled"
              Interaction="Default"
              showErrorText={false}
            />
          </InputExample>

          <InputExample label="Focus">
            <Input
              State="Focus"
              Interaction="Default"
              showErrorText={false}
            />
          </InputExample>

          <InputExample label="Disabled">
            <Input
              State="Disabled"
              Interaction="Default"
              showErrorText={false}
            />
          </InputExample>

          <InputExample label="Readonly">
            <Input
              State="Readonly"
              Interaction="Default"
              showErrorText={false}
            />
          </InputExample>
        </div>
      </section>

      <section>
        <h3>Interaction states</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <InputExample label="Default hover">
            <Input
              State="Default"
              Interaction="Hover"
              showErrorText={false}
            />
          </InputExample>
        </div>
      </section>

      <section>
        <h3>Validation states</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <InputExample label="Warning">
            <Input
              State="Warning"
              Interaction="Default"
              showErrorText={true}
            />
          </InputExample>

          <InputExample label="Error">
            <Input
              State="Error"
              Interaction="Default"
              showErrorText={true}
            />
          </InputExample>
        </div>
      </section>
    </div>
  );
}

function InputExample({
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
