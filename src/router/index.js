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
import Type from '../views/Mains/Menus/Type/index.vue'
import Typeadd from '../views/Mains/Menus/Type/add.vue'
import Typemodify from '../views/Mains/Menus/Type/modify.vue'
import order from '../views/Mains/Orders/order.vue'
import processOrder from '../views/Mains/Orders/processOrder.vue'
import User from '../views/Mains/UserManagement/index.vue'
import Printer from '../views/Mains/Prints/printer.vue'
import dashboard from '../views/Mains/Dashboard/dashboard.vue'


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
      { path: '', redirect: { name: 'dashboard' } },
      { path: '/mains/dashboard', name: 'dashboard', component: dashboard },
      { path: '/mains/menu', name: 'menu', component: menu },
      { path: '/mains/menu/add', name: 'menuadd', component: menuadd },
      { path: '/mains/menu/view/:id', name: 'menuview', component: menuview },
      { path: '/mains/menu/modify/:id', name: 'menumodify', component: menumodify },
      { path: '/mains/menu/type', name: 'type', component: Type },
      { path: '/mains/menu/Typeadd', name: 'Typeadd', component: Typeadd },
      { path: '/mains/menu/Typemodify/:id', name: 'Typemodify', component: Typemodify },
      { path: '/mains/User', name: 'user', component: User },
      { path: '/mains/analysis', name: 'analysis', component: analysis },
      { path: '/mains/brand', name: 'brand', component: brand },
      { path: '/mains/printer', name: 'printer', component: Printer },
      { path: '/mains/bdorder', name: 'bdorder', component: bdorder },
      { path: '/mains/order', name: 'order', component: order },
      { path: '/mains/processOrder/:id', name: 'processOrder', component: processOrder },

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
    // } if (date - token.startTime > EXPIRESTIME) {
    } if (date - localStorage.getItem('startTime') > EXPIRESTIME) {
      localStorage.removeItem('token');
      next('/');
    }else {
      next();
    }
    
  }
});
export default router
