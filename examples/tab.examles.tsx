/**
 * Tab examples based on the supplied Specs 2 YAML.
 *
 * Purpose:
 * - Show the AI coding agent how to use the Tab component.
 * - Preserve the prop names and values from the Figma spec.
 *
 * Important:
 * - Replace the import path with the actual Tab implementation in your project.
 * - Props from the YAML:
 *   - State: Active | Non-active
 *   - Size: 2XL | XL | L | M | S
 *   - Interaction: Default | Hover
 * - Default values: State="Active", Size="2XL", Interaction="Default"
 * - Hover styles change background and text color.
 * - Non-active has a darker background and muted text color.
 */
import { Tab } from "../components/Tab";

export function TabExamples() {
  return (
    <main>
      <section aria-labelledby="tab-active">
        <h2 id="tab-active">Active tabs (different sizes)</h2>
        <Tab State="Active" Size="2XL" Interaction="Default">
          Tab
        </Tab>
        <Tab State="Active" Size="XL" Interaction="Default">
          Tab
        </Tab>
        <Tab State="Active" Size="L" Interaction="Default">
          Tab
        </Tab>
        <Tab State="Active" Size="M" Interaction="Default">
          Tab
        </Tab>
        <Tab State="Active" Size="S" Interaction="Default">
          Tab
        </Tab>
      </section>

      <section aria-labelledby="tab-non-active">
        <h2 id="tab-non-active">Non-active tabs</h2>
        <Tab State="Non-active" Size="2XL" Interaction="Default">
          Tab
        </Tab>
        <Tab State="Non-active" Size="M" Interaction="Default">
          Tab
        </Tab>
      </section>

      <section aria-labelledby="tab-hover">
        <h2 id="tab-hover">Hover states</h2>
        <Tab State="Active" Size="2XL" Interaction="Hover">
          Tab
        </Tab>
        <Tab State="Non-active" Size="2XL" Interaction="Hover">
          Tab
        </Tab>
      </section>
    </main>
  );
}

/**
 * Interactive example with controlled active tab.
 */
import { useState } from "react";

export function TabInteractionExamples() {
  const [activeTab, setActiveTab] = useState<"overview" | "details" | "settings">("overview");

  return (
    <section aria-labelledby="tab-interactions">
      <h2 id="tab-interactions">Interaction examples</h2>

      <div role="tablist">
        <Tab
          State={activeTab === "overview" ? "Active" : "Non-active"}
          Size="L"
          Interaction="Default"
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </Tab>
        <Tab
          State={activeTab === "details" ? "Active" : "Non-active"}
          Size="L"
          Interaction="Default"
          onClick={() => setActiveTab("details")}
        >
          Details
        </Tab>
        <Tab
          State={activeTab === "settings" ? "Active" : "Non-active"}
          Size="L"
          Interaction="Default"
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </Tab>
      </div>
    </section>
  );
}
