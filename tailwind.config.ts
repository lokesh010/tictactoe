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
        drawX: "drawX 2s ease forwards",
        drawO: "drawO 2s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
