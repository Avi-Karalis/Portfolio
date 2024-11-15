import type { Config } from 'tailwindcss';
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            colors: {
                aizome: {
                    light: '#4C6B8B',  // Lighter aizome blue
                    DEFAULT: '#1B4965', // Traditional aizome blue
                    dark: '#0D2B3E',   // Darker aizome blue
                },
                white:{
                    light: '#e6e6e6',
                    DEFAULT: '#FFFFFF',
                    dark: '#C2C2C2'
                }
            },
            fontFamily: {
                sans: ['Noto Sans JP', 'sans-serif'],
            }
        },
    },
    plugins: [],
} satisfies Config