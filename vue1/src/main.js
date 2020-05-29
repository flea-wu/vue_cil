// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vue组件 vue 首字母必须小写
import Vue from 'vue'
// 引入组件
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'

/**
 阻止启动生产消息，常用作指令

 没有Vue.config.productionTip = false这句代码，它会显示你生产模式的消息

 开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。
 而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。
 此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的。
 (摘于官网说明)

 大概意思应该就是，消息提示的环境配置，设置为开发环境或者生产环境
 */
Vue.config.productionTip = false
// 添加实例属性
Vue.prototype.$axios = axios

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 将组件映射成标签
  components: {App},
  template: '<App/>'
})
