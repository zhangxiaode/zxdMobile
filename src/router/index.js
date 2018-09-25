import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/view/homepage.vue'
import Travel from '@/view/travel.vue'
import Synopsis from '@/view/synopsis.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homepage'
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/travel',
      name: 'travel',
      component: Travel
    },
    {
      path: '/synopsis',
      name: 'synopsis',
      component: Synopsis
    }
  ]
})
