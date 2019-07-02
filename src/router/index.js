import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Html from '@/components/pages/html';
import AJAX from '@/components/pages/AJAX';
import Commerce from '@/components/pages/commerce';
import Login from '@/components/pages/login';
import Products from '@/components/pages/products';
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
      // meta: { requiresAuth: true },
      children:[
        {
          path: 'products',
          name: 'Products',
          component: Products,
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
