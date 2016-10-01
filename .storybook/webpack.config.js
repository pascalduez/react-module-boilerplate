module.exports = (baseConfig) => {
  baseConfig.module.loaders.push({
    test: /\.css?$/,
    loaders: [
      'style',
      'css?modules&localIdentName=[name]-[local]_[hash:base64:5]',
    ],
  });

  return baseConfig;
};
