const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          '87': '#0000DE'
        },
      }
    },
  },
  plugins: [plugin(function ({addBase, theme}){
    addBase({
      'h1': {
        fontSize: theme('fontSize.6xl')
      }
    })
  })],
}

