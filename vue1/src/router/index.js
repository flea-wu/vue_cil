import Vue from 'vue'
import Router from 'vue-router'
import Test from '../components/Test'

Vue.use(Router)

const routes = {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test
    }
  ]
}

let router = new Router(routes)

router.beforeEach((to, from, next) => {
  // 统计代码
  // _hmt.push(['_trackPageview', pageURL]) 必须是以"/"（斜杠）开头的相对路径
  if (to.path) window._hmt.push(['_trackPageview', '/' + to.fullPath])
  next()
})

export default router
