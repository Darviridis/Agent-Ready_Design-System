
import { BlockHeader } from "../components/BlockHeader";

export function BlockHeaderExamples() {
  return (
    <main>
      <section>
        <h2>Block header — Center</h2>
        <BlockHeader Type="Center" heading="Heading" />
      </section>

      <section>
        <h2>Block header — Left</h2>
        <BlockHeader Type="Left" heading="Heading" />
      </section>

      <section>
        <h2>Different heading text</h2>
        <BlockHeader Type="Center" heading="Wallet settings" />
        <BlockHeader Type="Left" heading="Transaction history" />
      </section>
    </main>
  );
}
```
```tsx
import type { ReactNode } from "react";
import { Button } from "../components/Button";

type BlockHeaderProps = {
  Type?: "Center" | "Left";
  heading?: ReactNode;
  onClose?: () => void;
};

export function BlockHeader({
  Type = "Center",
  heading = "Heading",
  onClose,
}: BlockHeaderProps) {
  const isLeft = Type === "Left";

  const closeButton = (
    <Button
      Instance="close"
      Type="Icon"
      State="Default"
      Size="M"
      aria-label="Close"
      onClick={onClose}
    />
  );

  const headingElement = (
    <div
      style={{
        flex: 1,
        color: "#D1DEDF",
        fontFamily: "Chirp, sans-serif",
        fontSize: 24,
        fontWeight: 700,
        lineHeight: "32px",
        textAlign: isLeft ? "left" : "center",
      }}
    >
      {heading}
    </div>
  );

  return (
    <header
      style={{
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        gap: 8,
        width: "100%",
        maxWidth: 1200,
        minHeight: 48,
        padding: "8px 24px",
        borderRadius: "20px 20px 0 0",
        backgroundColor: "#0B1819",
      }}
    >
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
```
