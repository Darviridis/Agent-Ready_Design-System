
 */
import { Links } from "../components/Links";

export function LinksExamples() {
  return (
    <main>
      <section aria-labelledby="links-sizes">
        <h2 id="links-sizes">Link sizes</h2>

        <Links State="Default" Size="sm" href="#">
          Link
        </Links>
        <Links State="Default" Size="md" href="#">
          Link
        </Links>
        <Links State="Default" Size="lg" href="#">
          Link
        </Links>
      </section>

      <section aria-labelledby="links-hover">
        <h2 id="links-hover">Hover state</h2>

        <Links State="Hover" Size="sm" href="#">
          Link
        </Links>
        <Links State="Hover" Size="md" href="#">
          Link
        </Links>
        <Links State="Hover" Size="lg" href="#">
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

      <Links State="Default" Size="md" href="/docs">
        Documentation
      </Links>
      <Links State="Default" Size="md" href="/support">
        Support
      </Links>
    </section>
  );
}
