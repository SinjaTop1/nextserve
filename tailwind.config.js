/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefcf8', // milk cream - lightest
          100: '#fdf8f0', // milk cream
          200: '#f7f1e8', // soft cream
          500: '#1f2937', // elegant dark gray/black
          600: '#111827',
          700: '#0f172a',
          800: '#030712', // deep black
          900: '#000000', // pure black
        },
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#059669', // elegant forest green - used sparingly
          600: '#047857',
          700: '#065f46',
        },
        cream: {
          50: '#fefcf8',
          100: '#fdf8f0',
          200: '#f7f1e8',
          300: '#f0e6d6',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#059669',
          600: '#047857',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
