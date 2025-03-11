/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.{html,js}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
    './*.{html,js}'
  ],
  theme: {
    colors: {
      primary: 'var(--primary)',
      transparent: 'transparent',
      secondary: 'var(--secondary)',
      'beige': 'var(--beige)',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'black':'#000000'
    },
  },
}

