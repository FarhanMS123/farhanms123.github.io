import { type Config } from "tailwindcss";

// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"),require('daisyui'),],
} satisfies Config;

