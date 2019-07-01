import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Html from '@/components/pages/html';
import AJAX from '@/components/pages/AJAX';
import Commerce from '@/components/pages/commerce';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/html',
      name: 'Html',
      component: Html,
    },
    {
      path: '/activity',
      name: 'AJAX',
      component: AJAX,
    },
    {
      path: '/commerce',
      name: 'Commerce',
      component: Commerce,
    }
  ]
})
