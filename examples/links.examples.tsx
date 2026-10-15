/**
 * Links examples based on the supplied Specs 2 YAML.
 *
 * Purpose:
 * - Show the AI coding agent how to use the Links component.
 * - Preserve the prop names and values from the Figma spec.
 *
 * Important:
 * - Replace the import path with the actual Links implementation in your project.
 * - Props from the YAML:
 *   - State: Default | Hover
 *   - Size: S | M | L
 * - Default: State="Default", Size="S"
 * - Always underlined.
 * - Hover changes text color to a brighter mint.
 */
import { Links } from "../components/Links";

export function LinksExamples() {
  return (
    <main>
      <section aria-labelledby="links-sizes">
        <h2 id="links-sizes">Link sizes</h2>

        <Links State="Default" Size="S" href="#">
          Link
        </Links>
        <Links State="Default" Size="M" href="#">
          Link
        </Links>
        <Links State="Default" Size="L" href="#">
          Link
        </Links>
      </section>

      <section aria-labelledby="links-hover">
        <h2 id="links-hover">Hover state</h2>

        <Links State="Hover" Size="S" href="#">
          Link
        </Links>
        <Links State="Hover" Size="M" href="#">
          Link
        </Links>
        <Links State="Hover" Size="L" href="#">
          Link
        </Links>
      </section>
    </main>
  );
}

/**
 * Interactive example (State="Hover" is normally handled by CSS :hover).
 */
export function LinksInteractionExamples() {
  return (
    <section aria-labelledby="links-interactions">
      <h2 id="links-interactions">Real usage</h2>

      <Links State="Default" Size="M" href="/docs">
        Documentation
      </Links>
      <Links State="Default" Size="M" href="/support">
        Support
      </Links>
    </section>
  );
}
