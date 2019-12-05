const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: true,

  chainWebpack: config => {
    // 设置别名
    config.resolve.alias
      .set('@', resolve('src'))
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/css/common.less')]
    }
  },
  devServer: {
    // 打开浏览器窗口
    open: true
  }
}
