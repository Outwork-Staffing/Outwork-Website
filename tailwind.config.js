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
      primary: '#50B780',
      primaryHover: '#38805a',
      secondary: '#EEF8F2',
      heading: '#1E3C3A',
      body: '#1E3C3A',
      white: '#fff',
      dark: '#152a29'
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

