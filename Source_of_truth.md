# Source of Truth

## Purpose

This document defines which source is authoritative for each part of the design system and how conflicts between Figma, design tokens, component metadata, and code should be resolved.

The goal is to maintain visual consistency and enable AI coding assistants to generate interfaces that follow the design system.

## 1. Source of Truth Hierarchy

### Figma — Visual Design

Figma is the source of truth for visual design.

It defines:
- Layout and element positioning
- Auto Layout and resizing behavior
- Component appearance and dimensions
- Visual variants and states
- Typography, spacing, colors, borders, and radii as used in designs
- Page and screen composition

When implementing a Figma screen, reproduce the approved design rather than redesigning it.

### Design Tokens — Shared Design Values

`tokens/tokens.json` is the machine-readable representation of the design tokens used by the design system.

It contains reusable values for:
- Colors
- Typography
- Spacing
- Border radii
- Other shared visual properties

**Current workflow:** Figma Variables are the authoritative source for token values. The JSON token file must reflect the approved Figma Variables and must not be changed independently in a way that creates inconsistencies.

If a token value changes, update the approved source and synchronize the JSON representation before using it in new implementations.

CSS variables and other generated files are derived outputs, not independent sources of truth.

### Component Metadata — Component Contracts

YAML files in `components/` define the documented component API.

They describe:
- Component names and purposes
- Supported properties and their types
- Available variants and states
- Default values
- Usage constraints and relationships

Component metadata must remain consistent with the corresponding Figma component properties.

Figma defines the approved visual appearance. YAML provides a structured description that AI tools can read.

Do not invent new component properties, variants, or states without an explicit design-system decision.

### Code — Implementation and Behavior

Application code is the source of truth for runtime behavior and technical implementation.

It defines:
- Event handling and interactions
- Application logic and data flow
- Form validation
- Loading and error handling
- Accessibility implementation
- Responsive behavior where it is not fully specified in Figma

Code must follow the documented component API and design tokens.

Do not treat existing code as proof that a visual discrepancy is intentional.

## 2. Conflict Resolution

When sources disagree, follow these rules:

1. **Visual appearance:** Follow the approved Figma design.
2. **Shared token values:** Follow approved Figma Variables and synchronize `tokens/tokens.json`.
3. **Component properties and states:** Follow the approved Figma component configuration and update YAML metadata to match.
4. **Runtime behavior:** Follow the documented component requirements and the application's implementation.
5. **Missing or contradictory information:** Ask for clarification or report the conflict instead of silently inventing a solution.

Do not introduce one-off hardcoded values to work around a discrepancy without justification.

## 3. Change Management

When a design-system change is approved:

1. Update the authoritative source.
2. Update dependent representations, including token JSON and component metadata where necessary.
3. Update generated CSS or code outputs if applicable.
4. Verify that the implementation matches the approved design.
5. Check that documentation and examples remain consistent.

Do not modify derived files independently if doing so would create a mismatch with their source.

## 4. AI Implementation Rules

AI coding assistants must:

- Read `AGENTS.md` and relevant component metadata before implementation.
- Inspect the relevant Figma design when visual accuracy matters.
- Reuse existing components, tokens, and assets.
- Avoid guessing when required design information is missing.
- Identify conflicts between Figma, tokens, metadata, and code.
- Explain any proposed deviation from the design system.
- Never claim that sources are synchronized unless synchronization has actually been performed.

## 5. Future Automation

The current workflow may require manual synchronization between Figma Variables and `tokens/tokens.json`.

If the design system grows, consider establishing an automated token pipeline so that the authoritative token source can generate or synchronize the required outputs.

Until such a pipeline exists, do not treat generated CSS or application code as an alternative source of truth for design tokens.
