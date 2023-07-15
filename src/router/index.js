import {createRouter,createWebHistory} from 'vue-router'
import layout from '../views/layout/index.vue'
import login from '../views/login/login.vue'
import home from '../views/home/home.vue'

const product = ()=>import('../views/product/index.vue')
const proList = ()=>import('../views/product/list/list.vue')
const proCategory =()=>import('../views/product/category/category.vue')
const order = ()=>import('../views/orders/index.vue')
const orderChecks = ()=>import('../views/orders/checks/checks.vue')
const orderForm = ()=>import('../views/orders/form/form.vue')
const orderList = ()=>import('../views/orders/list/list.vue')
const ads = ()=>import('../views/ads/index.vue')
const adsCategory = ()=>import('../views/ads/category/category.vue')
const adsList =()=>import('../views/ads/list/list.vue')




const routes = [
  {
    path:'/',
    component: layout,
    name:'layout',
    children:[
      {
        path:'/',
        component:home,
        name:'home'
      },{
        path:'/product',
        component:product,
        name:'product',
        children:[
          {
            path:'list',
            component:proList,
            name:'proList'

          },{
            path:'category',
            component:proCategory,
            name:'proCategory'
          }
        ]
      },{
        path:'/order',
        component:order,
        name:'order',
        children:[
          {
            path:'form',
            component:orderForm,
            name:'orderForm'
          },{
            path:'checks',
            component:orderChecks,
            name:'orderChecks',
          },{
            path:'list',
            component:orderList,
            name:'orderList',
          }
        ]
      },{
        path:'ads',
        component:ads,
        name:ads,
        children:[
          {
            path:'list',
            name:'adsList',
            component:adsList,
          },{
            path:'Category',
            name:'adsCategory',
            component:adsCategory,
          }
        ]
      }
    ]
  },
  {
    path:'/login',
    component:login,
    name:'login'
  },
]

const router = createRouter({

  history: createWebHistory(),
  routes, 
})
export default router


