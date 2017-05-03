import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'


Vue.use(Vuex)

const state = {
  count:0,
  slideritems:[{imgsrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3639439496,3888206250&fm=23&gp=0.jpg"},
  {imgsrc:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492148337238&di=a6455275888293664b18021d733f48d6&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F208%2F35%2F5K441ZG22I92.jpg"},
  {imgsrc:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492148337238&di=a6455275888293664b18021d733f48d6&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F208%2F35%2F5K441ZG22I92.jpg"}],
  hotProducts: [],
  shownav:false,
  productdetail:[],
  productfrommarket:[],
 
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
