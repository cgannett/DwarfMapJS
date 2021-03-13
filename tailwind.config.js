const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'purple-light': '#fcfaff',
      purple: '#639',
      'purple-dark': '#362066',
    },
    fontFamily: {
      sans: ['ManropeVariable', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      body: ['1.125rem', 1.5],
      h1: ['2.25rem', 1.5],
      header: ['2.5rem', 1.5],
      'body-mobile': ['1rem', 1.5],
      'h1-mobile': ['1.5rem', 1.5],
      'header-mobile': ['1.5rem', 1.5],
    },
    extend: {
      outline: theme => ({
        DEFAULT: [`3px solid ${theme('colors.purple-light')}`, '2px'],
      }),
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        17: 'repeat(17, minmax(0, 1fr))',
        33: 'repeat(33, minmax(0, 1fr))',
        65: 'repeat(65, minmax(0, 1fr))',
        129: 'repeat(129, minmax(0, 1fr))',
        257: 'repeat(257, minmax(0, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
}
