/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      colors: {
        primary: {
          50: '#dddcdc',
          100: '#bbb8ba',
          200: '#aba6a9',
          300: '#8b8186',
          400: '#685f63',
          500: '#574e52',
          600: '#453d41',
          700: '#332c30',
          800: '#201c1e',
          900: '#0e0c0d',
        },
        secondary: {
          50: '#f9f4dc',
          100: '#d4d0bb',
          200: '#b0ac9c',
          300: '#9e9b8d',
          400: '#7d7a6f',
          500: '#5c5b53',
          600: '#4d4b45',
          700: '#3e3d38',
          800: '#22211f',
          900: '#141413',
        },
        'b-yellow': '#fcba28',
        'b-green': '#0ba95b',
        'b-blue': '#12b5e5',
        'b-rose': '#f38ba3',
        'b-red': '#ed203d',
        'b-purple': '#7b5ea7',
        'b-magestic-purple': '#9d7dce',
        'b-orange': '#fc7428',
        'b-peach': '#f99157',
      },
    },
    plugins: [],
  }
}