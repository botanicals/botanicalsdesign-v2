const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rose: { DEFAULT: '#C73E7B', dark: '#BA1F6C', light: '#E25991' },
        green: '#006E31',
        blue: { DEFAULT: '#007097', dark: '#075670', fade: '#BACADA' },
      },
      fontFamily: {
        display: ['Allura', 'cursive'],
        displayAlt: ['Norican', 'cursive'],
        sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
