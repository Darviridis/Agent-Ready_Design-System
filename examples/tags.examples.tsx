/**
 * Tags examples based on the supplied Specs 2 YAML.
 *
 * Purpose:
 * - Show the AI coding agent how to use the Tags component.
 * - Preserve the prop names and values from the Figma spec.
 *
 * Important:
 * - Replace the import path with the actual Tags implementation in your project.
 * - Props from the YAML:
 *   - Size: small | big
 *   - Type: square | oval
 * - Default: Size="small", Type="square"
 * - square → shows "Native" text
 * - oval → shows "Verified" text, rounded pill style with stroke
 * - The content is fixed in the design system ("Native" / "Verified").
 *   In real usage you will probably pass children or a label prop.
 */
import { Tags } from "../components/Tags";

export function TagsExamples() {
  return (
    <main>
      <section aria-labelledby="tags-square">
        <h2 id="tags-square">Square tags</h2>
        <Tags Size="small" Type="square">
          Native
        </Tags>
        <Tags Size="big" Type="square">
          Native
        </Tags>
      </section>

      <section aria-labelledby="tags-oval">
        <h2 id="tags-oval">Oval (Verified) tags</h2>
        <Tags Size="small" Type="oval">
          Verified
        </Tags>
        <Tags Size="big" Type="oval">
          Verified
        </Tags>
      </section>
    </main>
  );
}
