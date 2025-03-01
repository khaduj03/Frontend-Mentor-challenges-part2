import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      imageBackground:{
        "icon":"[url('/images/icon-slider.svg')]"
      }
    },
  },
  plugins: [],
};

export default config;
