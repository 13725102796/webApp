import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由导入
import Home from './home'
//路由集合
const routes = [].concat(Home)
export default new Router({
  mode: 'history',
  routes: routes
})
