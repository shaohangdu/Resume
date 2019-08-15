// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

import 'bootstrap';
import './bus';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.component('Loading', Loading);

import currencyFilter from './filters/currency';
Vue.filter('currency' , currencyFilter);

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
// 啟用 VeeValidate 中文語系
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';
VeeValidate.Validator.localize('zh_TW' , zhTWValidate);

Vue.config.productionTip = false;

// cookie設定
axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//驗證切換畫面 是否需要登入
router.beforeEach((to, from, next) => {
  console.log( 'to' , to , 'from' , from , 'next' , next);
  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`;

		axios.post(api).then((response) => {
      console.log(response.data);
      if(response.data.success){
        next();
      }else{
        next({
          path:'/login',
        })
      }
	  });
  } else {
    next();
  }
})