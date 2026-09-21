/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        carbon: {
          900: '#0b0c10',
          800: '#14171d',
          700: '#1f242d',
          600: '#2b323e',
        },
        racing: {
          red: '#ef233c',
          crimson: '#d90429',
        },
        turbo: {
          amber: '#f77f00',
          yellow: '#fcbf49',
        },
        volt: {
          cyan: '#00f5d4',
          blue: '#00bbf9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
