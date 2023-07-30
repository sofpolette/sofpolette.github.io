/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin';

export default {
  content: [
    "./index.html",
    './src/**/*.{html,js,svelte,ts}',
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  plugins: [
    flowbite,
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
}