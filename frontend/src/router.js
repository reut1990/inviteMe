import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Template from './views/Template.vue'

import GeneralTemplate from './components/templates/GeneralTemplate.vue'
import GeneralPreview from './components/templates/GeneralPreview.vue'


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
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/invite/:id',
      name: 'template',
      component: Template// it is the editor+invite page
    },
    {
      path: '/invite/prv/:id',
      name: 'GeneralPreview',
      component: GeneralPreview
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import( './views/Contact.vue')
    },
    {
      path:'/userArea',
      name:'/userArea',
      component:()=>import('./components/UserArea.vue')
    },
    {
      path:'/first',
      name:'/first',
      component:()=>import('./components/templates/First.vue')
    }
    // {
    //   path: '/signup',
    //   name: 'signup',
    //   component: () => import('./views/signup.vue')
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('./views/login.vue')
    // },

    // {
    //   path: '/user/:userId',
    //   name: 'user',
    //   component: () => import('./views/user-details.vue')
    // },

  

  ]
})
