const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 3000
    },
     plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
