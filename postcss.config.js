module.exports = {
  plugins: [
    [
      'postcss-preset-env',
      {
        // Options
      },
      require('postcss-nested'),
      require('autoprefixer'),
    ],
  ],
};
