/**

* Button examples based on the supplied Specs 2 YAML.
*
* Purpose:
* * Show the AI coding agent how to use the Button component.
* * Preserve the prop names and values from the Figma spec.
*
* Important:
* * Replace the import path with the actual Button implementation in your project.
* * These examples assume Button accepts Variant, State, Size, and Instance props.
* * The YAML defines Disabled styling, but does not define a separate Disabled
* variant for Variant=Secondary or Variant=Icon. Use those combinations only
* after confirming their intended design in Figma.
* * Hover is shown for documentation purposes. In production, hover styling
* should normally be controlled by CSS or the component's interaction logic.
  */

import { Button } from "../components/Button";

export function ButtonExamples() {
return ( <main> <section aria-labelledby="button-primary"> <h2 id="button-primary">Primary buttons</h2>

```
    <Button Variant="Primary" State="Default" Size="lg">
      Connect wallet
    </Button>

    <Button Variant="Primary" State="Hover" Size="lg">
      Connect wallet
    </Button>

    <Button
      Variant="Primary"
      State="Disabled"
      Size="lg"
      disabled
    >
      Connect wallet
    </Button>

    <Button Variant="Primary" State="Default" Size="md">
      Connect wallet
    </Button>

    <Button
      Variant="Primary"
      State="Disabled"
      Size="md"
      disabled
    >
      Connect wallet
    </Button>
  </section>

  <section aria-labelledby="button-secondary">
    <h2 id="button-secondary">Secondary buttons</h2>

    <Button Variant="Secondary" State="Default" Size="lg">
      Connect wallet
    </Button>

    <Button Variant="Secondary" State="Hover" Size="lg">
      Connect wallet
    </Button>

    <Button Variant="Secondary" State="Loading" Size="lg">
      Connect wallet
    </Button>

    <Button Variant="Secondary" State="Default" Size="md">
      Connect wallet
    </Button>
  </section>

  <section aria-labelledby="button-loading">
    <h2 id="button-loading">Loading and waiting</h2>

    <Button Variant="Primary" State="Loading" Size="lg">
      Connect wallet
    </Button>

    <Button Variant="Primary" State="Loading" Size="md">
      Connect wallet
    </Button>

    <Button Variant="Primary" State="Waiting" Size="lg">
      Connect wallet
    </Button>

    <Button Variant="Primary" State="Waiting" Size="md">
      Connect wallet
    </Button>
  </section>

  <section aria-labelledby="button-icon">
    <h2 id="button-icon">Icon buttons</h2>

    <Button
      Variant="Icon"
      State="Default"
      Size="lg"
      Instance="icon"
      aria-label="Open action"
    />

    <Button
      Variant="Icon"
      State="Hover"
      Size="lg"
      Instance="icon"
      aria-label="Open action"
    />

    <Button
      Variant="Icon"
      State="Default"
      Size="md"
      Instance="icon"
      aria-label="Open action"
    />

    <Button
      Variant="Icon"
      State="Hover"
      Size="md"
      Instance="icon"
      aria-label="Open action"
    />
  </section>
</main>
```

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

```
try {
  // Replace with the real wallet connection action.
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Set this to true only while waiting for a later confirmation.
  setIsWaiting(true);
} finally {
  setIsLoading(false);
}
```

}

return ( <section aria-labelledby="button-interactions"> <h2 id="button-interactions">Interaction examples</h2>

```
  <Button
    Variant="Primary"
    State={isLoading ? "Loading" : isWaiting ? "Waiting" : "Default"}
    Size="lg"
    onClick={handleConnect}
    disabled={isLoading || isWaiting}
  >
    Connect wallet
  </Button>

  <Button
    Variant="Primary"
    State="Disabled"
    Size="lg"
    disabled
  >
    Unavailable action
  </Button>

  <Button
    Variant="Icon"
    State="Default"
    Size="lg"
    Instance="icon"
    aria-label="Open dialog"
    onClick={() => {
      // Replace with the real icon-dialog action.
    }}
  />
</section>
```

);
}
