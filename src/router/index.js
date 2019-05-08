/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import routes, { functionalRoutes } from "./routes";
// import Urls from "@/config/urls";
const Urls = 'api/bg/xxx'
Vue.use(Router);

Router.prototype.goBack = () => {
  window.isBack = true;
  window.history.back();
};

let router = new Router({
  routes: routes
});

router.beforeEach((to, from, next) => {
  console.log("Before Router To:", to);
  console.log(from.name);
  let $store = Vue.prototype.$store;
  let $isWeixin = Vue.prototype.$isWeixin;
  console.log($isWeixin.isWeixin());
  console.log(Object.keys(to.query))
  // 1.获取登录状态
  let isLogin = $store.getLoginState();
  let functionalName = functionalRoutes.map(item => item.name);
  // 2.未登录状态并且访问功能页面则先登录
//------------------------------------若要不登录访问页面修改为！isLogin-----
  if (functionalName.indexOf(to.name) > -1 && isLogin) {
 
    if (!$isWeixin.isWeixin()) {
        next({ name: "login" });
    } else {
      // 微信环境下先授权登录
      next({ name: "login" });
    }
  } else {
    next();
  }
});

// 动态生成页面title
router.afterEach((to, from) => {
  console.log("After Router, To:", to);
  document.title = to.meta.title;
});

export default router;
