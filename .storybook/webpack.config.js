/* eslint-disable no-param-reassign, global-require */

module.exports = (baseConfig) => {
  baseConfig.module.loaders.push({
    test: /\.css$/,
    loaders: [
      'style',
      'css?modules&localIdentName=[name]-[local]_[hash:base64:5]&importLoaders=1',
      'postcss',
    ],
  });

  baseConfig.postcss = [
    require('../src/theme')(),
  ];

  return baseConfig;
};
