import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/pages/welcome'
import interduce from '@/pages/interduce'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/welcome'
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/interduce',
      component: interduce
    }
  ]
})
