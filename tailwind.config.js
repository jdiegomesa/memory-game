/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.html"
  ],
  theme: {
    colors: {
        'one': '#3D5B81',
        'two': '#9BC0D9',
        'three': '#DFFBFC',
        'four': '#EE6B4D',
        'five': '#293241'
    },
    extend: {
      fontFamily:{
        Text: ['Poppins', 'sans-serif']
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

