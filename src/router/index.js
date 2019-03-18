import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import firstPage from '@/components/firstPage'
import secondPage from '@/components/secondPage'
import FirstHomePart from '@/components/HomeComponents/FirstHomePart'
import SecondHomePart from '@/components/HomeComponents/SecondHomePart'


Vue.use(Router)

//import Layout from './views/layout/Layout'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'firstHome',
          component: FirstHomePart
        },{
          path: '/',
          name: 'secondHome',
          component: SecondHomePart
        }
      ]
    },
    {
      path: '/firstPage',
      name: 'firstPage',
      component: firstPage
    },
    {
      path: '/secondPage',
      name: 'secondPage',
      component: secondPage
    }
  ]
})
