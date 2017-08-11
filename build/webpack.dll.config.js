const webpack = require('webpack');
const library = '[name]_lib';
const path = require('path');

module.exports = {
  entry: {
    vendors: ['vue']
  },

  output: {
    filename: '[name].[hash].dll.js',
    path: path.resolve(__dirname,'dist/'),
    library
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, './dist/static/js/app.[hash].js'),
      filename:"[name].[hash].js",
      // This must match the output.library option above
      name: library
    }),
  ],
}
