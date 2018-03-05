// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './theme/element-variables.scss'
import Vuex from 'vuex'

// 引入api文件
import api from './api/index.js'
// // 将api方法绑定到全局
Vue.prototype.$api = api

Vue.config.productionTip = false
Vue.use(Vuex)
// Vue.use(iVueui)
Vue.use(ElementUi, {size: 'small'})

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
