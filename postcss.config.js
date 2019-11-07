module.exports = ({ file, options, env }) => ({
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      features: {
        'nesting-rules': true
      }
    },
    'cssnano': {}
  }
});
