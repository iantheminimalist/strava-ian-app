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
          '85%': { opacity: '0.85', transform: 'translateY(-0.15rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeInAndUp: 'fadeInAndUp 1s ease-in-out forwards'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
      
    },
    
  },
  plugins: [ 
    require('@tailwindcss/typography'),
  ],
}