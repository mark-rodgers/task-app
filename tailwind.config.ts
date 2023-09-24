import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "fade-in-up": "fadeInUp 1s ease-in-out",
        "fade-in-down": "fadeInDown 1s ease-in-out",
        "fade-in-left": "fadeInLeft 1s ease-in-out",
        "fade-in-right": "fadeInRight 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDelay: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUpDelay: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "50%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDownDelay: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "50%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeftDelay: {
          "0%": { opacity: "0", transform: "translatex(30px)" },
          "50%": { opacity: "0", transform: "translatex(30px)" },
          "100%": { opacity: "1", transform: "translatex(0)" },
        },
        fadeInRightDelay: {
          "0%": { opacity: "0", transform: "translatex(-30px)" },
          "50%": { opacity: "0", transform: "translatex(-30px)" },
          "100%": { opacity: "1", transform: "translatex(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
