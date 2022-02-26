const colors = require("tailwindcss/colors");

module.exports = {
  content: ["src/**/*.{html,js,css}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      zinc: colors.zinc,
      red: colors.red,
      rose: colors.rose,
      primary: colors.teal,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      // xl: "1280px",
    },
    extend: {
      container: { center: true },
    },
  },
  plugins: [],
};
