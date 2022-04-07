module.exports = {
  devServer: {
    proxy: 'http://localhost:4000',
    disableHostCheck: true //Ok wait I think it works...
  }
}
