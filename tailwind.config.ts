import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  safelist: [
    // Design system page uses dynamic class names — these must be safelisted
    { pattern: /^bg-primary-(50|100|200|300|400|500|600|700|800|900|950)$/ },
    { pattern: /^text-text-[1-8]$/ },
    { pattern: /^text-(display-lg|display-md|body-lg|body-md|label-sm|label-xs)$/ },
    { pattern: /^shadow-ds-(sm|md|lg|glow)$/ },
  ],
  theme: {
    screens: {
      md: "1024px",
    },
    extend: {
      colors: {
        primary: {
          50:  "#fdf9f0",
          100: "#faf2de",
          200: "#f6e0ae",
          300: "#f0cf7d",
          400: "#ebbe4a",
          500: "#E4A711",
          600: "#c27d00",
          700: "#9a6200",
          800: "#6b4500",
          900: "#3d2800",
          950: "#1a1100",
        },
        surface:          "var(--color-surface)",
        "surface-raised": "var(--color-surface-raised)",
        "surface-overlay":"var(--color-surface-overlay)",
        border:           "var(--color-border)",
        "border-strong":  "var(--color-border-strong)",
        "text-1": "var(--color-text-1)",
        "text-2": "var(--color-text-2)",
        "text-3": "var(--color-text-3)",
        "text-4": "var(--color-text-4)",
        "text-5": "var(--color-text-5)",
        "text-6": "var(--color-text-6)",
        "text-7": "var(--color-text-7)",
        "text-8": "var(--color-text-8)",
      },
      fontFamily: {
        display: ["Roboto Mono", "monospace"],
        body:    ["Roboto Mono", "monospace"],
        data:    ["Press Start 2P", "monospace"],
      },
      fontSize: {
        // ── 6 tokens — responsive via CSS vars en global.css ──
        // Mobile (default) → Desktop (md: 768px)
        "display-lg": ["var(--fs-display-lg)", { lineHeight: "1.2"  }], // 26px → 30px
        "display-md": ["var(--fs-display-md)", { lineHeight: "1.25" }], // 20px → 22px
        "body-lg":    ["var(--fs-body-lg)",    { lineHeight: "1.6"  }], // 16px → 18px
        "body-md":    ["var(--fs-body-md)",    { lineHeight: "1.65" }], // 14px → 16px
        "label-sm":   ["var(--fs-label-sm)",   { lineHeight: "1.5", letterSpacing: "0.06em" }], // 13px → 14px
        "label-xs":   ["var(--fs-label-xs)",   { lineHeight: "1.4", letterSpacing: "0.08em" }], // 11px → 12px
      },
      borderRadius: {
        sm:    "0.25rem",
        md:    "0.5rem",
        lg:    "0.75rem",
        xl:    "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        "ds-sm":   "var(--shadow-sm)",
        "ds-md":   "var(--shadow-md)",
        "ds-lg":   "var(--shadow-lg)",
        "ds-glow": "var(--shadow-glow)",
      },
      transitionDuration: {
        fast:   "100ms",
        normal: "200ms",
        slow:   "350ms",
      },
    },
  },
  plugins: [],
};

export default config;
