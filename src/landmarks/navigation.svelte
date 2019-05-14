<!--
  https://www.w3.org/TR/wai-aria-practices/#aria_lh_navigation

  Navigation landmarks provide a way to identify groups (e.g. lists) of links that are intended to be used for website or page content navigation.

  - If a page includes more than one navigation landmark, each should have a unique label (see Step 3 above).
  - If a navigation landmark has an identical set of links as another navigation landmark on the page, use the same label for each navigation landmark.
-->

<script>
  import { Nav } from 'svelte-elements';

  let component, attributes;
  $: ({ as = Nav, ...attributes} = $$props);
</script>

<svelte:component this={as} {...attributes} role="navigation">
  <slot />
</svelte:component>
