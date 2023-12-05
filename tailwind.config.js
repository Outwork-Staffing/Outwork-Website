/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Plus Jakarta Sans', 'sans-serif'],
    },
    colors: {
      primary: '#EEF8F2',
      secondary: '#006931',
      heading: '#1E3C3A',
      body: '#1E3C3A',
      white: '#fff'
    },
  },
  plugins: [],
}

