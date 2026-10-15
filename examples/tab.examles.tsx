/**

* Tab examples based on components/tab.yaml.
*
* Props:
* * Type: Active | Inactive
* * Size: 2xl | xl | lg | md | sm
* * State: Default | Hover
*
* Defaults:
* * Type="Active"
* * Size="2xl"
* * State="Default"
*
* Type controls selection appearance.
* Size controls typography and padding.
* State controls the hover appearance.
  */

import { useState } from "react";
import { Tab } from "../components/Tab";

export function TabExamples() {
return ( <main> <section aria-labelledby="tab-sizes"> <h2 id="tab-sizes">Tab sizes</h2>

```
    <Tab Type="Active" Size="2xl" State="Default">Overview</Tab>
    <Tab Type="Active" Size="xl" State="Default">Overview</Tab>
    <Tab Type="Active" Size="lg" State="Default">Overview</Tab>
    <Tab Type="Active" Size="md" State="Default">Overview</Tab>
    <Tab Type="Active" Size="sm" State="Default">Overview</Tab>
  </section>

  <section aria-labelledby="tab-types">
    <h2 id="tab-types">Tab types</h2>

    <Tab Type="Active" Size="lg" State="Default">
      Active
    </Tab>

    <Tab Type="Inactive" Size="lg" State="Default">
      Inactive
    </Tab>
  </section>

  <section aria-labelledby="tab-hover">
    <h2 id="tab-hover">Hover states</h2>

    <Tab Type="Active" Size="lg" State="Hover">
      Active hover
    </Tab>

    <Tab Type="Inactive" Size="lg" State="Hover">
      Inactive hover
    </Tab>
  </section>
</main>
```

);
}

/**

* Interactive example with controlled tab selection.
*
* Note:
* This example assumes Tab supports onClick and forwards
* standard button or tab attributes to its underlying element.
  */

export function TabInteractionExamples() {
const [activeTab, setActiveTab] = useState<
"overview" | "details" | "settings"

> ("overview");

const tabs = [
{ id: "overview", label: "Overview" },
{ id: "details", label: "Details" },
{ id: "settings", label: "Settings" },
] as const;

return ( <section aria-labelledby="tab-interactions"> <h2 id="tab-interactions">Interactive tabs</h2>

```
  <div role="tablist" aria-label="Example sections">
    {tabs.map((tab) => {
      const isActive = activeTab === tab.id;

      return (
        <Tab
          key={tab.id}
          id={`tab-${tab.id}`}
          role="tab"
          aria-selected={isActive}
          aria-controls={`panel-${tab.id}`}
          Type={isActive ? "Active" : "Inactive"}
          Size="lg"
          State="Default"
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </Tab>
      );
    })}
  </div>

  {tabs.map((tab) => (
    <div
      key={tab.id}
      id={`panel-${tab.id}`}
      role="tabpanel"
      aria-labelledby={`tab-${tab.id}`}
      hidden={activeTab !== tab.id}
      tabIndex={0}
    >
      {tab.label} content
    </div>
  ))}
</section>
```

);
}
