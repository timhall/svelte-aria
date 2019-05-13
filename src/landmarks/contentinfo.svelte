<!--
  https://www.w3.org/TR/wai-aria-practices/#aria_lh_contentinfo

  A contentinfo landmark is a way to identify common information at the bottom of each page within a website, typically called the "footer" of the page, including information such as copyrights and links to privacy and accessibility statements.

  - Each page may have one contentinfo landmark.
  - The contentinfo landmark should be a top-level landmark.
  - When a page contains nested document and/or application roles (e.g. typically through the use of iframe and frame elements), each document or application role may have one contentinfo landmark.
  - If a page includes more than one contentinfo landmark, each should have a unique label (see Step 3 above).
-->

<script>
  import { Footer } from 'svelte-elements';

  let component, attributes;
  $: ({ this: component = Footer, ...attributes} = $$props);
</script>

<svelte:component this={component} {...attributes} role="contentinfo">
  <slot />
</svelte:component>
