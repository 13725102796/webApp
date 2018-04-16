import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//commond css
import '@/assets/css/init.css'
import '@/assets/js/rem.js'
// plugins
import loading from '@/plugins/loading/loading.js'
import toast from '@/plugins/toast/toast.js'

// 注册全局
Vue.use(loading)
Vue.use(toast)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
