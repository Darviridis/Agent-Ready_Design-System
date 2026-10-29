1. You need to manually replace hex color values ​​with tokens; other tokens such as those for typography, corner radii, and colors—must also be replaced manually, as Spec 2 does not handle this.
2. If your Figma file contains elements that include icon swaps, Spec 2 will not process them correctly; you will need to manually add these to the YAML file and the documentation. Otherwise, only the default icon will appear everywhere.
3. Some components lose part of their state during export—especially when a component has more than one property—and in some cases, I’ve had to add hover states manually.

https://nathanacurtis.substack.com/p/what-component-specs-leave-behind 
