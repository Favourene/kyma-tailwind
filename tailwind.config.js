module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        sm: '30vh',
        md: '50vh',
        lg: '70vh',
        xl: '95vh',
      },
      width: {
        '3/7': '45%',
        '4/7': '30%',
        '5/7': '55%',
        '6/7': '32%'
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
      smm: { max: '500px' },
      // => @media (max-width: 639px) { ... }
      smmm: { max: '330px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
