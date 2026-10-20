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
 *   - State: Default | Default | Active | Disabled
 *   - Interaction | Default | Hover |
 * - Default state has a dark background + border.
 * - Active states show the check instance and change background to mint green.
 * - Active-disabled uses opacity: 0.5.
 * - Disabled (unchecked) removes the background.
 */
import { Checkbox } from "./Checkbox";

export function CheckboxExamples() {
return (
<div
style={{
display: "flex",
flexDirection: "column",
gap: 24,
padding: 24,
background: "#0B1819",
color: "#D1DEDF",
fontFamily: "Inter, sans-serif",
}}
> <section> <h3>States</h3>
<div style={{ display: "flex", alignItems: "center", gap: 24 }}> <Example label="Default"> <Checkbox State="Default" Interaction="Default" /> </Example>

```
      <Example label="Active">
        <Checkbox State="Active" Interaction="Default" />
      </Example>

      <Example label="Disabled">
        <Checkbox State="Disabled" Interaction="Default" />
      </Example>
    </div>
  </section>

  <section>
    <h3>Hover states</h3>
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <Example label="Default hover">
        <Checkbox State="Default" Interaction="Hover" />
      </Example>

      <Example label="Active hover">
        <Checkbox State="Active" Interaction="Hover" />
      </Example>
    </div>
  </section>
</div>
```


