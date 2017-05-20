/* eslint-disable global-require */

const theme = {
  'color-primary': 'green',
  'color-secondary': 'blue',
  'color-danger': 'red',
  'color-gray': '#ccc',
};

// Export configured plugin for use with `babel-plugin-css-modules-transform`.
module.exports = () =>
  require('postcss-custom-properties')({
    variables: theme,
  });
