module.exports = {
  separator: '_',
  theme: {
    extend: {
      colors: {
        '333': '#333',
        'f69': '#f69',
        'tori': '#e0ebaf',
        'hover': '#b8d200'
      },
      screens: {
        'portrait': {'raw': '(orientation: portrait)'}
      },
      width: {
        '1-3rd': 'calc(100% / 3)'
      },
      minHeight: {
        'half-screen': '50vh'
      },
      fontFamily: {
        'body': ['Noto Sans JP', 'sans-serif'],
        'cute': ['Cute Font', 'cursive'],
        'nicomoji': ['Nico Moji']
      },
      lineHeight: {
        '3-quarters': '.75'
      }
    }
  },
  variants: {
    margin: ['responsive', 'first', 'last']
  },
  plugins: []
}
