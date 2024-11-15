import type { Config } from 'tailwindcss'

export default {
  content: [ './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aizome: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#B8DAFF',
          300: '#8FC5FF',
          400: '#66B0FF',
          500: '#235CA6',  // Primary Aizome Blue
          600: '#1B4A85',
          700: '#143964',
          800: '#0D2743',
          900: '#061522',
        }
      },
      fontFamily: {
        'japanese': ['"Noto Serif JP"', 'serif'],
        'japanese-sans': ['"Noto Sans JP"', 'sans-serif'],
      },
      backgroundImage: {
        'seigaiha': `radial-gradient(circle at 50% 50%, currentColor 2px, transparent 0)`,
      },
      animation: {
        'float': 'float var(--duration) ease-in-out infinite',
        'ink-spread': 'inkSpread 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config