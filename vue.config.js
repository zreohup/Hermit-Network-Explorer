const { defineConfig } = require('@vue/cli-service')
const autoprefixer = require('autoprefixer')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  assetsDir:'assets',
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            // autoprefixer()
            // [
            //   'postcss-px-to-viewport',
            //   {
            //     unitToConvert: 'px', // 需要转换的单位，默认为"px"
            //     viewportWidth: 375, // 设计稿的视窗宽度
            //     unitPrecision: 5, // 单位转换后保留的精度
            //     propList: ['*', '!font-size'], // 能转化为 vw 的属性列表
            //     viewportUnit: 'vw', // 希望使用的视窗单位
            //     fontViewportUnit: 'vw', // 字体使用的视窗单位
            //     selectorBlackList: [], // 需要忽略的 CSS 选择器，不会转为视窗单位，使用原有的 px 等单位
            //     minPixelValue: 1, // 设置最小的转换数值，如果为 1 的话，只有大于 1 的值会被转换
            //     mediaQuery: false, // 媒体查询里的单位是否需要转换单位
            //     replace: true, // 是否直接更换属性值，而不添加备用属性
            //     exclude: undefined, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
            //     include: /\/src\//, // 如果设置了include，那将只有匹配到的文件才会被转换
            //     landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件
            //     landscapeUnit: 'vw', // 横屏时使用的单位
            //     landscapeWidth: 1125 // 横屏时使用的视窗宽度
            //   }
            // ]
          ]
        }
      }
    }
  },
  devServer: {
    port:8080,
    host: 'localhost',
    open:true,
    https:false,
    proxy: {  //代理服务器
      '/api': {
        target: 'http://158.247.237.78:8181',
        pathRewrite: { '^/api': '' },
        logLevel: "debug"
        // ws: true,
        // changeOrigin: true
      }
    }
  }
})
