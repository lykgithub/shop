import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home//Home.vue'
import ShopCar from '../components/ShopCar/ShopCar.vue'
import Finding from '../components/Finding/Finding.vue'
import User from '../components/User/User.vue'
import Items from '../components/Items/Items.vue'
import Register from '../components/User/Register.vue'
import Login from '../components/User/Login.vue'
import Forgetpw from '../components/User/Forgetpw.vue'
import FirmOrder from '../components/Order/FirmOrder.vue'
import GoodsBill from '../components/Order/GoodsBill.vue'
import WaitToPay from '../components/Order/WaitToPay.vue'
import WaitToSent from '../components/Order/WaitToSent.vue'
import Pay from '../components/Order/Pay.vue'
import Product from '../components/Product/Product.vue'
import GoodList from '../components/Product/Good.vue'
import Address from '../components/Address/Address.vue'
import AddAddress from '../components/Address/AddAddress.vue'
import EditAddress from '../components/Address/EditAddress.vue'
import LoadPic from '../components/User/LoadPic.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      component: Home,
    },
    {
      path: '/Finding',
      component: Finding
    },
    {
      path: '/Items',
      component: Items
    },
    {
      path: '/User',
      component: User
    },
    {
      path: '/ShopCar',
      component: ShopCar
    },
    {
      path: '/Register',
      component: Register
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Forgetpw',
      component: Forgetpw
    },
    {
      path: '/FirmOrder',
      component: FirmOrder
    },
    {
      path:'/Pay',
      component:Pay
    },
    {
      path: '/GoodsBill',
      component: GoodsBill
    },
    {
      path: '/Product',
      component: Product
    },
    {
      path:'/GoodList',
      component:GoodList
    },
    {
      path: '/WaitToPay',
      component: WaitToPay
    },
    {
      path: '/WaitToSent',
      component: WaitToSent
    },
    {
      path: '/Address',
      component: Address
    },
    {
      path: "/AddAddress",
      component: AddAddress
    },
    {
      path: "/EditAddress",
      component: EditAddress
    },
    {
      path:"/LoadPic",
      component:LoadPic
    },
    {path: "*", redirect: '/Home'},
  ],
  mode: 'history'
},)
