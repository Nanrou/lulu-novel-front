import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/:category',
      name: 'category',
      component: Home
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    /*
    {
      path: '/category/:category',
      name: 'category',
      component: () => import( './views/Category.vue')
    },
    */
    {
      path: '/book/:bid',  // 想要hash化
      name: 'book',
      component: () => import( './views/Book.vue')
    },
    {
      path: '/chapters/:bid',  // 想要hash化
      name: 'chapters',
      component: () => import( './views/AllChapter.vue')
    },
    {
      path: '/chapter/:cid',
      name: 'chapter',
      component: () => import( './views/Chapter.vue')
    },
  ]
})
