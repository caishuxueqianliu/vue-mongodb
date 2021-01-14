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
      '/api1': {
        target: 'http://106.14.40.150:3691/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api1': ''
        }
      },
      '/api2': {
        target: 'http://localhost:4000/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api2': ''
        }
      },
      '/api': {
        target: 'https://api.appstoreconnect.apple.com/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
