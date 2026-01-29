import type { Config } from "tailwindcss";

/**
 * Tailwind configuration for the Next.js (App Router) frontend.
 * - `content` points Tailwind at all places class names may appear.
 * - `theme.extend` is ready for app-specific design tokens.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};

export default config;
