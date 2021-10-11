import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/Auth/login.vue'
import index from '../views/Index/index.vue'
import analysis from '../views/Mains/Analysis/analysis.vue'
import bdorder from '../views/Mains/BackendOrder/bdorder.vue'
import brand from '../views/Mains/Brands/brand.vue'
import menu from '../views/Mains/Menus/menu.vue'
import order from '../views/Mains/Orders/order.vue'
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/index',
  //   name: 'index',
  //   component: index
  // },
  // {
  //   path: '/menu',
  //   name: 'menu',
  //   component: menu
  // },
  // {
  //   path: '/order',
  //   name: 'order',
  //   component: order
  // },
  // {
  //   path: '/analysis',
  //   name: 'analysis',
  //   component: analysis
  // },
  // {
  //   path: '/brand',
  //   name: 'brand',
  //   component: brand
  // },
  // {
  //   path: '/printer',
  //   name: 'printer',
  //   component: printer
  // },
  // {
  //   path: '/bdorder',
  //   name: 'bdorder',
  //   component: bdorder
  // },
  { path: '/mains',
  name: 'mains',
  component: index,
  children: [
        { path: '', redirect: { name: 'menu' } },
        { path: '/mains/menu', name: 'menu', component: menu },
        { path: '/mains/order', name: 'order', component: order },
        { path: '/mains/analysis', name: 'analysis', component: analysis },
        { path: '/mains/brand', name: 'brand', component: brand },
        { path: '/mains/printer', name: 'printer', component: printer },
        { path: '/mains/bdorder', name: 'bdorder', component: bdorder },

] },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
