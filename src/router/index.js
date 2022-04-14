// 1.导包
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Help from '@/components/Help.vue'
import Tab1 from '@/components/Tab/Tab1.vue'
import Tab2 from '@/components/Tab/Tab2.vue'
// 2.注册
Vue.use(VueRouter)

// 3.创建实例对象
const router = new VueRouter({
  routes: [
    // 路由重定向
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/help', component: Help },
    {
      path: '/about',
      component: About,
      // 配置子路由
      children: [
        // 设置默认路由（path为空）
        { path: '', component: Tab1 },
        { path: 'tab2', component: Tab2 },
      ],
    },
  ],
})

// 4.导出
export default router
