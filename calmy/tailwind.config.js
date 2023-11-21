/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Arial", "sans-serif"],
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#4349FF",
        primaryDark: "#2A2FBA",
        primaryLight: "#A4A7FF",
        black: "#0A0C1C",
        white: "#ffffff",
        grey: "#7C7F9A",
        bgDark: "#0000000D",
      },
      backgroundImage: {
        "main-bg": "url('/src/images/background.svg')",
      },
    },
  },
  plugins: [],
};
