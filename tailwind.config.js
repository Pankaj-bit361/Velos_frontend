/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0A0A0B',
          800: '#121316',
          700: '#1A1B1F',
          600: '#232428',
        },
        neon: {
          green: '#76FF03',
          blue: '#00E5FF',
          purple: '#9C27B0',
        },
        gray: {
          750: '#2A2B2F',
          650: '#3A3B3F',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(to bottom, rgba(18,19,22,0.8), rgba(10,10,11,1))',
      },
      animation: {
        'border-rotate': 'border-rotate 4s linear infinite',
      },
    },
  },
  plugins: [],
}