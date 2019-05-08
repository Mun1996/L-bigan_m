// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import isWeixin from "./utils/isWeixin";

import Vant,{Toast} from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false
Vue.prototype.$store = store;
Vue.prototype.$isWeixin = isWeixin;
// Vue.prototype.$wx = wx;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
