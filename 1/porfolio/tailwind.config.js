/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bevan: ['Bevan', 'serif'],
        erica: ['Erica One', 'cursive'],
      },
    },
  },
  plugins: [],
}
