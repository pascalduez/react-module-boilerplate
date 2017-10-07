/* eslint-disable global-require */

const theme = require('./theme');

// Export configured plugin for use with `babel-plugin-css-modules-transform`.
module.exports = config =>
  require('postcss-custom-properties')(Object.assign(
    {
      variables: theme,
      preserve: true,
    },
    config
  ));
