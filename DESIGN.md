# Design System Guidelines

## 1. Purpose

This document describes the general rules for using this design system when creating or modifying user interfaces.

The design system is based on components and variables from Figma. Component specifications, design tokens, and icons are stored in this repository.

Follow the existing design system instead of creating new styles or components without a reason.

## 2. Sources of Truth

Use the following files as sources of information:

* `tokens.json` — design tokens, including colors, spacing, typography, borders, radii, and shadows.
* `components/` — component specifications, anatomy, properties, variants, states, and styles.
* `assets/icons/` — the existing icon library.
* `DESIGN.md` — general design principles and implementation rules.
* `accessibility.yaml` — WCAG 2.2 AA requirements and component-specific rules.

Do not assume that a property, component, or token exists unless it is defined in the available specifications.

If specifications conflict, identify the conflict instead of silently inventing a solution.

## 3. Design Tokens

* Use existing design tokens whenever possible.
* Do not hardcode colors, spacing, typography, radii, or shadows when an appropriate token exists.
* Reuse the same token for the same design purpose.
* Do not create duplicate tokens without a clear reason.
* If a required token is missing, report the gap and propose a consistent solution.
* Preserve the existing token naming conventions.

## 4. Components

* Reuse existing components from `components/` whenever possible.
* Follow the component anatomy and layer structure defined in its specification.
* Use only documented properties and supported values.
* Preserve existing component variants and states.
* Do not create a new component if an existing component can satisfy the requirement.
* Do not change a component's visual design without a clear requirement.
* If a component specification is incomplete, identify the missing information before making assumptions.

## 5. Component States

* Implement all states documented in the component specifications.
* Preserve the defined visual differences between states.
* Do not treat different states as separate components unless the specification requires it.
* Do not invent additional states without a clear requirement.

Examples of possible states include Default, Hover, Active, Focus, and Disabled. Use only the states applicable to each component.

## 6. Icons

* Use existing icons from `assets/icons/`.
* Prefer the icon that best matches the intended meaning.
* Preserve the original icon proportions.
* Do not replace existing icons with emoji or unrelated symbols.
* Do not create duplicate icons when a suitable asset already exists.
* Follow the icon sizing and color rules defined by the design system.
* If no suitable icon exists, report the missing asset.

## 7. Layout and Responsive Design

* Follow the layout, spacing, and sizing rules defined in the component specifications and design tokens.
* Maintain consistent alignment and spacing between related elements.
* Avoid arbitrary pixel values when existing tokens or documented layout rules apply.
* Make layouts responsive when required by the task.
* Do not assume specific breakpoints unless they are documented or provided in the task.
* Preserve the intended hierarchy and relationships between interface elements.

## 8. Accessibility

* Use semantic interface elements where applicable.
* Provide accessible names for interactive controls.
* Ensure keyboard accessibility for interactive elements.
* Preserve visible focus indicators.
* Do not rely on color alone to communicate important information.
* Check color contrast and disabled-state visibility.
* Follow the project's documented accessibility requirements.

If accessibility requirements are not fully specified, identify the gaps rather than claiming that the interface is fully compliant.

## 9. Naming Conventions

* Preserve existing file names and directory structure.
* Use descriptive names for new files and components.
* Follow the naming conventions already used in the repository.
* Do not rename existing tokens, components, or properties without a clear reason.
* Keep component names consistent with their Figma specifications.

## 10. Rules for AI Agents

When creating or modifying an interface:

1. Read this document first.
2. Inspect the relevant design tokens.
3. Read the specifications of the components required for the task.
4. Check the available icon assets.
5. Reuse existing components and tokens.
6. Follow documented component states and properties.
7. Do not invent undocumented design-system rules.
8. Report missing specifications, conflicting values, and unavailable assets.
9. Explain any necessary deviations from the design system.
10. Keep changes consistent with the existing design.

## 11. Limitations

This repository may not contain every detail available in the original Figma file.

If a required visual property, interaction, responsive rule, or component behavior is missing, do not assume that the exported specification is complete.

Request clarification or propose a solution explicitly identified as a recommendation rather than an existing design-system rule.

