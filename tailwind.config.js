/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // colors: {
      //   'weather-primary': '#00668A',
      //   'weather-secondary': '#004E71',
      // },
      fontFamily: {
        LexendDeca: ['Lexend Deca', 'sans-serif'],
      },
    },

    container: {
      padding: '2rem',
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    theme: ['night', 'light', 'cupcake'],
    darkTheme: 'night', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true,
  },
};
