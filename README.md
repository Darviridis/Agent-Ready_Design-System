# Agent-Ready_Design-System

## 1. Preparing and organizing the Figma file with components and tokens

## 2. Check that components have consistent naming conventions

## 3. Props and variants follow semantic patterns
## 4. Create tokens for colors, typography, spacings, radius (Token architecture is three-tier minimum)
## 5. Publish library
## 6. Create spec files: design.md, tokens.json, components (yaml - Spec2), assets (svg), agents.md

## 7. Change your hex ang raw data to tokens in yaml

## 8. Create metadata docs for components (docs.yaml)

Machine-readable component metadata exists

Every component needs structured data describing what it is, what it does, and how to use it. JSON files with schema validation. Not markdown. Not Figma comments. Not wiki pages.

When a designer sees a button, they bring context: primary buttons are for main actions, disabled states mean "not interactive". AI doesn't have that background. You have to spell it out explicitly.

The metadata should include component name and description, available variants and their purposes, props with types and defaults, composition patterns (what can contain what), usage constraints, and related components.

```json
{
  "$schema": "https://example.com/schemas/component.schema.json",
  "name": "Button",
  "description": "Primary interactive element for user actions",
  "category": "actions",
  "options": {
    "variant": {
      "type": "enum",
      "values": ["primary", "secondary", "danger"],
      "default": "primary",
      "description": "Visual hierarchy and semantic meaning"
    },
    "size": {
      "type": "enum",
      "values": ["small", "medium", "large"],
      "default": "medium"
    }
  },
  "props": {
    "disabled": { "type": "boolean", "default": false },
    "loading": { "type": "boolean", "default": false }
  },
  "usage": {
    "when": "User needs to trigger an action or navigate",
    "avoid": "Don't use for navigation that looks like text links",
    "alternatives": ["Link", "IconButton"]
  },
  "composition": {
    "canContain": ["Icon", "Text"],
    "cannotContain": ["Button", "Input"]
  }
}
```

Store the metadata alongside your component code. If your Button lives in src/components/Button.tsx, put the metadata in src/components/Button.meta.json.
Common pitfalls: Storing docs only in markdown or wikis. Relying solely on Storybook's auto-generated docs without custom metadata. Documenting appearance but not intent.

AI doesn't forgive inconsistency. Humans see btn_primary and button-primary as "basically the same thing". AI sees two completely different patterns.

## 9. Component composition is explicit ( in docs. yaml)
## 10. Create JSON files with schema validation
## 11. Create code examples
## 12. Design decisions are documented with rationale (I skip it for now)
## 13. Create llms.txt
## 14. Create primitives.css и semantic.css
## 15. Code Connect
## 16. Built a React + Vite codebase, structured around three core folders:
- styles: with primitives.css, semantic.css, and components.css
- components: where each component included its .tsx, .stories.tsx, and .css file
- pages: a directory used for testing prototypes

After code

## 1. Add a code syntax in Figma
## 2. Write a script to audit
