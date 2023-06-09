module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
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
  plugins: [],
};
