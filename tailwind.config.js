/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        primary: '#46237A',
        secondary: '#203855',
        accent: '#FFEEA5',
        warning: '#F59E0B',
        dark: '#1A1A1A',
        paper: '#F4F4F4',
        white: '#FFFFFF',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      borderWidth: {
        '4': '4px',
      },
      boxShadow: {
        'brutal': '6px 6px 0px 0px #1A1A1A',
        'brutal-active': '2px 2px 0px 0px #1A1A1A',
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}