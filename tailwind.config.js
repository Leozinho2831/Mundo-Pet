/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/*.js', '*.html'],
  theme: {
    extend: {
      screens: {
        'mobile': '480px',
        'tablet': '768px',
        'desktop': '1024px'
      },

      colors: {
        content: {
          primary: '#FFFFFF',
          secondary: '#98959D',
          tertiary: '#666666',
          brand: '#9282FA',
          paragraph: '#98959D',
        },

        background: {
          primary: '#151515',
          secondary: '#1E1E1E',
          tertiary: '#23242C',
          brand: '#9282FA',
          highlights: '#BDB4FA',
          page: '#14151D',
          logo: '#2E2C30',
          rodape: '#23242c',
        },

        border: {
          primary: '#3E3C41',
          secondary: '#86818C',
          brand: '#9282FA',
          divisor: '#353339',
        },

        accent: {
          blue: '#027DF0',
          blueLight: '#16487A',
          yellow: '#F0DC02',
          yelloLight: '#756E1B',
          orange: '#F09102',
          orangeLight: '#75501B',
        }
      },

      fontFamily: {
        serif: ['Inter Tight', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },

      boxShadow: {
        blur: '0 0 40px 0 rgba(146, 130, 250, 0.3)'
      }
    },
  },
  plugins: [],
}