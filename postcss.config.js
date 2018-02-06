/* eslint-disable global-require */

const theme = require('./src/theme');

module.exports = ({ options }) => ({
  plugins: {
    'postcss-custom-properties': {
      variables: theme,
      preserve: true,
      appendVariables: options.appendVariables,
    },
    autoprefixer: {},
  },
});
