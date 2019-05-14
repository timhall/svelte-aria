<!--
  https://www.w3.org/TR/wai-aria-practices/#aria_lh_banner

  A banner landmark identifies site-oriented content at the beginning of each page within a website. Site-oriented content typically includes things such as the logo or identity of the site sponsor, and site-specific search tool. A banner usually appears at the top of the page and typically spans the full width.

  - Each page may have one banner landmark.
  - The banner landmark should be a top-level landmark.
  - When a page contains nested document and/or application roles (e.g. typically through the use of iframe and frame elements), each document or application role may have one banner landmark.
  - If a page includes more than one banner landmark, each should have a unique label (see Step 3 above).
-->

<script>
  import { Header } from 'svelte-elements';

  let component, attributes;
  $: ({ as = Header, ...attributes} = $$props);
</script>

<svelte:component this={as} {...attributes} role="banner">
  <slot />
</svelte:component>
