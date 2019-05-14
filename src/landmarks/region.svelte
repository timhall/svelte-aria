<!--
  https://www.w3.org/TR/wai-aria-practices/#aria_lh_region

  A region landmark is a perceivable section of the page containing content that is sufficiently important for users to be able to navigate to the section.

  - A region landmark must have a label.
  - If a page includes more than one region landmark, each should have a unique label (see Step 3 above).
  - The region landmark can be used identify content that named landmarks do not appropriately describe.

  The HTML5 section element defines a region landmark when it has an accessible name (e.g. aria-labelledby, aria-label or title).
-->

<script>
  import { Section } from 'svelte-elements';

  export let title;

  let component, attributes;
  $: ({ as = Section, ...attributes} = $$props);
</script>

<svelte:component this={as} {...attributes} {title} role="region">
  <slot />
</svelte:component>
