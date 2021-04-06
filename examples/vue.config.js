
const path = require('path');
// const vConsolePlugin = require('vconsole-webpack-plugin'); // 引入 移动端模拟开发者工具 插件 （另：https://github.com/liriliri/eruda）
// var utils = require('./utils')
// var config = require('../config')
var webpack = require('webpack')
// const CompressionPlugin = require('compression-webpack-plugin'); //Gzip
// const zopfli = require("@gfx/zopfli");//zopfli压缩
// const BrotliPlugin = require("brotli-webpack-plugin");//brotli压缩
// const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //Webpack包文件分析器
const CopyWebpackPlugin = require('copy-webpack-plugin')
// var vueLoaderConfig = require('./vue-loader.conf')
console.log(`      
*        ┏┓   ┏┓+ +
*       ┏┛┻━━━┛┻┓ + +
*       ┃      ┃  
*       ┃   ━   ┃ ++ + + +
*       ████━████  ┃+
*       ┃       ┃ +
*       ┃   ┻   ┃
*       ┃      ┃ + +
*       ┗━┓   ┏━┛
*         ┃   ┃           
*         ┃   ┃ + + + +
*         ┃   ┃    Code is far away from bug with the animal protecting       
*         ┃   ┃ +     神兽保佑,代码无bug  
*         ┃   ┃
*         ┃   ┃  +         
*         ┃    ┗━━━┓ + +
*         ┃        ┣┓
*         ┃       ┏┛
*         ┗┓┓┏━┳┓┏┛ + + + +
*          ┃┫┫ ┃┫┫
*          ┗┻┛ ┗┻┛+ + + +`)
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    //访问路径
    publicPath: process.env.VUE_APP_STATIC_SERVER,
    // publicPath: '/',
    assetsDir:'static',//资源路径
    lintOnSave:true,    
    configureWebpack:config=>{
      config.externals={
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'element-ui': 'ELEMENT',
            'axios': 'axios',
            'moment':'moment',
            'big.js':'Big',
            'qs':'Qs',
        }
        config.resolve={
            extensions: ['.js', '.vue', '.json','.less'],
            alias: {
            //   'vue$': 'vue/dist/vue.esm.js',
              '@': resolve('src'),
              '@com': resolve('components'),
              '@com_en': resolve('components_en'),
            }
        },
        config.plugins=[...config.plugins,
          // new webpack.optimize.CommonsChunkPlugin('common.js'),
          new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",
          }),
          new CopyWebpackPlugin([
            { from: 'components/**/*' },
            { from: 'components_en/**/*'},
          ])
        ]
        //生产and测试环境
		let pluginsPro = [
      // 			new CompressionPlugin({ //文件开启Gzip，也可以通过服务端(如：nginx)(https://github.com/webpack-contrib/compression-webpack-plugin)
      // 				filename: '[path].gz[query]',
      // 				algorithm: 'gzip',
      // 				test: productionGzipExtensions,
      // 				threshold: 8192,
      // 				minRatio: 0.8,
      // 			}),
            // new CompressionPlugin({
            //   algorithm(input, compressionOptions, callback) {
            //     return zopfli.gzip(input, compressionOptions, callback);
            //   },
            //   compressionOptions: {
            //     numiterations: 15
            //   },
            //   minRatio: 0.8,
            //   test: productionGzipExtensions
            // }),
            // new BrotliPlugin({
            //   test: productionGzipExtensions,
            //   minRatio: 0.8
            // }),
            // Webpack包文件分析器(https://github.com/webpack-contrib/webpack-bundle-analyzer)
            // new BundleAnalyzerPlugin(),
          ];
          //开发环境
          let pluginsDev = [
            //移动端模拟开发者工具(https://github.com/diamont1001/vconsole-webpack-plugin  https://github.com/Tencent/vConsole)
            // new vConsolePlugin({
            //   filter: [], // 需要过滤的入口文件
            //   enable: true // 发布代码前记得改回 false
            // }),
          ]
          if(process.env.NODE_ENV !== 'development') { // 为生产环境修改配置...process.env.NODE_ENV !== 'development'
    //			config.entry.app = ['babel-polyfill', './src/main.js'];
    //			config.externals = {
    //				'vue': 'Vue',
    //				'vue-router': 'VueRouter',
    //				'iview': 'iview',
    //				'vuex': 'vuex',
    //			}
          config.plugins = [...config.plugins, ...pluginsPro];
        } else {
          // 为开发环境修改配置...
          config.plugins = [...config.plugins, ...pluginsDev];
        }
    },
    // 项目部署的基础路径
    // 我们默认假设你的应用将会部署在域名的根部，
    // 比如 https://www.my-app.com/
    // 如果你的应用时部署在一个子路径下，那么你需要在这里
    // 指定子路径。比如，如果你的应用部署在
    // https://www.foobar.com/my-app/
    // 那么将这个值改为 `/my-app/`
    // baseUrl: '/',
 
    // 将构建好的文件输出到哪里
    outputDir: 'dist',
 
    // 是否在保存的时候使用 `eslint-loader` 进行检查。
    // 有效的值：`ture` | `false` | `"error"`
    // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
    lintOnSave: true,
 
    // 使用带有浏览器内编译器的完整构建版本
    // 查阅 https://cn.vuejs.org/v2/guide/installation.html#运行时-编译器-vs-只包含运行时
   // compiler: false,
    runtimeCompiler: true, //关键点在这
    // 调整内部的 webpack 配置。
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
    chainWebpack:config=>{
      // config
      // .module
      // .rule("images")
      // .test(/\.(jpe?g|png|gif|webp)(\?.*)?$/)
      // .use("url-loader")
      // .loader("url-loader")
      // .options({
      //   limit:2048000,
      //   // 以下配置项用于配置file-loader
      //   // 根据环境使用cdn或相对路径
      //   publicPath: process.env.NODE_ENV !== 'development' ? 'https://static.exnet.com/static' : '',
      //   // 将图片打包到dist/img文件夹下, 不配置则打包到dist文件夹下
      //   // outputPath: 'img',
      //   // 配置打包后图片文件名
      //   name: '[name].[ext]',
      // })
      // .end()
      /**
		 * 删除懒加载模块的prefetch，降低带宽压力
		 * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
		 * 而且预渲染时生成的prefetch标签是modern版本的，低版本浏览器是不需要的
		 */
		config.plugins.delete('prefetch');
		// if(process.env.NODE_ENV === 'production') { // 为生产环境修改配置...process.env.NODE_ENV !== 'development'
		// } else { // 为开发环境修改配置...
		// }
    },
 
    // vue-loader 选项
    // 查阅 https://vue-loader.vuejs.org/zh-cn/options.html
   // vueLoader: {},
 
    // 是否为生产环境构建生成 source map？
    productionSourceMap: false,
 
    // CSS 相关选项
    css: {
        // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
        extract: process.env.NODE_ENV === 'development'?false:true,
 
        // 是否开启 CSS source map？
        sourceMap: false,
 
        // 为预处理器的 loader 传递自定义选项。比如传递给
        // sass-loader 时，使用 `{ sass: { ... } }`。
        loaderOptions: {},
 
        // 为所有的 CSS 及其预处理文件开启 CSS Modules。
        // 这个选项不会影响 `*.vue` 文件。
        modules: false
    },
 
    // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
    // 在多核机器下会默认开启。
    parallel: require('os').cpus().length > 1,
 
    // 是否使用 `autoDLLPlugin` 分割供应的包？
    // 也可以是一个在 DLL 包中引入的依赖的显性的数组。
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#dll-模式
   // dll: false,
 
    // PWA 插件的选项。
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli-plugin-pwa/README.md
    pwa: {},
 
    // 配置 webpack-dev-server 行为。
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8089,
        https: false,
        disableHostCheck: true, //  新增该配置项
        hotOnly: false,
        // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
        proxy: null, // string | Object
        // proxy: {
        //   '/': {
        //       target: 'http://localhost:8082',
        //       changeOrigin: true,
        //       ws: false, //值为false防止控制台报错★★★★★★★★
        //       pathRewrite: {
        //           //▼或者后台接口统一加一个前缀如api，然后这里不写 '^/' 写 '^/api'。
        //           '^/': '', 
        //       },
        //   },
        // },
        before: app => {
            // `app` 是一个 express 实例
        }
    },
 
    // 三方插件的选项
    pluginOptions: {
		// ...
	}

}