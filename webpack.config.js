module.exports: {
  entry: __dirname + '/client/src/index.jsx',
  output: {
    path: __dirname + '/client/dist'
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/present-react']
          }
        }
      }
    ]
  }
}