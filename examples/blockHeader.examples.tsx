/**
 * BlockHeader examples based on the Specs 2 YAML (token-based).
 *
 * Composition (from docs):
 *   canContain: BackButton, Heading, CloseButton
 *   required: Heading
 *   optional: BackButton, CloseButton
 *   order: Center → BackButton, Heading, CloseButton | Left → Heading, CloseButton
 *
 * Buttons (both are Button instances: Variant="Icon", State="Default",
 * Interaction="Default", Size="md"; icons come from Assets/Icons):
 *   BackButton  → Instance="arrow-left" (Center only)
 *   CloseButton → Instance="close"      (Center and Left)
 *
 * Prefer a slot-based or explicit-prop API:
 *   heading + onBack / onClose
 */
import type { ReactNode } from "react";
import { Button } from "./Button";
import { BlockHeader } from "./BlockHeader";

type BlockHeaderProps = {
  Align?: "Center" | "Left";
  /** Required heading content */
  heading?: ReactNode;
  /** Back handler → renders the BackButton (arrow-left). Center variant only. */
  onBack?: () => void;
  /** Close handler → renders the CloseButton (close). Both variants. */
  onClose?: () => void;
};

/**
 * Implementation sketch using explicit slots rather than free children.
 * This makes composition clear for both developers and AI agents.
 */
export function BlockHeaderComponent({
  Align = "Center",
  heading = "Heading",
  onBack,
  onClose,
}: BlockHeaderProps) {
  const isLeft = Align === "Left";

  // BackButton: arrow-left icon, left side. Rendered only for Align="Center".
  const backButton = (
    <Button
      Instance="arrow-left"
      Variant="Icon"
      State="Default"
      Interaction="Default"
      Size="md"
      aria-label="Back"
      onClick={onBack}
    />
  );

  // CloseButton: close icon, right side. Rendered for both Align values.
  const closeButton = (
    <Button
      Instance="close"
      Variant="Icon"
      State="Default"
      Interaction="Default"
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
          {backButton}
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
        {/* BackButton (arrow-left) + Heading + CloseButton (close) */}
        <BlockHeader
          Align="Center"
          heading="Heading"
          onBack={() => console.log("back")}
          onClose={() => console.log("close")}
        />
      </section>

      <section>
        <h2>Block header — Left</h2>
        {/* Heading + CloseButton (close). No back button in this variant. */}
        <BlockHeader
          Align="Left"
          heading="Heading"
          onClose={() => console.log("close")}
        />
      </section>

      <section>
        <h2>Different heading text</h2>
        <BlockHeader
          Align="Center"
          heading="Wallet settings"
          onBack={() => console.log("back")}
          onClose={() => console.log("close")}
        />
        <BlockHeader
          Align="Left"
          heading="Transaction history"
          onClose={() => console.log("close")}
        />
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

        ❌ Do not show a back button in the Left variant
        <BlockHeader Align="Left" heading="Title" onBack={goBack} onClose={close} />

        ❌ Do not swap the icons (close on the left, arrow-left on the right)
        or use icons from outside Assets/Icons
      */}
    </main>
  );
}
