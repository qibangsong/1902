// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/normalize.css'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)


import Vant from 'vant';
import 'vant/lib/index.css';

import store from "./store"
import Element from "element-ui"
Vue.use(Element)
Vue.config.productionTip = false

// 路由守卫
router.beforeEach((to,from,next)=>{
	if(to.meta.isLogin){
		if(sessionStorage.wzj){
			next()
		}else{
			next("/login")
		}
	}else{
		next()
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
