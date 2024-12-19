/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'dm-serif': ['"DM Serif Display"', 'serif'],
      },
      fontSize: {
        '72px': '72px', // Custom font size
      },
      lineHeight: {
        '64px': '64.08px', // Custom line height
      },
      colors: {
        white: 'rgb(255, 255, 255)', // Ensure white color is available
      },
    },
  },
  plugins: [],
};
