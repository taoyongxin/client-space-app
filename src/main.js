import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< Updated upstream

=======
import global_ from '@/util/Global'
Vue.prototype.GLOBAL = global_
Vue.prototype.$axios=axios;
import axios from 'axios'
import VueAxios from 'vue-axios'
>>>>>>> Stashed changes
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
