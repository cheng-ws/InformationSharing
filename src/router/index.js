 import Vue from 'vue'
 import Router from 'vue-router'
 import Home from '@/pages/home'
 import Emotion from '@/pages/emotion'
 import Resource from '@/pages/resource'
 import Need from '@/pages/need'
 import Login from '@/pages/login'
 import Register from '@/pages/register'
 import Article from '@/pages/article'
 Vue.use(Router)

export default new Router({
  mode: 'history',  //hash变为history
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      icon: 'ios-home-outline',
      title:'首页'
    },
    {
        path: '/emotion',
        name: 'emotion',
        component: Emotion,
        icon:'md-heart-outline',
        title: '心情'
    },
    {
        path: '/resource',
        name: 'resource',
        component: Resource,
        icon: 'md-book',
        title: '资源'
    },
    {
      path: '/need',
      name: 'need',
      component: Need,
      icon: 'ios-female',
      title:'需求'
    },
    {
        path: '/login',
        name: 'login',
        component:Login,
        icon:'ios-contact-outline',
        title: '登录'
    },
    {
        path: '/register',
        name:'register',
        component:Register,
        icon:'ios-person-add-outline',
        title: '注册'
    },{
      path:'/article',
      component:Article
    },
    {
      path: '*',
      redirect: '/home'
    },/*默认跳转路由*/
    // {
    //   path: '/content/:aid',
    //   component: Content
    // },
    // {
    //   path: '/pcontent',
    //   name: 'pcontent',
    //   component: Pcontent
    //   //get传值路由
    // },
    // {
    //   path:'/user',
    //   component:User,
    //   children:[
    //     {
    //       path: 'userAdd',
    //       component:UserAdd
    //     },
    //     {
    //       path: 'userList',
    //       component: UserList
    //     }
    //   ]
    // }
  ]
})

// // 1，安装 cnpm install vue-router --save
// // 2，引入 ， 实例化Vue.use(VueRouter) (main.js)
// // 3,配置路由 
// // 创建组件，引入组件
// // 定义路由 
// // const routers=[{path:,component:}]
// // 实力化路由
// // const router=new VueRouter({
// //   routes
// // })
// // 挂载
// // new Vue({
// //   el: '#app',
// //   router,
// //   render: h=>h(App)
// // })
// {/* <router-view></router-view> */}