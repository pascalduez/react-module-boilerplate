/* eslint-disable global-require */

const theme = require('./theme');

// Export configured plugin for use with `babel-plugin-css-modules-transform`.
module.exports = () =>
  require('postcss-custom-properties')({
    variables: theme,
    preserve: true,
  });
