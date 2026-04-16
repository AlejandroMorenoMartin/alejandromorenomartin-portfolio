import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  safelist: [
    // Design system page uses dynamic class names — these must be safelisted
    { pattern: /^bg-primary-(50|100|200|300|400|500|600|700|800|900|950)$/ },
    { pattern: /^text-text-[1-8]$/ },
    { pattern: /^text-(display-2xl|display-xl|display-lg|display-md|display-sm|body-lg|body-md|body-sm|label-lg|label-sm|label-xs)$/ },
    { pattern: /^shadow-ds-(sm|md|lg|glow)$/ },
  ],
  theme: {
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
        // ── Display — terminal, compacto ──────────────────────
        "display-2xl": ["2.375rem", { lineHeight: "1.05" }],
        "display-xl":  ["1.875rem", { lineHeight: "1.1"  }],
        "display-lg":  ["1.375rem", { lineHeight: "1.2"  }],
        "display-md":  ["1.125rem", { lineHeight: "1.25" }],
        "display-sm":  ["0.875rem", { lineHeight: "1.3"  }],
        // ── Body — monospace needs more leading ───────────────
        "body-lg":     ["0.8125rem",{ lineHeight: "1.75" }],
        "body-md":     ["0.75rem",  { lineHeight: "1.75" }],
        "body-sm":     ["0.6875rem",{ lineHeight: "1.65" }],
        // ── Label — teletipo, tracking abierto ───────────────
        "label-lg":    ["0.625rem", { lineHeight: "1.5",  letterSpacing: "0.08em" }],
        "label-sm":    ["0.5625rem",{ lineHeight: "1.5",  letterSpacing: "0.1em"  }],
        "label-xs":    ["0.5rem",   { lineHeight: "1.4",  letterSpacing: "0.12em" }],
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
