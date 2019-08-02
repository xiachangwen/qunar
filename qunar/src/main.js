// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

 
Vue.config.productionTip = false

Vue.prototype.$axios = axios


import '@/assets/reset.css'
import '@/assets/font.js'
import '@/fonts/iconfont.css'
import Swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
Vue.use(Swiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
