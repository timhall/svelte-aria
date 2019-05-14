<!--
  https://www.w3.org/TR/wai-aria-practices/#aria_lh_complementary

  A complementary landmark is a supporting section of the document, designed to be complementary to the main content at a similar level in the DOM hierarchy, but remains meaningful when separated from the main content.

  - complementary landmarks should be top level landmarks (e.g. not contained within any other landmarks).
  - If the complementary content is not related to the main content, a more general role should be assigned (e.g. region).
  - If a page includes more than one complementary landmark, each should have a unique label (see Step 3 above).
-->

<script>
  import { Aside } from 'svelte-elements';

  let component, attributes;
  $: ({ as = Aside, ...attributes} = $$props);
</script>

<svelte:component this={as} {...attributes} role="complementary">
  <slot />
</svelte:component>
