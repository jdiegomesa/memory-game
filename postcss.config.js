module.exports = {
  plugins:{
    'postcss-import': {},
    'postcss-nested': {},
    // 'tailwindcss/nesting': {},
    'postcss-custom-media' : {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-sort-media-queries': {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}