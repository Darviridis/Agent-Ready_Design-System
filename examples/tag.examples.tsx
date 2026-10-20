/**
 * Tag examples based on the Specs 2 YAML (token-based).
 *
 * Props from the YAML:
 *   - Size: sm | md
 *   - Shape: oval | square
 * Default: Size="sm", Shape="square"
 * square → shows "Native" text
 * oval → shows "Verified" text, rounded pill style with stroke
 */
import { Tag } from "./Tag";

export function TagExamples() {
  return (
    <main
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
      <section aria-labelledby="tags-square">
        <h2 id="tags-square">Square tags</h2>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Tag Size="sm" Shape="square">
            Native
          </Tag>

          <Tag Size="md" Shape="square">
            Native
          </Tag>
        </div>
      </section>

      <section aria-labelledby="tags-oval">
        <h2 id="tags-oval">Oval (Verified) tags</h2>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Tag Size="sm" Shape="oval">
            Verified
          </Tag>

          <Tag Size="md" Shape="oval">
            Verified
          </Tag>
        </div>
      </section>
    </main>
  );
}
