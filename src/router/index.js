import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../components/Login/Login'

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:Msite,
      meta:{
        footerShow:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        footerShow:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        footerShow:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        footerShow:true
      }
    },
    {
      path: '/',
      redirect:'/msite'
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
