<template>
<div id="boy_index">
	<!-- <div id="left_nav"></div> -->
	<left-nav></left-nav>
	<div id="boy" v-bind:class="[shownav?hideit:showit]">
		
			<!-- <router-view name = "headerboy" ></router-view> -->
			<header-boy></header-boy>
			<!-- <router-view name = "myslider" ></router-view> -->
			<!-- <my-slider></my-slider> -->

			<router-view name = "indexcate" ></router-view>
			<router-view name = "myswiper" ></router-view>
			<router-view name = "hotcate" ></router-view>
	  		
	  		<!-- <router-view name = "prodetailone" ></router-view> -->
	  		<hot-product :hotProducts="hotProducts"></hot-product>
	  		<router-view name = "prodetail" ></router-view>
	  		<router-view name = "category" ></router-view>
	  		<router-view name = "footernav" ></router-view>
	  		<div v-bind:class="[shownav?mask_boy:no_boy]" id ="maskboy" @click="changeState">	
			</div>
	  	
	</div>
</div>
	
</template>

<script type="text/javascript">
import {mapState, mapActions} from 'vuex'
import HotProduct from './Prodetailone.vue'
import axios from 'axios'
import LeftNav from './LeftNav.vue'
import HeaderBoy from './HeaderBoy.vue'
import MySlider from './Myslider.vue'

export default {
	data(){
		return {
			isTure :true,
			hideit:'hideit',
			showit:'showit',
			mask_boy:'mask_boy',
			no_boy:'no_boy'
		}
	},
		computed: {
			//映射State
            ...mapState([
            	'hotProducts',
            	'shownav'
            ])
		},
		mounted() {
		    //获取热门商品列表
		    //console.log('getHotProducts')
			this.getHotProducts();
		},
		methods: {
			...mapActions(['getHotProducts','changeState'])
		},
		components: {
			HotProduct,
			LeftNav,
			HeaderBoy,
			MySlider
		}
	}
</script>
<style scoped>
#boy_index{
	width: 100%;
	overflow: hidden;
	
}
#boy{
	transition: all linear 0.3s;
}
	.hideit{
		position: absolute;
		left: 8rem;
		top: 0rem;

	}
	.showit{
		position: absolute;
		left:0rem;
		top: 0rem;

	}
	.mask_boy{
		position: absolute;
		width: 5rem;
		left: 0rem;
		top: 0rem;
		height: 100%;
		z-index: 999;
		
	}
	.no_boy{
		display: none;
		opacity: 0;
	}
	.mask_boy{
		background: black;
		opacity: 0.6;
	}
	#maskboy{
		transition:all linear 1s;
	}
</style>