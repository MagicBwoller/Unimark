/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm neighborhood green
        primary: {
          50: '#f4f8ef',
          100: '#e6efd9',
          200: '#cadfba',
          300: '#a9c98f',
          400: '#86ad6d',
          500: '#668f51',
          600: '#527542',
          700: '#405f35',
          800: '#354d30',
          900: '#2d402a',
          DEFAULT: '#405f35',
        },
        secondary: {
          50: '#f0fdf4', // Mint
          100: '#e8f5e9',
          200: '#c8e6c9',
          300: '#a5d6a7',
          400: '#81c784',
          500: '#66bb6a',
          600: '#4caf50',
          700: '#43a047',
          800: '#388e3c',
          900: '#2e7d32',
          DEFAULT: '#f0fdf4',
        },
        accent: {
          primary: '#008751', // Deep Emerald
          secondary: '#f0fdf4', // Mint
          light: '#f0fdf4',
          dark: '#1a3a3a',
        },
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#374151',
            a: {
              color: '#008751',
              '&:hover': {
                color: '#006840',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
};
