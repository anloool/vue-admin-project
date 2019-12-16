const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: './',
    outputDir: 'dist',

    // 线上构建的时候，禁用sourcemap
    productionSourceMap: false,

    assetsDir: 'static',

    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('views', resolve('src/views'))
            .set('types', resolve('src/types'))
            .set('components', resolve('src/components'));
        config.module
            .rule('svg-sprite')
            .use('svgo-loader')
            .loader('svgo-loader')
    },

    // vue - cli3中使用全局less文件， 需要执行npm i style - resources - loader vue - cli - plugin - style - resources - loader - D
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: ['src/assets/css/common.less']
        }
    },
    // 跨域
    // devServer: {
    //     host: '0.0.0.0',
    //     port: 8080,
    //     proxy: 'http://172.20.200.90:8099'
    // }
    devServer: {
        host: 'localhost',
        port: '8080',
        hot: true,
        open: true,
        overlay: {
            warning: false,
            error: true
        },
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: process.env.VUE_APP_BASE_API,
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        }
    }
}