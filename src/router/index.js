import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Html from '@/components/pages/html';
import AJAX from '@/components/pages/AJAX';


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
      path: '/ajax',
      name: 'AJAX',
      component: AJAX,
    }
  ]
})
