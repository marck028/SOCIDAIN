/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f4',
          100: '#fde6e9',
          200: '#fbccd5',
          300: '#f8a3b5',
          400: '#f26d8b',
          500: '#900033',
          600: '#82002e',
          700: '#6c0026',
          800: '#57001f',
          900: '#48001a',
          950: '#2a000d',
        },
        secondary: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#8e8e8e',
          500: '#737373',
          600: '#5c5c5c',
          700: '#4a4a4a',
          800: '#3d3d3d',
          900: '#363636',
          950: '#232323',
        },
        accent: {
          50: '#ffffff',
          100: '#fcfcfc',
          200: '#f9f9f9',
          300: '#f5f5f5',
          400: '#f0f0f0',
          500: '#ebebeb',
          600: '#e0e0e0',
          700: '#d6d6d6',
          800: '#cccccc',
          900: '#c2c2c2',
          950: '#b8b8b8',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Source Sans Pro"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};