/**
 * Link examples based on the Specs 2 YAML (token-based).
 *
 * Props:
 *   - State: Default | Hover
 *   - Size: sm | md | lg
 */
import { Link } from "./Link";

export function LinkExamples() {
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
      <section aria-labelledby="links-sizes">
        <h2 id="links-sizes">Link sizes</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Link State="Default" Size="sm" href="#">
            Link
          </Link>
          <Link State="Default" Size="md" href="#">
            Link
          </Link>
          <Link State="Default" Size="lg" href="#">
            Link
          </Link>
        </div>
      </section>

      <section aria-labelledby="links-hover">
        <h2 id="links-hover">Hover state</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Link State="Hover" Size="sm" href="#">
            Link
          </Link>
          <Link State="Hover" Size="md" href="#">
            Link
          </Link>
          <Link State="Hover" Size="lg" href="#">
            Link
          </Link>
        </div>
      </section>
    </main>
  );
}

/**
 * Interactive example (State="Hover" is normally handled by CSS :hover).
 */
export function LinkInteractionExamples() {
  return (
    <section
      aria-labelledby="links-interactions"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: 24,
        background: "var(--semantic-color-background-primary-bg, #0B1819)",
        color: "var(--semantic-color-text-primary-text, #D1DEDF)",
        fontFamily: "var(--semantic-typography-font-family-primary, Chirp), sans-serif",
      }}
    >
      <h2 id="links-interactions">Real usage</h2>

      <Link State="Default" Size="md" href="/docs">
        Documentation
      </Link>
      <Link State="Default" Size="md" href="/support">
        Support
      </Link>
    </section>
  );
}
