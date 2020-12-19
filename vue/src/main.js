import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import hljs from 'highlight.js'

import Vant from 'vant'
import { Lazyload } from 'vant'
import 'vant/lib/index.css'
// import 'highlight.js/styles/github.css'
// import 'highlight.js/styles/monokai-sublime.css'
import 'highlight.js/styles/atom-one-dark.css'
Vue.use(Vant)
Vue.use(Lazyload)
Vue.use(ElementUI)
// hljs
Vue.use(hljs.vuePlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
