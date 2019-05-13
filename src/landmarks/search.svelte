<!--
  https://www.w3.org/TR/wai-aria-practices/#aria_lh_search

  A search landmark contains a collection of items and objects that, as a whole, combine to create search functionality.

  - Use the search landmark instead of the form landmark when the form is used for search functionality.
  - If a page includes more than one search landmark, each should have a unique label (see Step 3 above).
-->

<script>
  import { Form } from 'svelte-elements';

  let component, attributes;
  $: ({ this: component = Form, ...attributes} = $$props);
</script>

<svelte:component this={component} {...attributes} role="search">
  <slot />
</svelte:component>
