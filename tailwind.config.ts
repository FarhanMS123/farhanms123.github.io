import { type Config } from "tailwindcss";

// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/typography"),require('daisyui'),],
  corePlugins: {
    preflight: false, // https://tailwindcss.com/docs/preflight#disabling-preflight
  },
  theme: {
    extend: {},
  },
} satisfies Config;

