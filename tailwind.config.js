const colors = {
  'french-pink': '#f69',
  'jet': '#333',
  'pale-goldenrod': '#e0ebaf',
  'vivid-lime-green': '#b8d200'
}

module.exports = {
  separator: '_',
  theme: {
    extend: {
      colors: {
        ...colors,
        'accent': colors['french-pink'],
        'tori': colors['pale-goldenrod'],
        'hover': colors['vivid-lime-green']
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
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.flex-center': {
          'justify-content': 'center',
          'align-items': 'center'
        }
      })
    }
  ]
}
