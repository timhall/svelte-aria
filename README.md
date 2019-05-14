# svelte-aria

## Controls

`Button` ...

```html
<script>
  import { Div } from 'svelte-elements';
  import { Button } from 'svelte-aria';
</script>

<Button as={Div} class="action" on:click={() => console.log('click')}>Action</Button>
<!--
  Generates:
  <div role="button" tabindex=0 class="action">Action</div>

  With handlers for click, space, and enter
-->
```

## Landmarks

Landmarks are used to add special meaning to the html document.

`Banner` is for site-oriented content at the beginning of the page
`Complementary` ...
`Contentinfo` ...
`Form` ...
`Main` ...
`Navigation` identifies links that provide document navigation, and so on.
`Region` ...
`Search` ...
