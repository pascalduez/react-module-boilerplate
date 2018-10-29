/* eslint-disable no-param-reassign */

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
      },
    ],
  });

  return baseConfig;
};
