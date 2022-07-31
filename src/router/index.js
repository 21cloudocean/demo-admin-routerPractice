// 1. 导入vue + vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入需要的组件
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'

import Users from '@/components/menus/MyUsers.vue'
import Rights from '@/components/menus/MyRights.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Orders from '@/components/menus/MyOrders.vue'
import Settings from '@/components/menus/MySettings.vue'
import UserDetail from '@/components/user/MyUserDetail.vue'

// Vue使用vue-router插件
Vue.use(VueRouter)

// 创建vue-router实例对象
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    // 登录组件的匹配规则
    { path: '/login', component: Login },
    // 后台主页的匹配规则
    {
      path: '/home',
      component: Home,
      children: [
        { path: 'users', component: Users },
        { path: 'rights', component: Rights },
        { path: 'goods', component: Goods },
        { path: 'orders', component: Orders },
        { path: 'settings', component: Settings },
        // 用户详情页路由规则
        { path: 'userinfo/:id', component: UserDetail, props: true }
      ]
    }
  ]
})

// 全局前置守卫
router.beforeEach(function(to, from, next) {
  const pathArr = ['/home', '/home/users', '/home/settings']
  if (pathArr.indexOf(to.path) !== -1) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
// 共享vue-router实例对象
export default router
