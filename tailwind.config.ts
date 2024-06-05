import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "2md": { max: "950px" },
      // => @media (max-width: 950px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        // added new 4 column grid as new4
        repeat4: "repeat(4, minmax(100px, 500px))",
        repeatFit: "repeat(auto-fill,minmax(min-content,1fr))",
        responsive270: "repeat(auto-fill,minmax(270px,1fr))",
      },
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
