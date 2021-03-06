// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import $ from 'jquery'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/styles/animate.css'

Vue.prototype.bus = new Vue()
Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(MintUI)
Vue.prototype.username = ''
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
