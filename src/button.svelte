<!--
  https://www.w3.org/TR/wai-aria-practices/#button

  A button is a widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation. A common convention for informing users that a button launches a dialog is to append "…" (ellipsis) to the button label, e.g., "Save as…".

  In addition to the ordinary button widget, WAI-ARIA supports 2 other types of buttons:

  - Toggle button: A two-state button that can be either off (not pressed) or on (pressed). To tell assistive technologies that a button is a toggle button, specify a value for the attribute aria-pressed. For example, a button labeled mute in an audio player could indicate that sound is muted by setting the pressed state true. Important: it is critical the label on a toggle does not change when its state changes. In this example, when the pressed state is true, the label remains "Mute" so a screen reader would say something like "Mute toggle button pressed". Alternatively, if the design were to call for the button label to change from "Mute" to "Unmute," the aria-pressed attribute would not be needed.
  - Menu button: as described in the menu button pattern, a button is revealed to assistive technologies as a menu button if it has the property aria-haspopup set to either menu or true.

  When the button has focus:

  - Space: Activates the button.
  - Enter: Activates the button.
-->

<script>
  import { Button } from 'svelte-elements';
  import { createDOMEventDispatcher } from './utils';

  const SPACE = 32;
  const ENTER = 13;

  let component, tabindex, role, attributes;
  $: ({ as = Button, tabindex = 0, role = 'button', ...attributes} = $$props);

  const dispatch = createDOMEventDispatcher();
  let from_keypress = false;

  function onKeypress(event) {
    dispatch(event);
    if (event.defaultPrevented) return;

    if (event.which === SPACE || event.which === ENTER) {
      event.preventDefault();
      dispatch(new MouseEvent('click'));
    }
  }
</script>

<svelte:component this={as} {role} {tabindex} on:click on:keypress={onKeypress} {...attributes}>
  <slot />
</svelte:component>
