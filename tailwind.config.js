/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: '#03030A',
          black: '#050510',
          navy: '#0B1028',
          deep: '#10163A',
          purple: '#5426A8',
          violet: '#A56BFF',
          pink: '#FF82B2',
          rose: '#FF4E88',
          gold: '#FFD88A',
          amber: '#F5B041',
          white: '#F6F3FF',
          glass: 'rgba(16, 22, 58, 0.45)',
          'glass-border': 'rgba(165, 107, 255, 0.25)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        handwriting: ['"Dancing Script"', '"Great Vibes"', 'cursive'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px rgba(255, 216, 138, 0.35)',
        'glow-violet': '0 0 30px rgba(165, 107, 255, 0.35)',
        'glow-pink': '0 0 30px rgba(255, 130, 178, 0.35)',
        'glow-box': '0 10px 40px -10px rgba(84, 38, 168, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
