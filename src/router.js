import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: () => import( './views/Category.vue')
    },
    {
      path: '/book',
      name: 'book',
      component: () => import( './views/Book.vue')
    },
    {
      path: '/chapter',
      name: 'chapter',
      component: () => import( './views/Chapter.vue')
    },
  ]
})
