/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures Tailwind purges unused styles in your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
