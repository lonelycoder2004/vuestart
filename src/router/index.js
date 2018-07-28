import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Display from '@/components/Display'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
      path: '/display',
      name: 'display',
      component: Display,
  },
  ]
})

export default router
