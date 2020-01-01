module.exports = {
  pwa: {
    name: '亲苍霞',
    themeColor: '#4B91E1', // 主题色
    msTileColor: '#4B91E1' // Window 磁贴颜色
  },
  // 代理 '/api' 请求，参考 webpack 官方文档的配置
  devServer: {
    proxy: {
      '^/api': {
        changeOrigin: true,
        target: 'http://182.61.12.29:8080',
        pathRewrite: {
          '^/api': '/'
        }
      },
      '^/qcx': {
        changeOrigin: true,
        target: 'http://111.229.16.26:8888',
        pathRewrite: {
          '^/qcx': '/'
        }
      }
    }
  },

  publicPath: '/',
  outputDir: 'dist',
  assetsDir: './',
  runtimeCompiler: false,
  productionSourceMap: true,
  parallel: true
}
