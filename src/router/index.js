import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/Auth/login.vue'
import index from '../views/Index/index.vue'
import analysis from '../views/Mains/Analysis/analysis.vue'
import bdorder from '../views/Mains/BackendOrder/bdorder.vue'
import brand from '../views/Mains/Brands/brand.vue'
import menu from '../views/Mains/Menus/menu.vue'
import menuadd from '../views/Mains/Menus/add.vue'
import menuview from '../views/Mains/Menus/view.vue'
import menumodify from '../views/Mains/Menus/modify.vue'
import order from '../views/Mains/Orders/order.vue'
import User from '../views/Mains/UserManagement/index.vue'
import printer from '../views/Mains/prints/printer.vue'


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path: '/mains',
    name: 'mains',
    component: index,
    children: [
      { path: '', redirect: { name: 'menu' } },
      { path: '/mains/menu', name: 'menu', component: menu },
      { path: '/mains/menu/add', name: 'menuadd', component: menuadd },
      { path: '/mains/menu/view/:id', name: 'menuview', component: menuview },
      { path: '/mains/menu/modify/:id', name: 'menumodify', component: menumodify },
      { path: '/mains/order', name: 'order', component: order },
      { path: '/mains/User', name: 'user', component: User },
      { path: '/mains/analysis', name: 'analysis', component: analysis },
      { path: '/mains/brand', name: 'brand', component: brand },
      { path: '/mains/printer', name: 'printer', component: printer },
      { path: '/mains/bdorder', name: 'bdorder', component: bdorder },

    ] 
  },
]

let EXPIRESTIME = 86400000

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next();
  } else {

    let token = localStorage.getItem('Authorization');
    try {
      token = JSON.parse(token);
    } catch (error) {
        // eslint-disable-next-line no-self-assign
        token = token;
    }
    let date = new Date().getTime();
    if (token === null || token === '') {
      next('/');
    } if (date - token.startTime > EXPIRESTIME) {
      localStorage.removeItem('token');
      next('/');
    }else {
      next();
    }
    
  }
});
export default router
