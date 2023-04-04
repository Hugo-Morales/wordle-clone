/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxHeight:{
        'fill': '-webkit-fill-available',
      },
      gridTemplateRows: {
        'cube': 'repeat(6,1fr)',
      },
      gridTemplateColumns: {
        '5xl': 'repeat(5,1fr);',
      },
      colors: {
        'correct': '#6aaa64',
        'close': '#ecc40f',
        'error': '#787c7e',
        'darkMode': '#121213',
      },
    },
  },
  plugins: [],
}

