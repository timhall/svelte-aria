// import { get_current_component, bubble } from 'svelte/internal';
// TODO not exported by svelte/internal.mjs
const get_current_component = () => {};
const bubble = (component, event) => console.log('bubble', event);

export function createDOMEventDispatcher() {
  // WARNING Uses internal code for svelte
  // (Can't use createEventDispatcher since that assumes CustomEvent)
  const component = get_current_component();
  return event => bubble(component, event);
}

export function passthrough(props, remove) {
  const copy = {};
  Object.keys(props).forEach(key => {
    if ((!remove || !remove.includes(key)) && key !== '$$scope') {
      copy[key] = props[key];
    }
  });

  return copy;
}
