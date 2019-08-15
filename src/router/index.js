import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';   //首頁
import Html from '@/components/Html/index';         //切版頁
import AJAX from '@/components/AJAX/index';         //高雄市AJAX
import Commerce from '@/components/shopping/Backstage/index'; //販賣頁
import Login from '@/components/shopping/login';       //管理登入頁面
import Products from '@/components/shopping/Backstage/products'; //產品建立修改
import Coupon from '@/components/shopping/Backstage/coupon';     //優待卷
import Order from '@/components/shopping/Backstage/order';       //訂單頁面
import Store from '@/components/shopping/Reception/store';       //購買頁面設定
import Store_content from '@/components/shopping/Reception/store-content';   //購買內容
import Store_user from '@/components/shopping/Reception/store-user';   //購買人
import Store_checkout from '@/components/shopping/Reception/store-checkout';   //購買資訊
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
