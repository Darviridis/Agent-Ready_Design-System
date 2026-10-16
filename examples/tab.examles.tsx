import { Tab } from "./Tab";

export function TabExamples() {
return (
<div
style={{
display: "flex",
flexDirection: "column",
gap: 24,
padding: 24,
background: "#0B1819",
}}
>
{/* States */} <section>
<h3 style={{ color: "#E8F4F0" }}>States</h3>

```
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      <Tab State="Active" Size="2xl" Interaction="Default" />
      <Tab State="Inactive" Size="2xl" Interaction="Default" />
    </div>
  </section>

  {/* Hover states */}
  <section>
    <h3 style={{ color: "#E8F4F0" }}>Hover states</h3>

    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      <Tab State="Active" Size="2xl" Interaction="Hover" />
      <Tab State="Inactive" Size="2xl" Interaction="Hover" />
    </div>
  </section>

  {/* Sizes */}
  <section>
    <h3 style={{ color: "#E8F4F0" }}>Sizes</h3>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <Tab State="Active" Size="2xl" Interaction="Default" />
      <Tab State="Active" Size="xl" Interaction="Default" />
      <Tab State="Active" Size="lg" Interaction="Default" />
      <Tab State="Active" Size="md" Interaction="Default" />
      <Tab State="Active" Size="sm" Interaction="Default" />
    </div>
  </section>

  {/* Inactive sizes */}
  <section>
    <h3 style={{ color: "#E8F4F0" }}>Inactive sizes</h3>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <Tab State="Inactive" Size="2xl" Interaction="Default" />
      <Tab State="Inactive" Size="xl" Interaction="Default" />
      <Tab State="Inactive" Size="lg" Interaction="Default" />
      <Tab State="Inactive" Size="md" Interaction="Default" />
      <Tab State="Inactive" Size="sm" Interaction="Default" />
    </div>
  </section>
</div>
```

);
}
