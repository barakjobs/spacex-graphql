const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    open: true,
    hot: true,
    compress: true,
    stats: 'errors-only',
  },
  //if you want to checked how library large then you can use this plugins
  // plugins: [
  //   new BundleAnalyzerPlugin({ analyzerMode: 'server', generateStatsFile: true, statsOptions: { source: false } }),
  // ],
});
