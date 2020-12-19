import Vue from 'vue'
// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { // 下载界面
    name: 'index',
    path: '/',
    component: () => import('@/views/layout')
  },
  { // 管理测试页面
    name: 'server',
    path: '/server',
    component: () => import('@/views/server')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
