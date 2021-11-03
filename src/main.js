import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

import './assets/tailwind.css'

import store from './store'

import axios from 'axios'

console.log(process.env.NODE_ENV)

Vue.config.productionTip = false
Vue.prototype.$baseUrl = process.env.VUE_APP_API

// if (process.env.NODE_ENV === 'production') {
//   
//   Vue.prototype.$assetURL = 'https://api.com'
//   axios.defaults.baseURL = 'https://api.com/api/v1'
// } else {
//   
//   Vue.prototype.$assetURL = 'https://be2.test/'
//   axios.defaults.baseURL = 'https://bev2.test/api/v1'
// }


axios.defaults.baseURL = '';   //url前缀
axios.defaults.timeout = 5000  // 超时时间

// http.js文件
// http request 拦截器

axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem('Authorization')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  
    return config;
  },
  error => {
    return Promise.reject(error);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          
          localStorage.removeItem('Authorization');
          this.$router.push('login');
      }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
});

Vue.use(Vuex)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
