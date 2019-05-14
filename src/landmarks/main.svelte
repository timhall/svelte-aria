<!--
  https://www.w3.org/TR/wai-aria-practices/#aria_lh_main

  A main landmark identifies the primary content of the page.

  - Each page should have one main landmark.
  - The main landmark should be a top-level landmark.
  - When a page contains nested document and/or application roles (e.g. typically through the use of iframe and frame elements), each document or application role may have one main landmark.
  - If a page includes more than one main landmark, each should have a unique label (see Step 3 above).
-->

<script>
  import { Main } from 'svelte-elements';

  let component, attributes;
  $: ({ as = Main, ...attributes} = $$props);
</script>

<svelte:component this={as} {...attributes} role="main">
  <slot />
</svelte:component>
