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

//不需登录
export const basicRoutes = [
	{
		path: "*",
		name: "notfound",
		meta:{
			title:'找不到该页面'
		},
		component: NotFound
	},
	// {
	// 	path: '/',
	// 	redirect: '/home'
	// },
	{
		path: '/',
		name: 'home',
		meta: {
			title:'首页'
		},
		component: Home
	},
	{
		path: '/login',
		name: 'login',
		meta: {
			title: "登录"
		},
		component: Login
	},
	{
		path: '/register',
		name: 'register',
		meta: {
			title: "注册"
		},
		component: Register
	},
	{
		path: '/setpassword',
		name: 'setpassword',
		meta: {
			title: "设置密码"
		},
		component: SetPassword
	},
	{
		path: '/resetpassword',
		name: 'resetpassword',
		meta: {
			title: "重置密码"
		},
		component: ResetPassword
	},
	{
		path: '/identity',
		name: 'identity',
		meta: {
			title: "身份验证"
		},
		component: Identity
	},
];

export const functionalRoutes = [
	{
		path: '/center',
		name: 'center',
		meta: {
			title: "个人中心"
		},
		component: Center
	},
	{
		path: '/chachongreports',
		name: 'chachongreports',
		meta: {
			title: "查重报告"
		},
		component: ChachongReports
	},
	{
		path: '/chachongreportsdetail',
		name: 'chachongreportsdetail',
		meta: {
			title: "查重报告详情"
		},
		component: ChachongReportsDetail
	},
	{
		path: '/recharge',
		name: 'recharge',
		meta: {
			title: "充值"
		},
		component: Recharge
	},
	{
		path: '/rechargecenter',
		name: 'rechargecenter',
		meta: {
			title: "充值中心"
		},
		component: RechargeCenter
	},
]

let routes = [...basicRoutes, ...functionalRoutes];
export default routes;

// export default new Router({
//   routes: [
//     {
//       path: "*",
//       name: "notfound",
//       component: NotFound
//     },
//     {
//       path: '/',
//       redirect: '/home'
//     },
//     {
//       path: '/home',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/center',
//       name: 'center',
//       component: Center
//     },
//     {
//       path: '/chachongreports',
//       name: 'chachongreports',
//       component: ChachongReports
//     },
//     {
//       path: '/chachongreportsdetail',
//       name: 'chachongreportsdetail',
//       component: ChachongReportsDetail
//     },
//     {
//       path: '/recharge',
//       name: 'recharge',
//       component: Recharge
//     },
//     {
//       path: '/rechargecenter',
//       name: 'rechargecenter',
//       component: RechargeCenter
//     },
//     //登录注册部分
//     {
//       path: '/login',
//       name: 'login',
//       component: Login
//     },
//     {
//       path: '/register',
//       name: 'register',
//       component: Register
//     },
//     {
//       path: '/setpassword',
//       name: 'setpassword',
//       component: SetPassword
//     },
//     {
//       path: '/resetpassword',
//       name: 'resetpassword',
//       component: ResetPassword
//     },
//     {
//       path: '/identity',
//       name: 'identity',
//       component: Identity
//     },
    
//     // {
//     //   path: '/example',
//     //   name: 'example',
//     //   component: Example
//     // },
//   ]
// })
