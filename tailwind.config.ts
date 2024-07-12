import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    colors:{
      "light-black":"#1E2031",
      "light-green":"#C5FCC3",
      "sky-blue":"#AEEFF4",
      "dark-green":"#4CDFB2",
      "orange":"#FFB685",
      "light-orange":"#FFB6851A",
    }
    },
  },
  plugins: [],
};
export default config;
