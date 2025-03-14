/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        zinc: {
          800: "#27272a",
          900: "#18181b",
        },
      },
    },
  },
  plugins: [],
};
