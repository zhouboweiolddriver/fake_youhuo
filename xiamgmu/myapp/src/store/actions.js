import axios from 'axios'
import * as types from './mutation-types.js'

export default {
	getHotProducts({commit,state}){
		axios.get('http://localhost:3000/api/gethot').then((response)=>{
			let result = response.data;
			if(result){
				console.log(result)
				commit(types.GET_HOT_PRODUCTS,result.slice(0,6));
			}
		});
	},
	changeState({commit,state}){
		//console.log(state.shownav)
		var result = !(state.shownav)
		//console.log(result)
		commit(types.CHANGE_STATE,result)
	},
	getProductsDetail({commit,state},proid){
		console.log(proid)
		console.log("getProducts in action")
		// axios.get('http://localhost:3000/api/gethotshowlist',{proid:proid}).then((response)=>{
		// 	let result = response
		// 	console.log(result)
		// 	if(result){
		// 		commit(types.GET_PRODUCTS_DETAIL,result);
		// 	}
		// })
		axios({
		  method: 'get',
		  url: 'http://localhost:3000/api/gethotshowlist',
		  params: {
		    proid:proid
		  }
		}).then(function (response) {
			console.log('aaaa')
		  console.log(response.data)
		  commit(types.GET_PRODUCTS_DETAIL,response.data)

		}).catch(function (error) {
		  console.log(error)
		});
		

	},
	getProductsFromMarket({commit,state},proid){
		//console.log("market"+marketid)
		// axios.get('/mock/market/market.json').then((response)=>{
		// 	//php模拟
		// 	//console.log("进入")
		// 	//console.log(response.data.length)
		// 	let len = response.data.length;
		// 	for(let i =0;i<len;i++){
		// 		if(response.data[i].marketiddb == marketid){
		// 			var result = response.data[i].list;
		// 			break;
		// 		}
		// 	}
		// 	if(result){
		// 		//console.log(result)
		// 		commit(types.GET_PRODUCTS_FROM_MARKET,result.slice(0,6));
		// 	}
		// });
		axios({
		  method: 'get',
		  url: 'http://localhost:3000/api/marketrecommendation',
		  params: {
		    proid:proid
		  }
		}).then(function (response) {
		  //console.log(response.data)
		  commit(types.GET_PRODUCTS_FROM_MARKET,response.data)

		}).catch(function (error) {
		  console.log(error)
		});
	}
}
export const increase = ({ commit }) => commit('increase')	
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