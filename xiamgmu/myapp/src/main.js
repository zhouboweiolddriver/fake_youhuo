// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Swiper from 'vue-swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/font/iconfont.css'
import axios from 'axios'

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.use(Swiper)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})




// fetch ('http://localhost:3000/blogInsert', {
//           mode:'cors',
//           headers: {
//             "content-type":'application/json'
//           },
//           method:'POST',
//           body: JSON.stringify({
//             headImg:'static/img/blog/5.jpg',
//             content:$('.input1').val(),
//             name:this.$store.state.userName
//           })
//         })
//         .then( (resp) => {
//           console.log(resp);
//           return resp.json();
//         })
//         .then ( data => {
//           console.log(data);
//         })
