import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007a6d',
        secondary: '#039a8a',
        background: {
          light: '#f8fafc',
          DEFAULT: '#1e293b',
          dark: '#0f172a',
        },
        text: {
          light: '#1e293b',
          DEFAULT: '#f8fafc',
          dark: '#e2e8f0',
        },
        accent: {
          light: '#d1fae5',
          DEFAULT: '#10b981',
          dark: '#065f46',
        },
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-merriweather)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;