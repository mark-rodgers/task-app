import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // TODO: use delay in animation definitions, and include the delay value in animation name
      animation: {
        "fade-in-up": "fadeInUp 2s ease-in-out",
        "fade-in-left": "fadeInLeft 1s ease-in-out",
      },
      keyframes: {
        // TODO: remove the delay in fadeInUp animation, this will be handled by the animation definition
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "50%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
