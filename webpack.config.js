const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // nome correto e importação sem espaços

module.exports = {
  target: 'web',
  mode: 'development',

  entry: path.resolve(__dirname, 'src', 'main.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3333,
    open: true,
    liveReload: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      favicon: path.resolve("src", "assets", "scissors.svg")
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'), // de onde copia
          to: path.resolve(__dirname, 'dist/src/assets') // para onde copia (mantendo o "src")
        }
      ]
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/, // Regex para arquivos .css
        use: [
          'style-loader', // Adiciona o CSS ao DOM
          'css-loader'    // Interpreta os arquivos CSS
        ]
      },
      {
        test: /\.js$/, // Regex para arquivos .js
        exclude: /node_modules/, // Exclui a pasta node_modules
        use: {
          loader: "babel-loader", // Usando o Babel para transpilar JavaScript
          options: {
            presets: ["@babel/preset-env"] // Transpilar com o preset-env
          }
        }
      }
    ]
  }
};

