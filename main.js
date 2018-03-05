import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#header',
  router,
  components: { testComponent },
  template: '<testComponent/>'
})