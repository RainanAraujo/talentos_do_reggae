import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inria-sans": "var(--font-inria-sans)",
        anton: "var(--font-anton)",
      },
      colors: {
        orange: "#F2A543",
        green: "#40AA4B",
        "green-600": "#379A41",
        red: "#C52C2B",
        "red-300": "#FD7675",
        yellow: "#FCFC08",
      },

      animation: {
        pulse: "pulse 5s ease-in 0s infinite ",
        fadeIn: "fadeIn 1s ease-in 0s normal forwards",
        slideToLeft: "slideToLeft 0.3s ease-in 0s normal",
        slideToRight: "slideToRight 0.3s ease-in 0s normal",
        slideToRightFade: "slideToRightFade 0.3s ease-in-out 0s normal",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        pulse: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
          "100%": { transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideToLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideToRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideToRightFade: {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "70%": {
            transform: "translateX(90)",
            opacity: "0.1",
          },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    require("tailwindcss-animate"),
  ],
};
export default config;
