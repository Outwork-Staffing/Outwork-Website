/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b0e6b3',
        primaryHover: '#38805a',
        secondary: '#EEF8F2',
        heading: '#284646',
        body: '#1E3C3A',
        white: '#fff',
        dark: '#132220'
      },
    },
    fontFamily: {
      'sans': ['Plus Jakarta Sans', 'sans-serif'],
    },

  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

