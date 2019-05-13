import svelte from 'rollup-plugin-svelte';
import filesize from 'rollup-plugin-filesize';

export default [
  {
    input: 'src/index.js',
    external: ['svelte', 'svelte/internal', 'svelte/store', 'svelte-elements'],
    output: [
      {
        file: 'dist/svelte-aria.es.js',
        format: 'es',
        sourcemap: true
      },
      {
        file: 'dist/svelte-aria.cjs.js',
        format: 'cjs',
        sourcemap: true
      }
    ],
    plugins: [svelte(), filesize()]
  }
];
