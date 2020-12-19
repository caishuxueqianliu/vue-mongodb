module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '././' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  lintOnSave: true,
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false
  },
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    https: false,
    hotOnly: false,
    proxy: {
      // '/api': {
      //   target: 'https://api.appstoreconnect.apple.com/',
      //   secure: false,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': ''
      //   }
      // },
      '/api1': {
        target: 'http://192.168.3.71:4000/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api1': ''
        }
      }
    }
  }
}
