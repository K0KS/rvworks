/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: '#ffc400',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
