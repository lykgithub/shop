// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import axios from 'axios'
import store from './store/index'
import Vuex from 'vuex'
import  { LoadingPlugin } from 'vux'

Vue.use(LoadingPlugin)
Vue.use(Vuex)
FastClick.attach(document.body)

/*Vue.directive('focus', function (el, binding) {
  el.onblur = function () {
    switch (el.className){
      case "username":
        if (el.value.length == 0) {
          binding.value.userNemeBlur = false;
        } else {
          binding.value.userNemeBlur = true;
        }
        break;
      case "password":
        if (el.value.length == 0) {
          binding.value.passWordBlur = false;
        } else {
          binding.value.passWordBlur = true;
        }
        break;
    }
   /!* if(!binding.value.blurs){
      binding.value.isShowTip=true;
      binding.value.$refs.tip.innerHTML="请输入账号和密码"
    }else {
      binding.value.isShowTip=false;
    }*!/
  }

})*/
//请求事件拦截器
axios.interceptors.request.use(function(config){
  //发送请求成功的回调
  Vue.$vux.loading.show({
    text: 'Loading'
  })
  return config;
},function (err) {
  //发送请求失败的回调
  Vue.$vux.loading.hide()
})
//响应事件拦截器
axios.interceptors.response.use(function(config){
  //请求响应成功的回调
  Vue.$vux.loading.hide()
  return config;
},function (err) {
  //请求响应失败回调
  Vue.$vux.loading.hide()
});
//将axios挂载到全局
axios.defaults.timeout = 2500;
Vue.prototype.$http = axios
//将序列化挂载到全局
Vue.prototype.$qs= require('qs')
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
})



