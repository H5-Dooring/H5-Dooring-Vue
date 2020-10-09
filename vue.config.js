module.exports = {
    chainWebpack: config => {
      // 修改url loader默认配置
      config.module
        .rule('images')
          .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 10240 }))
      // 其他基于环境的webpack配置
      if (process.env.NODE_ENV === 'production') {
        // 为生产环境修改配置...
      } else {
        // 为开发环境修改配置...
      }
    },
    css: {
        loaderOptions: {
          // 给 less-loader 传递 Less.js 相关选项
          less:{
            globalVars: {
              primary: '#06c'
            }
          }
        }
    },
    // 优化生产构建
    parallel: require('os').cpus().length > 2
  }