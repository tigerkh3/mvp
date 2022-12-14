const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path:path.resolve(__dirname, "src", "dist"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
}