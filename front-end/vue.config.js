module.exports = {
  devServer: {
    proxy: 'http://localhost:3000',
    disableHostCheck: true //Ok wait I think it works...
  }
}
