/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'correct': '#6aaa64',
        'close': '#ecc40f',
        'error': '#787c7e',
      },
    },
  },
  plugins: [],
}

