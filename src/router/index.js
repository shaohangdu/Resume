import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';   //首頁
import Html from '@/components/pages/html';         //切版頁
import AJAX from '@/components/pages/AJAX';         //高雄市AJAX
import Commerce from '@/components/pages/commerce'; //販賣頁
import Login from '@/components/pages/login';       //管理登入頁面
import Products from '@/components/pages/products'; //產品建立修改
import Coupon from '@/components/pages/coupon';     //優待卷
import Order from '@/components/pages/order';       //訂單頁面

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Html',
      component: Html,
    },
    {
      path: '/activity',
      name: 'AJAX',
      component: AJAX,
    },
    {
      path: '/admin',
      name: 'Commerce',
      component: Commerce,
      children:[
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
        {
          path: 'coupon',
          name: 'Coupon',
          component: Coupon,
          meta: { requiresAuth: true },
        },
        {
          path: 'order',
          name: 'Order',
          component: Order,
          meta: { requiresAuth: true },
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ]
})
