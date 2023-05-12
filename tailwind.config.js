// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        'rose-gold': '#B76E79',
        'magenta-red': '#FF3366',
        'dark': '#1F1F1F', // Add this line
      },
      textColor: {
        'rose-gold': '#B76E79',
        'magenta-red': '#FF3366',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
