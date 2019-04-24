import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios'
import http from '@/api/http'
import CONF from '@/config'
// use

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.$http = http
Vue.prototype.$conf = CONF
Vue.use(mavonEditor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
