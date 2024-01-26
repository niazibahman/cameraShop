/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      transparent: colors.transparent,
      white: colors.white,
      black: colors.black,
      dark: "#323232",
      primery: "#B8AE99",
    },
    extend: {
      fontFamily: {
        iransans: ["iransans"],
        iransansbold: ["iransansbold"],
        iransanslight: ["iransanslight"],
        iransansmedium: ["iransansmedium"],
        iransansultralight: ["iransansultralight"]
      },
    },
  },
  plugins: [],
}