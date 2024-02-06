import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FC6736",
        secondary: "#0C2D57",
      },
      keyframes: {
        slideDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        drawX: {
          from: {
            "stroke-dasharray": "0 200",
          },
          to: {
            "stroke-dasharray": "200 0",
          },
        },
        drawO: {
          from: {
            "stroke-dasharray": "0 200",
          },
          to: {
            "stroke-dasharray": "200 0",
          },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-out",
        drawX: "drawX 2s ease forwards",
        drawO: "drawO 2s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
