/* eslint-disable global-require */

const theme = require('./theme');

// Export configured plugin for use with `babel-plugin-css-modules-transform`.
module.exports = options =>
  require('postcss-preset-env')(Object.assign({
    features: {
      'css-variables': {
        variables: theme,
        preserve: true,
      },
    },
    options,
  }));
