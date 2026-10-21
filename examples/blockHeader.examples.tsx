/**
 * BlockHeader examples based on the Specs 2 YAML (token-based).
 *
 * Composition (from docs):
 *   canContain: Button, Heading
 *   required: Heading
 *   optional: Button
 *   order: Center → Button, Heading, Button | Left → Heading, Button
 *
 * Prefer a slot-based or explicit-prop API:
 *   heading + onClose / actions
 */
import type { ReactNode } from "react";
import { Button } from "./Button";
import { BlockHeader } from "./BlockHeader";

type BlockHeaderProps = {
  Align?: "Center" | "Left";
  /** Required heading content */
  heading?: ReactNode;
  /** Optional close handler → renders Icon Button(s) */
  onClose?: () => void;
};

/**
 * Implementation sketch using explicit slots rather than free children.
 * This makes composition clear for both developers and AI agents.
 */
export function BlockHeaderComponent({
  Align = "Center",
  heading = "Heading",
  onClose,
}: BlockHeaderProps) {
  const isLeft = Align === "Left";

  const closeButton = (
    <Button
      Instance="close"
      Variant="Icon"
      State="Default"
      Size="md"
      aria-label="Close"
      onClick={onClose}
    />
  );

  const headingElement = (
    <h2
      style={{
        flex: 1,
        minWidth: 0,
        margin: 0,
        color: "var(--semantic-color-text-primary-text, #D1DEDF)",
        fontFamily:
          "var(--semantic-typography-font-family-primary, Chirp), sans-serif",
        fontSize: "var(--semantic-typography-heading-h4-font-size, 24px)",
        fontWeight: 700,
        lineHeight: "var(--semantic-typography-heading-h4-line-height, 32px)",
        textAlign: isLeft ? "left" : "center",
      }}
    >
      {heading}
    </h2>
  );

  return (
    <header
      style={{
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        gap: "var(--semantic-spacing-inline-8, 8px)",
        width: "100%",
        maxWidth: 1200,
        minHeight: 48,
        padding:
          "var(--primitive-spacing-8, 8px) var(--primitive-spacing-24, 24px)",
        borderRadius:
          "var(--semantic-radius-xl, 20px) var(--semantic-radius-xl, 20px) var(--semantic-radius-none, 0) var(--semantic-radius-none, 0)",
        backgroundColor:
          "var(--semantic-color-background-primary-bg, #0B1819)",
      }}
    >
      {/* Order is intentional and documented in composition.order */}
      {isLeft ? (
        <>
          {headingElement}
          {closeButton}
        </>
      ) : (
        <>
          {closeButton}
          {headingElement}
          {closeButton}
        </>
      )}
    </header>
  );
}

export function BlockHeaderExamples() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 32,
        padding: 24,
        background: "var(--semantic-color-background-primary-bg, #0B1819)",
        color: "var(--semantic-color-text-primary-text, #D1DEDF)",
        fontFamily:
          "var(--semantic-typography-font-family-primary, Chirp), sans-serif",
      }}
    >
      <section>
        <h2>Block header — Center</h2>
        <BlockHeader Align="Center" heading="Heading" />
      </section>

      <section>
        <h2>Block header — Left</h2>
        <BlockHeader Align="Left" heading="Heading" />
      </section>

      <section>
        <h2>Different heading text</h2>
        <BlockHeader Align="Center" heading="Wallet settings" />
        <BlockHeader Align="Left" heading="Transaction history" />
      </section>

      {/* Anti-pattern illustration (commented — do not do this) */}
      {/*
        ❌ Do not put arbitrary content inside BlockHeader
        <BlockHeader>
          <form>...</form>
        </BlockHeader>

        ❌ Do not use non-Icon buttons
        <BlockHeader Align="Center" heading="Title">
          <Button Variant="Primary">Save</Button>
        </BlockHeader>
      */}
    </main>
  );
}
