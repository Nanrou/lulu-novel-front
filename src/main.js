import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueCookies from 'vue-cookies'
import './plugins/element.js'
require('promise.prototype.finally').shim()


Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(VueCookies)
Vue.$cookies = VueCookies

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
