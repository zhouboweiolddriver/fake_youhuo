<template>
	<div>
		<div class="title">
			<span class="before_page l"><i class="iconfont">&#xe612;</i></span>
			<p class="title_des l">店铺详情</p>
			<span class="types l"><i class="iconfont">&#xe6e3;</i></span>
		</div>

		<h1>{{$route.params.marketId}}</h1>

		<div id="myawesomelider">
			<swiper :options="swiperOption">
		        <!-- <swiper-slide v-for="x in productfrommarket"><div>
		      <img :src="x">
		      </div></swiper-slide> -->
		       <!--  <swiper-slide><div>
		      <img :src="$store.state.slideritems[1].imgsrc">
		      </div></swiper-slide> -->
		        <swiper-slide>
				    <div>
				    	<img :src="productfrommarket[0].imgSrc">
				    </div>
		    	</swiper-slide>
		        <swiper-slide>
		        	<div>
		   				<img :src="productfrommarket[1].imgSrc">
		    		</div>
		    	</swiper-slide>
		        <div class="swiper-pagination" slot="pagination"></div>
		    </swiper>
		</div>

		<div class="nav_list">
			<span>分类</span><span>最新</span><span>价格</span>
		</div>

		<div style="overflow:hidden">
			<div v-for="x in productfrommarket" class="haha">
			<div>
			<div><img :src="x.imgSrc"></div>
			<div>{{x.descript}}</div>
			<div>{{x.price}}</div>
			</div>
		</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import {mapState, mapActions} from 'vuex'
import axios from 'axios'
import router from '../router'

	export default {
		data(){
		return {
			swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true
        }
		}
	},
		computed: {
			//映射State
            ...mapState([
            	
            	'productfrommarket'
            ])
		},
		mounted() {
			this.getProductsFromMarket(this.$route.params.marketId)
			//console.log(this.productfrommarket)	
		},
		methods: {
			...mapActions(['getProductsFromMarket'])
		}
	}
</script>

<style scoped>
	.title{
		height: 1.8rem;
		background: #333; 
	}
	.title .before_page{
		width: 2.1rem;
		height: 1.8rem;
		line-height: 1.1rem;
		color: #fff;
	}
	.title .iconfont{
		font-size:24px;
	}
	.title .title_des{
		width: 8.2rem;
		height: 1.8rem;
		line-height: 1.8rem;
		color: #fff;
		font-size: 20px;
	}
	.title .types{
		width: 2.1rem;
		height: 1.8rem;
		color: #fff;

	}
	.nav_list{
		height: 1.6rem;
		line-height: 1.6rem;
		font-size: 18px;
		display: flex;
		justify-content: space-around;
	}
	.nav_list span{
		height: 1.6rem;
		flex:1;
	}
	.haha{
		float: left;
		width: 50%;
		height: 9rem;
	}
	.haha img{
		float: left;
		width: 97%;
	}
</style>