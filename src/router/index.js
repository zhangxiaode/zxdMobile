import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/view/layout.vue'
import Homepage from '@/view/homepage.vue'
import Travel from '@/view/travel.vue'
import Synopsis from '@/view/synopsis.vue'
import Resume from '@/view/resume.vue'
import Article from '@/components/article.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/layout/homepage'
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: 'homepage',
          name: 'homepage',
          component: Homepage
        },
        {
          path: 'travel',
          name: 'travel',
          component: Travel
        },
        {
          path: 'synopsis',
          name: 'synopsis',
          component: Synopsis
        }
      ]
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    }
  ]
})
