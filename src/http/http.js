import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = '';   //url前缀
axios.defaults.timeout = 5000  // 超时时间

// http.js文件
// http request 拦截器

axios.interceptors.request.use(
    config => {
      if (localStorage.getItem('Authorization')) {
        config.headers.Authorization = localStorage.getItem('Authorization');
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