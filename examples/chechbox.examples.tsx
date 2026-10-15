/**
 * Checkbox examples based on the supplied Specs 2 YAML.
 *
 * Purpose:
 * - Show the AI coding agent how to use the Checkbox component.
 * - Preserve the prop names and values from the Figma spec.
 *
 * Important:
 * - Replace the import path with the actual Checkbox implementation in your project.
 * - Prop from the YAML:
 *   - State: Default | Hover | Active | Active-disabled | Active-hover | Disabled
 * - Default state has a dark background + border.
 * - Active states show the check instance and change background to mint green.
 * - Active-disabled uses opacity: 0.5.
 * - Disabled (unchecked) removes the background.
 */
import { Checkbox } from "../components/Checkbox";

export function CheckboxExamples() {
  return (
    <main>
      <section aria-labelledby="checkbox-states">
        <h2 id="checkbox-states">Checkbox states</h2>

        <Checkbox State="Default" aria-label="Unchecked" />
        <Checkbox State="Hover" aria-label="Unchecked hover" />
        <Checkbox State="Active" aria-label="Checked" />
        <Checkbox State="Active-hover" aria-label="Checked hover" />
        <Checkbox State="Active-disabled" aria-label="Checked disabled" disabled />
        <Checkbox State="Disabled" aria-label="Unchecked disabled" disabled />
      </section>
    </main>
  );
}

/**
 * Interactive example.
 * Prefer controlling checked state via form logic instead of manually
 * setting Hover / Active-hover.
 */
import { useState } from "react";

export function CheckboxInteractionExamples() {
  const [checked, setChecked] = useState(false);
  const [disabledChecked, setDisabledChecked] = useState(true);

  return (
    <section aria-labelledby="checkbox-interactions">
      <h2 id="checkbox-interactions">Interaction examples</h2>

      <Checkbox
        State={checked ? "Active" : "Default"}
        onClick={() => setChecked((v) => !v)}
        aria-label="Accept terms"
      />

      <Checkbox
        State={disabledChecked ? "Active-disabled" : "Disabled"}
        disabled
        aria-label="Locked option"
      />
    </section>
  );
}
