/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'vpcolor': '#8068a4',
        'bgvp':'#f0e8f9',
        'hovervp':'#a594c1',
      },
      backgroundImage:{
        'parallax':'url("../public/asserts/sixcolor.webp")',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-glow': {
          textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 0, 255, 0.3), 0 0 50px rgba(255, 0, 255, 0.2), 0 0 60px rgba(255, 0, 255, 0.1)',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

