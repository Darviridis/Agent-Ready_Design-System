# How I’m building a design system ready for AI agents

## 1. Preparing and organizing the Figma file with components and tokens

## 2. Check that components have consistent naming conventions

### Components have consistent naming conventions

Naming patterns should be predictable across your entire system. If you have a Button component, related components follow similar patterns: IconButton, TextButton, ToggleButton. Not Btn, BtnWithIcon, LinkBtn.

Consistency applies everywhere: component names (Button vs Btn), size naming (size="small" not size="sm" in one place and size="compact" in another), prop naming (disabled vs isDisabled vs isEnabled={false}), file naming, and token naming.

AI learns through pattern recognition. Consistency means predictability. If there's a Button and an IconButton, AI won't guess at ButtonIcon or BtnIcon.

Audit your current naming patterns. List components and props. Look for inconsistencies:

Do all size props use the same values?
Do all boolean props follow the same pattern?
Are variant props called the same thing across components?
Document your conventions explicitly. When you introduce new components, check them against these conventions before merging.

Common pitfalls: Abbreviating some names but not others. Using different terms for the same concept (type vs variant vs kind). Letting abbreviations creep in over time.

### Props and variants follow semantic patterns

Props should describe purpose and behaviour, not appearance. variant="primary" tells you about intent and hierarchy. variant="blue" only tells you about colour.

When AI sees variant="danger", it knows this represents a destructive action. It can suggest this for delete buttons without knowing what colour "danger" maps to. Visual-based props break the moment you rebrand.

Semantic props:

```
<Button variant="primary">Save</Button>
<Button variant="danger">Delete</Button>
<Input size="large" />
```
Visual or arbitrary props:
```
<Button variant="blue">Save</Button>
<Button variant="red">Delete</Button>
<Input size="48px" />
```
Review your component props and ask: "Would this make sense if I changed my colour palette tomorrow?" If the answer is no, it's probably not semantic enough. This thinking aligns with treating design systems like APIs, where props function as parameters with clear contracts. I covered this approach in Simplifying APIs: A designer's guide to better collaboration.

Establish a prop vocabulary. Intent: primary, secondary, tertiary, danger, success, warning, info. Size: small, medium, large. State: disabled, readOnly, required, loading, error. Boolean prefixes: is* for states (isActive), has* for presence (hasIcon), can* for permissions (canEdit).

## 3. Create tokens for colors, typography, spacings, radius (Token architecture is three-tier minimum) 

Token architecture is three-tier minimum

Your design tokens should have at least three levels of abstraction:

Primitive tokens: Raw values with no semantic meaning
Semantic tokens: Tokens with meaningful, context-aware names
Component tokens: Tokens scoped to specific components
Each tier references the tier below it. This architecture can use nested groups or flat naming conventions, both valid per the W3C DTCG specification.

Token hierarchy gives AI the context it needs. When AI sees button.background.primary, it knows this is specifically for primary button backgrounds. It won't suggest using it for borders or text.

The semantic layer bridges raw values and usage context. When you have color.text.primary that references color.neutral.900, AI understands this is the main text colour.

This three-tier architecture is industry best practice, not a requirement of the DTCG specification. The spec focuses on file format, not token organisation. But systems like Material Design 3, Atlassian, and VA.gov use this structure for good reason. If you're new to JSON structures for design tokens, I covered the fundamentals in JSON demystified: A field guide for designers.

## 4. Create spec files: design.md, tokens.json, components (yaml - Spec2), assets (svg), agents.md

## 5. Change your hex ang raw data to tokens in yaml

## 6. Design tokens are in a machine-readable format

### Your design tokens should have at least three levels of abstraction:

Primitive tokens: Raw values with no semantic meaning
Semantic tokens: Tokens with meaningful, context-aware names
Component tokens: Tokens scoped to specific components
Each tier references the tier below it. This architecture can use nested groups or flat naming conventions, both valid per the W3C DTCG specification.

```
{
  "primitive": {
    "color": {
      "blue": {
        "500": { "$value": "#2563eb", "$type": "color" }
      }
    }
  },
  "semantic": {
    "color": {
      "brand": {
        "primary": { "$value": "{primitive.color.blue.500}", "$type": "color" }
      }
    }
  },
  "component": {
    "button": {
      "background": {
        "primary": { "$value": "{semantic.color.brand.primary}", "$type": "color" }
      }
    }
  }
}
```
The example above uses nested groups. You can also use flat naming with the same tier structure. Both approaches are valid per the DTCG specification. Choose based on your team's preferences and tooling.

Token hierarchy gives AI the context it needs. When AI sees button.background.primary, it knows this is specifically for primary button backgrounds. It won't suggest using it for borders or text.

The semantic layer bridges raw values and usage context. When you have color.text.primary that references color.neutral.900, AI understands this is the main text colour.

This three-tier architecture is industry best practice, not a requirement of the DTCG specification. The spec focuses on file format, not token organisation. But systems like Material Design 3, Atlassian, and VA.gov use this structure for good reason. If you're new to JSON structures for design tokens, I covered the fundamentals in JSON demystified: A field guide for designers.

### Design tokens are in a machine-readable format

Your design tokens should exist as structured JSON files following the W3C DTCG specification. The source of truth should be these files, not CSS variables or Figma styles (those are generated outputs).

The DTCG specification reached its first stable version in October 2025, after years of collaborative development by designers, developers, and tool makers from organisations including Adobe, Amazon, Google, Figma, Microsoft, and many others.

```
{
  "color-brand-primary": {
    "$value": "#2563eb",
    "$type": "color",
    "$description": "Primary brand colour used for main actions and key UI elements"
  },
  "spacing-scale-4": {
    "$value": { "value": 16, "unit": "px" },
    "$type": "dimension",
    "$description": "Base spacing unit for component padding"
  }
}
```
Note that the DTCG specification defines dimension values as objects containing a numeric value and a unit (either "px" or "rem"), not as strings like "16px". Tools like Style Dictionary handle the conversion to platform-specific formats.

Machine-readable tokens let AI understand your design language. When tokens are only CSS variables or Figma styles, AI can see what values exist but not their relationships or intended usage.

The DTCG format can be processed by tools like Style Dictionary (v4 has first-class DTCG support), Terrazzo, and Tokens Studio to generate platform-specific outputs. One source file produces CSS custom properties, iOS Swift constants, Android XML resources, and documentation.

Design token files use the recommended file extensions .tokens or .tokens.json. All specification-defined properties are prefixed with $, including $value, $type, and $description.

If you're not sure what to include, start with colours (primitives and semantic), spacing scale, and typography (sizes, weights, line heights).

If Figma is your source of truth but isn't machine-readable, you don't have a source of truth. You have a very pretty suggestion.

## 7. Create metadata docs for components (docs.yaml)

### Machine-readable component metadata exists

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

### Design decisions are documented with rationale

Documentation shouldn't just say "use this component". It should explain why. What problem does it solve? Why this approach over alternatives? What constraints informed the decision?

When AI suggests a Modal for a workflow, it should know your system prefers Drawers for multi-step processes because drawers don't block underlying context. Without documented rationale, AI guesses at intent.

Instead of "Use the Drawer component for multi-step workflows", document like this:

Example
Drawer component
Purpose
Container for multi-step workflows and progressive disclosure.
Why we chose this approach
We evaluated Modals, Drawers, and inline expansion. Drawers won because they maintain visual context with the main interface, provide more space than inline expansion, and align with our mobile-first strategy. User testing showed faster task completion and fewer context-loss errors compared to modals for multi-step flows.
Trade-offs
Less dramatic focus than modals (might not suit critical warnings). Can feel cramped on smaller screens (we set a 440px minimum).
Alternatives
Use Modal for critical confirmations. Use Popover for simple, single-action interactions.

For major architectural decisions, consider Architecture Decision Records (ADRs). These lightweight documents capture context, decision, and consequences of significant choices.

### Component composition is explicit

Your system should clearly document which components can contain other components, which can't, and why.

AI needs to understand component relationships to suggest appropriate implementations. When it sees a Card, it should know CardHeader goes at the top, CardContent in the middle, and CardFooter at the bottom.

Document composition in component metadata:

```
{
  "name": "Card",
  "composition": {
    "canContain": ["CardHeader", "CardContent", "CardFooter"],
    "required": ["CardContent"],
    "optional": ["CardHeader", "CardFooter"],
    "order": "CardHeader must come before CardContent, CardFooter must come last"
  }
}
```

Document anti-patterns too. Show what NOT to do.

## 8. Create code examples

### Usage examples are code-first, not screenshot-first

Show code, not pictures of code. Every component should have runnable examples demonstrating common patterns and edge cases.

AI learns from code patterns. A screenshot of a loading button requires AI to guess how it's implemented. This tells it exactly:

```
<Button loading={true}>Save changes</Button>
```

Screenshots also hide relationships. When you show <Card><CardHeader /><CardContent /></Card> in code, you're teaching AI about component hierarchy. A screenshot just shows pixels.

Cover basic usage (simplest possible implementation), common variations, edge cases and error states, accessibility patterns, and composition with other components.

If you're using Storybook, you're halfway there. The stories you write are code examples. Make sure they're comprehensive and demonstrate real patterns, not just isolated variants.

Common pitfalls: Showing only happy-path examples. Demonstrating components in isolation without composition. Using pseudo-code or incomplete examples.

### Component composition is explicit

Your system should clearly document which components can contain other components, which can't, and why.

AI needs to understand component relationships to suggest appropriate implementations. When it sees a Card, it should know CardHeader goes at the top, CardContent in the middle, and CardFooter at the bottom.

Use TypeScript to constrain composition. Slot-based APIs work well when order matters:

```
type CardProps = {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
};
```
This makes composition explicit in the API. AI and developers both understand that header content appears before children.

## 9. Create JSON files with schema validation

## 10. Create llms.txt

llms.txt file exists in your repo
Quick win
Medium impact
Answered
An llms.txt file sits in your repository root as a structured index for AI agents. Think of it as a sitemap telling AI where to find component docs, architecture decisions, token definitions, and usage guidelines.

The format, proposed by Jeremy Howard, is plain Markdown with clear sections:

Your Design System Name

> Brief description of the system and its purpose

Quick Start
- Getting started guide: `/docs/getting-started.md`
- Installation: `/docs/installation.md`

Components
- Component catalog: `/docs/components/`
- Button: `/docs/components/button.md`
- Input: `/docs/components/input.md`

Design Tokens
- Token documentation: `/docs/tokens/`
- Token source files: `/tokens/tokens.json`

Architecture
- Architecture decisions: `/docs/architecture/`
- Component composition rules: `/docs/architecture/composition.md`
LLM providers haven't confirmed they read these during training. The value is mostly in inference-time context retrieval and pairing with MCP servers for runtime AI integration. But the file is trivial to create, and tools like Mintlify, GitBook, and VitePress now generate them automatically.

Create llms.txt in the root of your design system repository. Update it when you add major documentation or reorganise your system. Treat it like you would a README.

## 11. Design system has a clear source of truth hierarchy

When design and code diverge, there should be a documented rule for which source is authoritative. This might be "Figma is the source of truth for visual design, code is the source for behaviour" or "Token files are the source of truth for both Figma and code".

The specific answer matters less than having an answer that's documented and followed.

AI needs to know which source to trust when sources diverge. If Figma shows a button with 16px padding but the code uses 12px, which is correct?

Document the hierarchy and build processes that enforce it. If tokens are the source of truth, make Figma and code both generate from tokens.

The gap isn't technical. It's organisational. Most systems fail AI-readiness because no one owns the infrastructure layer between design and code.

## 12. Create primitives.css и semantic.css

## 13. Built a React + Vite codebase, structured around three core folders:
- styles: with primitives.css, semantic.css, and components.css
- components: where each component included its .tsx, .stories.tsx, and .css file
- pages: a directory used for testing prototypes

## After code

## 1. Add a code syntax in Figma
## 2. Figma components use Code Connect with MCP integration

There should be explicit mappings between your Figma design components and your code components. Figma's Code Connect lets you link Figma component properties to code props, and it integrates with Figma's MCP server so AI coding assistants can resolve the right components at runtime.

Without design-to-code mappings, AI guesses. Is Figma's "Primary" variant called variant="primary" in code? Or type="primary"? Or kind="primary"?
```
// Button.figma.tsx
import figma from '@figma/code-connect';
import { Button } from './Button';

figma.connect(Button, 'https://www.figma.com/design/abc123?node-id=65:5', {
  props: {
    variant: figma.enum('Variant', {
      Primary: 'primary',
      Secondary: 'secondary',
      Danger: 'danger'
    }),
    size: figma.enum('Size', {
      Small: 'small',
      Medium: 'medium',
      Large: 'large'
    }),
    disabled: figma.boolean('Disabled'),
    label: figma.string('Label')
  },
  example: ({ label, ...props }) => <Button {...props}>{label}</Button>
});
```
Figma's MCP server brings design context directly into AI coding tools like Cursor, Claude Code, and Windsurf. It provides the node tree, variant information, layout constraints, design tokens, and asset references that screenshot-based tools can't capture.

Both Code Connect UI and CLI feed into Figma's MCP infrastructure. The UI runs inside Figma and connects to GitHub for repository access. The CLI lives alongside your component code and offers more granular control over property mapping.

If you're not using Figma or React, create documentation that maps design tool properties to code props. A simple table works as a starting point.

## 3 Component stories and examples are programmatically accessible

Your component examples (Storybook stories, Playroom snippets, or similar) should be available in a structured format that AI and tools can parse. AI shouldn't need to scrape HTML pages to find examples.

For Storybook users, this typically means stories written in CSF (Component Story Format) as ES6 modules, the story index available during build/deploy, and component examples stored as code files.

When AI can access all your stories programmatically, it learns how components compose together, which prop combinations are common, what realistic data looks like, and how components handle edge cases.

Storybook builds output a story index (often index.json) that provides structured access to all stories. AI can query this to find all Button stories, then access the actual story code at the importPath.

If you're not using Storybook, create an /examples directory organised by component. Each example should be a runnable code file covering basic usage, all variants, common compositions, edge cases, error states, and accessibility patterns.

Source: 

https://designsystemsforai.com

https://hvpandya.com/llm-design-systems

https://uxdesign.cc/designing-with-claude-code-and-codex-cli-building-ai-driven-workflows-powered-by-code-connect-ui-f10c136ec11f

https://nathanacurtis.substack.com/p/spec-driven-ui-component-development
