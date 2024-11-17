/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        content: {
          primary: '#FFFFFF',
          secondary: '#98959D',
          tertiary: '#666666',
          brand: '#9282FA',
        },

        background: {
          primary: '#151515',
          secondary: '#1E1E1E',
          tertiary: '#23242C',
          brand: '#9282FA',
          highlights: '#BDB4FA',
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
        interTight: ['Inter Tight', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.interTight': {
          fontFamily: theme('fontFamily.interTight'),
          fontSize: '1rem',
          fontWeight: '600',
          lineHeight: '2rem',
        },

        '.pSmall': {
          fontFamily: theme('fontFamily.inter'),
          fontSize: '0.75rem',
          fontWeight: '500',
          lineHeight: '1rem',
        },

        '.pMedium': {
          fontFamily: theme('fontFamily.inter'),
          fontSize: '0.875rem',
          fontWeight: '500',
          lineHeight: '1.5rem',
        },

        '.lSmall': {
          fontFamily: theme('fontFamily.inter'),
          fontSize: '0.75rem',
          fontWeight: '700',
          lineHeight: '1rem',
        },

        '.lMedium': {
          fontFamily: theme('fontFamily.inter'),
          fontSize: '0.875rem',
          fontWeight: '700',
          lineHeight: '1.5rem',
        },

        '.lLarge': {
          fontFamily: theme('fontFamily.inter'),
          fontSize: '1rem',
          fontWeight: '700',
          lineHeight: '1.5rem',
        },

        '.link': {
          fontFamily: theme('fontFamily.inter'),
          fontSize: '0.75rem',
          fontWeight: '500',
          lineHeight: '1.5rem',
        },
      });
    },
  ],
}