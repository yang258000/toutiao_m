const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({

  transpileDependencies: true,

  devServer: {

    port: 3000,

    open: true, // 浏览器自动打开

    host: 'localhost'

  },

  lintOnSave: false // 关闭eslint检查

})
