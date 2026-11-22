/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        ink: '#080b14',
        panel: '#101625',
        violet: '#9b8cff',
        cyan: '#71e4df',
      },
    },
  },
  plugins: [],
}