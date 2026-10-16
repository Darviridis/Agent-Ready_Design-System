import { RadioButton } from "./RadioButton";

export function RadioButtonExamples() {
return (
<div
style={{
display: "flex",
flexDirection: "column",
gap: 24,
padding: 24,
background: "#0B1819",
}}
> <section> <h3>States</h3>
<div style={{ display: "flex", alignItems: "center", gap: 24 }}> <Example label="Active"> <RadioButton State="Active" Interaction="Default" /> </Example>

```
      <Example label="Default">
        <RadioButton State="Default" Interaction="Default" />
      </Example>

      <Example label="Disabled">
        <RadioButton State="Disabled" Interaction="Default" />
      </Example>
    </div>
  </section>

  <section>
    <h3>Hover states</h3>
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <Example label="Active hover">
        <RadioButton State="Active" Interaction="Hover" />
      </Example>

      <Example label="Default hover">
        <RadioButton State="Default" Interaction="Hover" />
      </Example>
    </div>
  </section>
</div>
```

