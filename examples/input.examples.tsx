/**
 * Input examples based on the supplied Specs 2 YAML.
 *
 * Purpose:
 * - Show the AI coding agent how to use the Input component.
 * - Preserve the prop names and values from the Figma spec.
 *
 * Important:
 * - Replace the import path with the actual Input implementation in your project.
 * - Props from the YAML:
 *   - State: Empty | Hover | Filled | Disabled | Active | Read-only |
 *            Warning | Filled-hover | Error
 *   - Show Error text: boolean (default false)
 * - The component has a heading, an input frame, and optional helper/error text.
 * - Caret appears only in Active state.
 * - Warning and Error states change the border color and show specific messages.
 */
import { Input } from "../components/Input";

export function InputExamples() {
  return (
    <main>
      <section aria-labelledby="input-basic">
        <h2 id="input-basic">Basic states</h2>

        <Input State="Empty" heading="Heading" placeholder="Text" />
        <Input State="Hover" heading="Heading" placeholder="Text" />
        <Input State="Active" heading="Heading" placeholder="Text" />
        <Input State="Filled" heading="Heading" value="Entered text" />
        <Input State="Filled-hover" heading="Heading" value="Entered text" />
        <Input State="Read-only" heading="Heading" value="Entered text" readOnly />
        <Input State="Disabled" heading="Heading" placeholder="Text" disabled />
      </section>

      <section aria-labelledby="input-validation">
        <h2 id="input-validation">Validation states</h2>

        <Input
          State="Warning"
          heading="Heading"
          value="Entered text"
          helperText="Please check this value."
        />
        <Input
          State="Error"
          heading="Heading"
          value="Entered text"
          errorText="Enter a valid value."
          ShowErrorText={true}
        />
      </section>
    </main>
  );
}

/**
 * Interactive controlled input example.
 */
import { useState } from "react";

export function InputInteractionExamples() {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isEmpty = value.trim() === "";
  const isError = touched && isEmpty;

  return (
    <section aria-labelledby="input-interactions">
      <h2 id="input-interactions">Interaction examples</h2>

      <Input
        State={
          isError
            ? "Error"
            : value
            ? "Filled"
            : "Empty"
        }
        heading="Email"
        value={value}
        placeholder="Enter your email"
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setTouched(true)}
        errorText={isError ? "Enter a valid value." : undefined}
        ShowErrorText={isError}
      />
    </section>
  );
}
