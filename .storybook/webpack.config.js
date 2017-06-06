/* eslint-disable no-param-reassign, global-require */

module.exports = baseConfig => {
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
          plugins: [require('../src/theme')({ appendVariables: true })],
        },
      },
    ],
  });

  return baseConfig;
};
