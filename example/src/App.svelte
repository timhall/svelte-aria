<script>
  import { Div, Span } from 'svelte-elements';
  import { Main, Button, ToggleButton } from '../../src/';

  let clicked = 0;
  let toggled = 0;
  let pressed = false;
</script>

<Main as={Div}>
  <h1>Main</h1>

  <h2>Button</h2>
  <Button as={Span} on:click={() => clicked += 1}>Clicked {clicked}</Button>

  <h2>ToggleButton</h2>
  <ToggleButton as={Span} bind:pressed on:click={() => toggled += 1}>Toggled {pressed} ({toggled})</ToggleButton>
</Main>
