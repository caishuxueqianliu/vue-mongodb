import Vue from 'vue'
// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
