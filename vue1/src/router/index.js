import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '../components/Test/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hhh',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Test',
      component: Test
    }
  ]
})
