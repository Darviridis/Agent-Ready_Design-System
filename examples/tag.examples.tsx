/**

* Tags examples based on the supplied Specs 2 YAML.
*
* Purpose:
* * Show the AI coding agent how to use the Tags component.
* * Preserve the prop names and values from the Figma spec.
*
* Important:
* * Replace the import path with the actual Tags implementation in your project.
* * Props from the YAML:
* * Size: sm | md
* * Shape: oval | square
* * Default: Size="sm", Shape="square"
* * square → shows "Native" text
* * oval → shows "Verified" text, rounded pill style with stroke
* * The content is fixed in the design system ("Native" / "Verified").
* In real usage, you may pass children or a label prop if the component
* implementation supports it.
  */

import { Tags } from "../components/Tags";

export function TagsExamples() {
return ( <main> <section aria-labelledby="tags-square"> <h2 id="tags-square">Square tags</h2>

```
    <Tags Size="sm" Shape="square">
      Native
    </Tags>

    <Tags Size="md" Shape="square">
      Native
    </Tags>
  </section>

  <section aria-labelledby="tags-oval">
    <h2 id="tags-oval">Oval (Verified) tags</h2>

    <Tags Size="sm" Shape="oval">
      Verified
    </Tags>

    <Tags Size="md" Shape="oval">
      Verified
    </Tags>
  </section>
</main>
```

);
}
