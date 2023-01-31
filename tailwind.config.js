/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  mode: 'jit',
  plugins: [require('tailwind-scrollbar-hide')],
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
};
