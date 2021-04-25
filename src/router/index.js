import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/demo',
    name: '示例',
    component: () => import(/* webpackChunkName: "about" */ '@/views/demo/index.vue'),
    children: []
  },
  // { 
  //   path: '*', 
  //   // component: NotFoundComponent 
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/notFound/index.vue') 
  // }
]

/**
 * 路由构建
 * 路由配置
 * optioins 
 * @params { string }     history：       路由默认路径
 * @params { array }      routes          路由集合
 * @params { function }   scrollBehavior  当切换到新路由时，控制页面滚动位置
 * 
 */
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

/**
 * 路由守卫
 * @params  to       即将要进入的目标 路由对象
 * @params from          路由集合
 * @params next  必须执行 当前导航正要离开的路由 
 */
// router.beforeEach((to, from, next) => {
  // 判断是否需要登录   
  // if(ifLogin) {
  //   next('/login')
  // } else {
  //   next();
  // }
// })

export default router
