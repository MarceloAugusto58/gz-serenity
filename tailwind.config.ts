import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream:  "#F5F0E8",
        purple: {
          DEFAULT: "#3D1F5C",
          light:   "#5A2D8A",
          dark:    "#2A1540",
          muted:   "#7B5FA0",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light:   "#D4B96A",
          dark:    "#A8872E",
        },
        offwhite: "#FAF8F4",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter:    ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(3.5rem,8vw,6rem)", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(2.5rem,5vw,4rem)", { lineHeight: "1.0" }],
      },
      animation: {
        "cursor-ping": "cursor-ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
      },
      keyframes: {
        "cursor-ping": {
          "75%,100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
