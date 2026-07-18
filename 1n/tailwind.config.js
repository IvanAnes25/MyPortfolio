/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.{html,js}", "./**/*.{html,js}"],
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

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        bevan: ['Bevan', 'serif'],
      },
    },
  },
};