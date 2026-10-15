/**
 * RadioButton examples based on the supplied Specs 2 YAML.
 *
 * Purpose:
 * - Show the AI coding agent how to use the RadioButton component.
 * - Preserve the prop names and values from the Figma spec.
 *
 * Important:
 * - Replace the import path with the actual RadioButton implementation in your project.
 * - These examples assume RadioButton accepts a `State` prop with values:
 *   Active | Active-hover | Disabled | Hover | Default
 * - The inner circle (Frame) is only visible in Active / Active-hover states.
 * - Disabled state uses opacity: 0.3 on the root.
 */
import { RadioButton } from "../components/RadioButton";

export function RadioButtonExamples() {
  return (
    <main>
      <section aria-labelledby="RadioButton-states">
        <h2 id="RadioButton-states">RadioButton states</h2>

        <RadioButton State="Default" aria-label="Option default" />
        <RadioButton State="Hover" aria-label="Option hover" />
        <RadioButton State="Active" aria-label="Option active" />
        <RadioButton State="Active-hover" aria-label="Option active hover" />
        <RadioButton State="Disabled" aria-label="Option disabled" disabled />
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

export function RadioButtonInteractionExamples() {
  const [selected, setSelected] = useState<"a" | "b" | null>("a");

  return (
    <section aria-labelledby="RadioButton-interactions">
      <h2 id="RadioButton-interactions">Interaction examples</h2>

      <RadioButton
        State={selected === "a" ? "Active" : "Default"}
        onClick={() => setSelected("a")}
        aria-label="Option A"
      />
      <RadioButton
        State={selected === "b" ? "Active" : "Default"}
        onClick={() => setSelected("b")}
        aria-label="Option B"
      />
      <RadioButton State="Disabled" disabled aria-label="Unavailable option" />
    </section>
  );
}
