import Vue from 'vue'
import App from './App.vue'
import router from './router'
import global_ from '@/util/Global'
Vue.prototype.GLOBAL = global_
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
