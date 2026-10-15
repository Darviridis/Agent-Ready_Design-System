# AGENTS.md

## 1. Project Overview

This repository contains a design system used to generate consistent, working user interfaces from Figma designs.

The goal is to reproduce existing designs accurately while reusing documented components, design tokens, and assets.

## 2. Source of Truth

* **Figma** is the source of truth for visual appearance, layout, spacing, typography, colors, and component variants.
* **Component YAML files** define component metadata, properties, states, defaults, and supported variants.
* **Design tokens** define reusable design values.
* **This file** defines AI implementation rules.

If information is missing or contradictory, identify the conflict instead of inventing a new design decision.

## 3. Project Structure

Use the following files when they exist:

* `llms.txt` — index of project documentation.
* `component.schema.json` — schema for validating component metadata.
* `components/` — YAML component definitions.
* `tokens/tokens.json` — design token definitions.
* `assets/` — icons and other visual assets.
* `examples/` — implementation examples.

Do not assume that a file exists without checking the project.

## 4. Component Rules

* Inspect existing component definitions before creating new components.
* Reuse existing components whenever possible.
* Follow the documented properties, types, defaults, variants, and states.
* Do not invent unsupported component properties or variants.
* Preserve component names and property names unless a change is explicitly requested.
* Use semantic properties such as `variant="primary"` instead of arbitrary visual values when supported by the component API.
* Do not create duplicate components for elements that can use an existing component.
* Keep component responsibilities clear and reusable.

## 5. Design Token Rules

* Check existing tokens before introducing new design values.
* Reuse available color, typography, spacing, radius, and shadow tokens.
* Do not replace existing tokens with hardcoded values.
* Do not invent colors, font sizes, spacing, or other visual values when the design or tokens already define them.
* If a required token is missing, identify the gap and propose a consistent addition.
* Preserve the relationships between semantic tokens and their underlying values.

## 6. Figma Design Accuracy

When implementing a Figma design:

* Match the original layout, alignment, spacing, dimensions, and hierarchy.
* Preserve typography, colors, borders, radii, shadows, and component states.
* Use existing icons and assets instead of approximating them with text or emoji.
* Respect Auto Layout behavior and responsive constraints where available.
* Do not redesign, simplify, or add visual elements without permission.
* Use the provided Figma design as the visual reference.

## 7. Code Quality

* Inspect the existing codebase and identify its framework before making changes.
* Follow the project's existing architecture, naming conventions, and coding style.
* Reuse existing dependencies and utilities.
* Do not introduce unnecessary libraries or configuration files.
* Keep code modular, readable, and maintainable.
* Implement functional interactions, not just static visual mockups.
* Include appropriate loading, disabled, empty, and error states when required by the design.

## 8. Accessibility

* Use semantic HTML elements.
* Provide accessible names for interactive controls.
* Ensure interactive elements support keyboard navigation.
* Use appropriate ARIA attributes when necessary.
* Do not communicate important information through color alone.
* Preserve visible focus indicators.

## 9. Validation

After implementing a screen or component:

* Check for errors and missing dependencies.
* Run the project's existing validation or build commands when available.
* Compare the implementation with the original Figma design.
* Check component states, spacing, typography, and responsive behavior.
* Fix obvious visual and functional inconsistencies before considering the task complete.

Do not claim that a build or test passed unless it was actually run successfully.

## 10. Working Process

For each task:

1. Inspect the relevant Figma design and project files.
2. Identify reusable components, tokens, and assets.
3. Implement the requested interface using the existing design system.
4. Validate functionality and visual accuracy.
5. Report what was implemented and identify any missing information or unresolved issues.

**Priority:** Accurate design reproduction, reuse of existing components, functional code, and minimal unnecessary changes.
