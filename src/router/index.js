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
import Store from '@/components/pages/store';       //購買頁面設定
import Store_content from '@/components/pages/store-content';   //購買內容
import Store_user from '@/components/pages/store-user';   //購買人
import Store_checkout from '@/components/pages/store-checkout';   //購買資訊
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
      path: '/store',
      name: 'Store',
      component: Store,
      children:[
        {
          path: 'content',
          name: 'Store_content',
          component: Store_content,
        },
        {
          path: 'user',
          name: 'Store_user',
          component: Store_user,
        },
        {
          path: 'checkout/:orderId',
          name: 'Store_checkout',
          component: Store_checkout,
        }
      ],
    },
    {
      path: '/admin',
      name: 'Commerce',
      component: Commerce,
      meta: { requiresAuth: true },
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
