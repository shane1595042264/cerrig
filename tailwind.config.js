module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      scrollSnapType: {
        'y': 'scroll-snap-type: y mandatory;'
      },
      scrollSnapAlign: {
        'start': 'scroll-snap-align: start;'
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': '100% 0',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': '0 0',
          },
        },
      },
      'scroll-behavior': ['smooth'],
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 0deg at center, var(--tw-gradient-stops))',
      },
      linearBorderGradients: theme => ({
        directions: {
          't': 'to top',
          'tr': 'to top right',
          'r': 'to right',
          'br': 'to bottom right',
          'b': 'to bottom',
          'bl': 'to bottom left',
          'l': 'to left',
          'tl': 'to top left',
        },
        colors: {
          'red-yellow': ['#f00 0%', '#ff0 100%'],
          'green-blue': ['#0f0 0%', '#00f 100%'],
        },
      }),
      backgroundColor: {
        'rose-gold': '#B76E79',
        'magenta-red': '#FF3366',
        'dark': '#1F1F1F',
      },
      textColor: {
        'rose-gold': '#B76E79',
        'magenta-red': '#FF3366',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-border-gradients')(),
    function ({ addUtilities }) {
      const newUtilities = {
        '.scroll-snap-y': {
          'scroll-snap-type': 'y mandatory'
        },
        '.snap-start': {
          'scroll-snap-align': 'start'
        }
      }
      addUtilities(newUtilities)
    }
  ],
};
