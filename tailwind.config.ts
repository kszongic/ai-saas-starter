import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#fafafa",
        muted: "#a1a1aa",
        border: "#27272a",
        card: "#18181b",
        primary: { DEFAULT: "#6366f1", foreground: "#ffffff" },
        accent: "#8b5cf6",
      },
    },
  },
  plugins: [],
};

export default config;
