/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cursive': ['Dancing Script', 'cursive'],
        'sans': ['Nunito', 'sans-serif'],
      },
      colors: {
        'rose-custom': '#ff3366',
        'japan-red': '#a61a52',     // Dark Torii Gate Red
        'japan-pink': '#ff7aa3',    // Cherry Blossom Pink
        'japan-sky': '#ffd6e7',     // Soft Sky Pink
      }
    },
  },
  plugins: [],
}