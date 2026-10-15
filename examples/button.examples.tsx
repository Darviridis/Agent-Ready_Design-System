/**
 * Button examples based on the supplied Specs 2 YAML.
 *
 * Purpose:
 * - Show the AI coding agent how to use the Button component.
 * - Preserve the prop names and values from the Figma spec.
 *
 * Important:
 * - Replace the import path with the actual Button implementation in your project.
 * - These examples assume Button accepts State, Type, Size, and Instance props.
 * - The YAML defines Disabled styling, but does not define a separate Disabled
 *   variant for Type=Secondary or Type=Icon. Use those combinations only after
 *   confirming their intended design in Figma.
 */

import { Button } from "../components/Button";

export function ButtonExamples() {
  return (
    <main>
      <section aria-labelledby="button-primary">
        <h2 id="button-primary">Primary buttons</h2>

        <Button Type="Primary" State="Default" Size="lg">
          Connect wallet
        </Button>

        <Button Type="Primary" State="Hover" Size="lg">
          Connect wallet
        </Button>

        <Button Type="Primary" State="Disabled" Size="lg" disabled>
          Connect wallet
        </Button>

        <Button Type="Primary" State="Default" Size="md">
          Connect wallet
        </Button>

        <Button Type="Primary" State="Disabled" Size="md" disabled>
          Connect wallet
        </Button>
      </section>

      <section aria-labelledby="button-secondary">
        <h2 id="button-secondary">Secondary buttons</h2>

        <Button Type="Secondary" State="Default" Size="lg">
          Connect wallet
        </Button>

        <Button Type="Secondary" State="Hover" Size="lg">
          Connect wallet
        </Button>

        <Button Type="Secondary" State="Loading" Size="lg">
          Connect wallet
        </Button>

        <Button Type="Secondary" State="Default" Size="md">
          Connect wallet
        </Button>
      </section>

      <section aria-labelledby="button-loading">
        <h2 id="button-loading">Loading and waiting</h2>

        <Button Type="Primary" State="Loading" Size="lg">
          Connect wallet
        </Button>

        <Button Type="Primary" State="Loading" Size="md">
          Connect wallet
        </Button>

        <Button Type="Primary" State="Waiting" Size="lg">
          Connect wallet
        </Button>

        <Button Type="Primary" State="Waiting" Size="md">
          Connect wallet
        </Button>
      </section>

      <section aria-labelledby="button-icon">
        <h2 id="button-icon">Icon buttons</h2>

        <Button
          Type="Icon"
          State="Default"
          Size="lg"
          Instance="close"
          aria-label="Close"
        />

        <Button
          Type="Icon"
          State="Hover"
          Size="lg"
          Instance="close"
          aria-label="Close"
        />

        <Button
          Type="Icon"
          State="Default"
          Size="md"
          Instance="close"
          aria-label="Close"
        />

        <Button
          Type="Icon"
          State="Hover"
          Size="md"
          Instance="close"
          aria-label="Close"
        />
      </section>
    </main>
  );
}

/**
 * Interactive examples:
 * State should normally be driven by component logic rather than manually
 * setting Hover. These examples illustrate the intended behavior.
 */

import { useState } from "react";

export function ButtonInteractionExamples() {
  const [isLoading, setIsLoading] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  async function handleConnect() {
    setIsLoading(true);
    setIsWaiting(false);

    try {
      // Replace with the real wallet connection action.
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Set this to true only while waiting for a later confirmation.
      setIsWaiting(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section aria-labelledby="button-interactions">
      <h2 id="button-interactions">Interaction examples</h2>

      <Button
        Type="Primary"
        State={isLoading ? "Loading" : isWaiting ? "Waiting" : "Default"}
        Size="lg"
        onClick={handleConnect}
        disabled={isLoading || isWaiting}
      >
        Connect wallet
      </Button>

      <Button
        Type="Primary"
        State="Disabled"
        Size="lg"
        disabled
      >
        Unavailable action
      </Button>

      <Button
        Type="Icon"
        State="Default"
        Size="lg"
        Instance="close"
        aria-label="Close dialog"
        onClick={() => {
          // Replace with the real close-dialog action.
        }}
      />
    </section>
  );
}
