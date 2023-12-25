/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInAndUp: {
          '0%': { opacity: '0', transform: 'translateY(3rem)' },
          '65%': { opacity: '0.85', transform: 'translateY(-0.15rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeInAndUp: 'fadeInAndUp 1s ease-in-out forwards'
      }
    },
  },
  plugins: [ 
    require('@tailwindcss/typography'),
  ],
}