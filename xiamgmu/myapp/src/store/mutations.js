import {
	GET_HOT_PRODUCTS,
	CHANGE_STATE,
	GET_PRODUCTS_DETAIL,
	GET_PRODUCTS_FROM_MARKET,
	
} from './mutation-types.js'



export default {
	[GET_HOT_PRODUCTS](state,list){
		state.hotProducts = list;
	},
	[CHANGE_STATE](state,bool){
		state.shownav = bool;
	},
	[GET_PRODUCTS_DETAIL](state,list){
		state.productdetail = list;
	},
	[GET_PRODUCTS_FROM_MARKET](state,list){
		state.productfrommarket = list;
	}
	
}

export const increase = state => {
  state.count++
}