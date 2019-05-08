import Vue from 'vue'
import Router from 'vue-router'
// import Example from '@/view/Example'
import Home from '@/view/Home'
import Center from '@/view/Center'
import ChachongReports from '@/view/ChachongReports'
import ChachongReportsDetail from '@/view/ChachongReportsDetail'
import Recharge from '@/view/Recharge'
import RechargeCenter from '@/view/RechargeCenter'
import Login from '@/view/Login'
import Identity from '@/view/Identity'
import Register from '@/view/Register'
import SetPassword from '@/view/SetPassword'
import ResetPassword from '@/view/ResetPassword'
import NotFound from '@/view/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "*",
      name: "notfound",
      component: NotFound
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/center',
      name: 'center',
      component: Center
    },
    {
      path: '/chachongreports',
      name: 'chachongreports',
      component: ChachongReports
    },
    {
      path: '/chachongreportsdetail',
      name: 'chachongreportsdetail',
      component: ChachongReportsDetail
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: Recharge
    },
    {
      path: '/rechargecenter',
      name: 'rechargecenter',
      component: RechargeCenter
    },
    //登录注册部分
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/setpassword',
      name: 'setpassword',
      component: SetPassword
    },
    {
      path: '/resetpassword',
      name: 'resetpassword',
      component: ResetPassword
    },
    {
      path: '/identity',
      name: 'identity',
      component: Identity
    },
    // {
    //   path: '/example',
    //   name: 'example',
    //   component: Example
    // },
  ]
})
