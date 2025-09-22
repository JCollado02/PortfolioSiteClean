// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        neonPurple: '#c084fc',
        neonBlue: '#60a5fa',
      },
      dropShadow: {
        neon: '0 0 10px rgba(192, 132, 252, 0.8)',
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-vertical': {
          '0%, 8%': { transform: 'translateY(0)' },          // Hello
          '12%, 20%': { transform: 'translateY(-100%)' },    // Bonjour
          '24%, 32%': { transform: 'translateY(-200%)' },    // Hola
          '36%, 44%': { transform: 'translateY(-300%)' },    // Ciao
          '48%, 56%': { transform: 'translateY(-400%)' },    // こんにちは
          '60%, 68%': { transform: 'translateY(-500%)' },    // 안녕하세요
          '72%, 80%': { transform: 'translateY(-600%)' },    // Привет
          '84%, 92%': { transform: 'translateY(-700%)' },    // مرحبا
          '96%, 100%': { transform: 'translateY(-800%)' },   // Olá → then reset
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        'slide-vertical': 'slide-vertical 18s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
