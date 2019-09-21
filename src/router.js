import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import VueHead from 'vue-head'

Vue.use(Router)
Vue.use(VueHead)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('./views/Resume.vue')
    },
    {
      path: '/porfolio',
      name: 'porfolio',
      component: () => import('./views/myWork.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    }
  ],
  mode: 'history'
})
