import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'vue-axios'
// import axios from 'axios'
import 'vant/lib/index.css'
import './registerServiceWorker'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(vant)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
