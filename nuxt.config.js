let routes = require('./madeRoute')
let processArgv = {}
if (process.argv) {
  let args = process.argv.splice(2)
  for (let i = 0; i < args.length; i += 2) {
    let key = args[i].substring(2)
    processArgv[key] = args[i + 1]
  }
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Datasnap',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  env: {
    BASE_URL: processArgv.webapi,
    PASSPORT: processArgv.passport,
    IS_PRODUCTION: processArgv.webapi || false,
    root: '/'
  },
  /*
  ** Build configuration
  */
  build: {
    babel: {
      // "presets": [["env", { "modules": false }], "stage-2"],
      plugins: [
        'transform-async-to-generator',
        'transform-runtime'
      ],
      comments: false
    },
    postcss: [
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vender: ['element-ui', 'vue-i18n', 'axios'],
    extractCSS: {
      allChunks: true
    }
  },
  plugins: [
    { src: '~plugins/element-ui' },
    '~plugins/vue-notifications'
    // '~plugins/axios-help.js'
  ],
  css: [
    // 全部引用的时候需要用到
    'element-ui/lib/theme-chalk/index.css',
    // 项目中的 基础样式 文件
    '~assets/stylus/index.styl'
  ],
  router: {
    middleware: ['i18n']
  },
  generate: {
    routes: routes
  }
}
