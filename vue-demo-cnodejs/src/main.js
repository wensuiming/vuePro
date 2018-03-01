// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iVueui from 'ivueui'
import 'ivueui/dist/styles/icon.css'
import 'ivueui/dist/styles/ivueui.css'
import vuex from 'vuex'

// 引入api文件
import api from './api/index.js'
// // 将api方法绑定到全局
Vue.prototype.$api = api

Vue.config.productionTip = false
Vue.use(vuex)
Vue.use(iVueui)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
