import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#141414",
        bg2: "#0a0a0a",
        ink: "#e6e6e6",
        muted2: "#9a9a9a",
        accent: "#0099ff",
        border2: "#2a2a2a",
      },
      fontFamily: {
        sans: ["var(--font-hanken)", "sans-serif"],
        serif: ["var(--font-lustria)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
