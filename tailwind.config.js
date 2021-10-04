module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    styled: true,
    themes: {
      'default': {
        'orange': {
          'DEFAULT': '#e05126',
          'secondary': '#f26747',
          'tertiary': '#f18251',
          },
        'brown': {
          'DEFAULT': '#231f20',
          'secondary': '#3c180a',
          'tertiary': '#61230a',
        },
        'green': {
          'DEFAULT': '#509f73',
          'secondary': '#ddebe4',  
        },
        'white': {
          'DEFAULT': '#ededed'          
        },
        'info': '#0675d0',
        'success': '#06b248',
        'warning': '#ff9900',
        'error': '#b32a00',
      }
    },
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  }
}