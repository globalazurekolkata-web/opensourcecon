/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#52D237',
          'green-light': '#E8FBDE',
          'green-dark': '#3DB82A',
        },
        dark: '#0B1020',
        'gray-secondary': '#64748B',
        'card-border': '#E5E7EB',
      },
      fontFamily: {
        heading: ['"Inter Tight"', '"Inter"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        container: '1180px',
      },
      borderRadius: {
        card: '20px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
