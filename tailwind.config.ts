import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "var(--red)",
        "red-dark": "var(--red-dark)",
        "red-tint": "var(--red-tint)",
        white: "var(--white)",
        "off-white": "var(--off-white)",
        ink: "var(--ink)",
        grey: "var(--grey)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-sora)", "sans-serif"],
      },
      maxWidth: { container: "1240px" },
      borderRadius: { card: "14px" },
      boxShadow: { card: "0 2px 10px rgba(0,0,0,0.04)" },
    },
  },
  plugins: [],
} satisfies Config;
