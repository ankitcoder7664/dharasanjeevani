/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agri: {
          darkest: '#081c15',
          forest: '#1b4332',
          deep: '#2d6a4f',
          mid: '#40916c',
          sage: '#52b788',
          mint: '#74c69d',
          soft: '#95d5b2',
          light: '#b7e4c7',
          cream: '#fefae0',
          olive: '#606c38',
          earth: '#8d5b4c',
          soil: '#583101'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      }
    },
  },
  plugins: [],
}
