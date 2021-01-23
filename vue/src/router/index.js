import Vue from 'vue'
// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'server/normalsign'
  },
  { // 下载界面
    name: 'index',
    path: '/',
    component: () => import('@/views/layout')
  },
  { // 登陆页面
    name: 'login',
    path: '/login',
    component: () => import('@/views/login')
  },
  { // 管理测试页面
    name: 'server',
    path: '/server',
    component: () => import('@/views/server'),
    children: [
      { path: 'supersign', component: () => import('@/views/supersign') },
      { path: 'normalsign', component: () => import('@/views/normalsign') }
    ]
  }]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
