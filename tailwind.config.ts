import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0A0A0A',
        'secondary-dark': '#1A1A1A',
        'accent-gold': '#D4AF37',
        'accent-green': '#2A4A2A',
        'text-primary': '#E8E8E8',
        'sepia-overlay': '#704214',
        'static-noise': '#808080',
      },
      fontFamily: {
        'retro-game': ['VT323', '"Press Start 2P"', 'monospace'],
        'body': ['Inter', 'Roboto Mono', 'monospace'],
        'accent': ['Bebas Neue', 'sans-serif'],
      },
      animation: {
        'tv-turn-on': 'tvTurnOn 0.5s ease-out',
        'scan-lines': 'scanLines 8s linear infinite',
        'static-noise': 'staticNoise 0.2s infinite',
        'glitch': 'glitch 2.5s infinite',
        'flicker': 'flicker 3s linear infinite',
      },
      keyframes: {
        tvTurnOn: {
          '0%': { transform: 'scale(0, 0.005)', filter: 'brightness(4)' },
          '33%': { transform: 'scale(1, 0.005)', filter: 'brightness(4)' },
          '66%': { transform: 'scale(1, 0.005)', filter: 'brightness(4)' },
          '100%': { transform: 'scale(1, 1)', filter: 'brightness(1)' },
        },
        scanLines: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        staticNoise: {
          '0%, 100%': { opacity: '0.02' },
          '50%': { opacity: '0.04' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92.5%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
}
export default config