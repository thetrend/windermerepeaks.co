module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'wp-orange-primary': '#E05126',
        'wp-orange-secondary': '#F26747',
        'wp-orange-tertiary': '#F18251',
        'wp-brown-primary': '#231F20',
        'wp-brown-secondary': '#3C180A',
        'wp-brown-tertiary': '#61230A', // not in logo
        'wp-sage-green-primary': '#509F73',
        'wp-sage-green-secondary': '#DDEBE4',
        'wp-cream-white': '#EDEDED'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
