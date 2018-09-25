// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import '@/style/reset.less'
import '@/style/common.less'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import ajax from '@/utils/ajax'
Vue.use(Mint)

Vue.config.productionTip = false
Vue.prototype.$ajax=ajax
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  mounted () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px'
    window.addEventListener('resize', function () { 
      document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px'
    })
  },
  template: '<App/>'
})
