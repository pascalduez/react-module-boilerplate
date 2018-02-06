/* eslint-disable no-param-reassign, global-require */

module.exports = baseConfig => {
  // Replace storybook baseConfig rule.
  baseConfig.module.rules.splice(0, 1, {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['./babel.config.js'],
        },
      },
    ],
  });

  baseConfig.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]-[local]_[hash:base64:5]',
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            ctx: {
              appendVariables: true,
            },
          },
        },
      },
    ],
  });

  return baseConfig;
};
