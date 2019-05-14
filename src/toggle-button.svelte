<!--
  https://www.w3.org/TR/wai-aria-practices/#button

  ...

  Toggle button: A two-state button that can be either off (not pressed) or on (pressed). To tell assistive technologies that a button is a toggle button, specify a value for the attribute aria-pressed. For example, a button labeled mute in an audio player could indicate that sound is muted by setting the pressed state true. Important: it is critical the label on a toggle does not change when its state changes. In this example, when the pressed state is true, the label remains "Mute" so a screen reader would say something like "Mute toggle button pressed". Alternatively, if the design were to call for the button label to change from "Mute" to "Unmute," the aria-pressed attribute would not be needed.
-->

<script>
  import Button from './button.svelte';
  import { createDOMEventDispatcher, passthrough } from './utils';

  export let pressed;

  let attributes;
  $: attributes = passthrough($$props, ['pressed']);

  const dispatch = createDOMEventDispatcher();

  function onClick(event) {
    dispatch(event);
    if (event.defaultPrevented) return;

    // WORKAROUND for https://github.com/sveltejs/svelte/issues/2725
    $$props.pressed = pressed = !pressed;
  }
</script>

<Button aria-pressed={pressed} on:click={onClick} {...attributes}>
  <slot />
</Button>
