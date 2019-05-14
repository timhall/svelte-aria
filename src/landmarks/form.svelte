<!--
  https://www.w3.org/TR/wai-aria-practices/#aria_lh_form

  A form landmark identifies a region that contains a collection of items and objects that, as a whole, combine to create a form when no other named landmark is appropriate (e.g. main or search).

  - Use the search landmark instead of the form landmark when the form is used for search functionality.
  - A form landmark should have a label to help users understand the purpose of the form.
  - A label for the form landmark should be visible to all users (e.g. an h1-h6 element).
  - If a page includes more than one form landmark, each should have a unique label (see Step 3 above).
  - Whenever possible, controls contained in a form landmark in an HTML document should use native host semantics:
    - button
    - input
    - select
    - textarea

  The HTML5 form element defines a form landmark when it has an accessible name (e.g. aria-labelledby, aria-label or title).
-->

<script>
  import { Form } from 'svelte-elements';

  export let title;

  let component, attributes;
  $: ({ as = Form, ...attributes} = $$props);
</script>

<svelte:component this={as} {...attributes} {title} role="form">
  <slot />
</svelte:component>
