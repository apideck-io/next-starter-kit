const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const config = require('@apideck/components/tailwind-config')

module.exports = config({
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'basier-circle': ['Basier Circle', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        gray: colors.slate
      }
    }
  },
  plugins: []
})
