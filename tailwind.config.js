/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#0a0a0f',
        'space-purple': '#1a1a2e',
        'neon-cyan': '#00ffff',
        'neon-purple': '#9d4edd',
        'cosmic-blue': '#240046',
        'star-white': '#f8f9fa',
        'border': '#1a1a2e', // Added missing border color definition
      },
      fontFamily: {
        'space': ['Orbitron', 'monospace'],
        'cosmic': ['Exo 2', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'star-twinkle': 'star-twinkle 3s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 255, 255, 0.8)' },
        },
        'star-twinkle': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
}