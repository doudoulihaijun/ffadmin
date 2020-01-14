import Vue from 'vue'
import Router from 'vue-router'
import userlist from '@/components/user/userlist.vue'
import login from '@/views/login.vue'
import index from '@/views/index.vue'
import indexview from '@/views/indexview.vue'
Vue.use(Router)

export default new Router({
  //mode: 'history',//去掉#号
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
                {path: '/', redirect: 'indexview'},
                {
                  // 当 /foo/:id/profile 匹配成功，
                  // FooProfile 会被渲染在 Foo的 <router-view> 中
                  path: '/index/indexview',
                  component: indexview
                },
                {
                  // 当 /foo/:id/profile 匹配成功，
                  // FooProfile 会被渲染在 Foo的 <router-view> 中
                  path: '/userlist',
                  component: userlist
                }
              ]
    }
  ]
})
