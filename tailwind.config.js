/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#56D64B',
          'green-light': '#E8FBDE',
          'green-dark': '#298500',
          'green-glow': 'rgba(86, 214, 75, 0.15)',
        },
        dark: '#111827',
        darkBg: '#12180F',
        'gray-secondary': '#6B7280',
        'card-border': '#E5E7EB',
        surface: '#FAFFFE',
      },
      fontFamily: {
        heading: ['"Mona Sans"', 'sans-serif'],
        body: ['"Mona Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        container: '1240px',
      },
      screens: {
        xs: '360px',
      },
      borderRadius: {
        card: '24px',
        pill: '9999px',
      },
      boxShadow: {
        soft: '0 2px 16px rgba(0, 0, 0, 0.04)',
        card: '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.06)',
        glow: '0 0 40px rgba(86, 214, 75, 0.15)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'orbit-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'marquee': 'marquee 25s linear infinite',
        'orbit': 'orbit 30s linear infinite',
        'orbit-reverse': 'orbit-reverse 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
