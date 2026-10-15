/**
 * Radiobutton examples based on the supplied Specs 2 YAML.
 *
 * Purpose:
 * - Show the AI coding agent how to use the Radiobutton component.
 * - Preserve the prop names and values from the Figma spec.
 *
 * Important:
 * - Replace the import path with the actual Radiobutton implementation in your project.
 * - These examples assume Radiobutton accepts a `State` prop with values:
 *   Active | Active-hover | Disabled | Hover | Default
 * - The inner circle (Frame) is only visible in Active / Active-hover states.
 * - Disabled state uses opacity: 0.3 on the root.
 */
import { Radiobutton } from "../components/Radiobutton";

export function RadiobuttonExamples() {
  return (
    <main>
      <section aria-labelledby="radiobutton-states">
        <h2 id="radiobutton-states">Radiobutton states</h2>

        <Radiobutton State="Default" aria-label="Option default" />
        <Radiobutton State="Hover" aria-label="Option hover" />
        <Radiobutton State="Active" aria-label="Option active" />
        <Radiobutton State="Active-hover" aria-label="Option active hover" />
        <Radiobutton State="Disabled" aria-label="Option disabled" disabled />
      </section>
    </main>
  );
}

/**
 * Interactive example:
 * State should normally be driven by component logic / form state
 * rather than manually setting Hover or Active-hover.
 */
import { useState } from "react";

export function RadiobuttonInteractionExamples() {
  const [selected, setSelected] = useState<"a" | "b" | null>("a");

  return (
    <section aria-labelledby="radiobutton-interactions">
      <h2 id="radiobutton-interactions">Interaction examples</h2>

      <Radiobutton
        State={selected === "a" ? "Active" : "Default"}
        onClick={() => setSelected("a")}
        aria-label="Option A"
      />
      <Radiobutton
        State={selected === "b" ? "Active" : "Default"}
        onClick={() => setSelected("b")}
        aria-label="Option B"
      />
      <Radiobutton State="Disabled" disabled aria-label="Unavailable option" />
    </section>
  );
}
