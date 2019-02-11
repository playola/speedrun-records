const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/client/index'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '#assets': path.resolve(__dirname, './src/client/assets'),
      '#components': path.resolve(__dirname, './src/client/components'),
      '#containers': path.resolve(__dirname, './src/client/containers'),
      '#routes': path.resolve(__dirname, './src/client/routes'),
      '#services': path.resolve(__dirname, './src/client/services'),
      '#store': path.resolve(__dirname, './src/client/store'),
      '#style': path.resolve(__dirname, './src/client/styles'),
      '#utils': path.resolve(__dirname, './src/client/utils'),
    },
  },
};
