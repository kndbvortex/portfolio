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
      animation: {
        "custom-animation": "bounce 1s infinite",
      },
      animationDelay: {
        0: "0ms",
        300: "300ms",
        600: "600ms",
      },
    },
  },
  plugins: [],
};
