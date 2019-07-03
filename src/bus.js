import Vue from 'vue';
// Vue下註冊 bus
Vue.prototype.$bus = new Vue();

// Message
// vm.$bus.$emit('messsage:push' ,message ,status);
// 自定義名稱 'messsage:push'
// message(String):訊息內容
// status(String):Alert 樣式