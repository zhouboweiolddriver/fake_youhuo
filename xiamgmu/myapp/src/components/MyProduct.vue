<template>
	<div style=" overflow:hidden;">
		<div class="title">
			<span class="before_page l"><i class="iconfont">&#xe612;</i></span>
			<p class="title_des l">商品详情</p>
			<span class="types l"><i class="iconfont">&#xe6e3;</i></span>
		</div>
		<!-- <div><img :src="productdetail.imgSrc"></div> -->
		<div id="myawesomelider">

			<swiper :options="swiperOption">
		        <swiper-slide v-for="x in productdetail">
			        <div>
			      		<img :src="x.imgsrc">
			      	</div>
	      		</swiper-slide>
	        <!-- <swiper-slide><div>
	      <img :src="$store.state.slideritems[1].imgsrc">
	      </div></swiper-slide>
	        <swiper-slide><div>
	      <img :src="$store.state.slideritems[2].imgsrc">
	      </div></swiper-slide>
	        <swiper-slide><div>
	      <img :src="$store.state.slideritems[2].imgsrc">
	      </div></swiper-slide> -->
		        <div class="swiper-pagination" slot="pagination">
		        	
		        </div>
	      	</swiper>
		</div>

		<div id="des">{{productdetail[0].descript}}</div>
		<div id="price">￥{{productdetail[0].price}}</div>
		<div id="markettap">
		<a :href="'#market/'+productdetail[0].marketid">
			<span>{{productdetail[0].marketname}}</span>
			<span>进入店铺</span>
		</a>
		</div>
		<div id="tuijian">店铺推荐</div>
		<div style="overflow:hidden">
		
			<div v-for="x in productfrommarket" class="haha">
			<a :href="'#product/'+x.proid">	
			<div>
			<div><img :src="x.imgsrc"></div>
			<div>{{x.description}}</div>
			<div>{{x.price}}</div>
			</div>
			</a>
			</div>

		</div>
		
		<div id="bar"></div>
      	<!-- <router-view name = "shopcar" ></router-view> -->
      	<shop-car></shop-car>
	</div>
</template>
<script type="text/javascript">
import {mapState, mapActions} from 'vuex'
import axios from 'axios'
import router from '../router'
import ShopCar from './ShopCar'

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
            	
            	'productdetail',
            	'productfrommarket'
            ])
		},
		mounted() {
		    //获取热门商品列表
		    console.log('mounted')
		    var self = this
		    //console.log('getProductsDetail')
			this.getProductsDetail(this.$route.params.proId);
			console.log(this.productdetail)

			this.getProductsFromMarket(this.$route.params.proId)
			console.log("timeou"+this.productfrommarket)
			
		},
		methods: {
			...mapActions(['getProductsDetail','getProductsFromMarket'])
			
		},
		
		components: {
			ShopCar
		},
		watch: {
	    	'$route':function(){
	    		// var self = this
	    		 console.log('change');
	    		 this.getProductsDetail(this.$route.params.proId);
	    		 //window.srcollTo(0,0)
	    		 
	    		// this.getProductsFromMarket(self.$route.params.proId)
	    	}
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
		font-size: 24px;
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
	#bar{
		height: 2.5rem;
		width: 100%;
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
	.haha a{
		display: inline-block;
	}
	#myawesomelider{
		height: 9rem;
		width: 100%;
		margin-top:0.4rem;
		margin-bottom: 0.5rem;
	}
	.swiper-container{
		height: 9rem;
		width: 100%;
	}
	.swiper-container img{
		height: 9rem;
		width: 70%;
	}
	#price{
		height: 1.6rem;
		color: red;
		font-size: 18px;
		line-height: 1.6rem;
		border-bottom: 1px solid #ccc;
	}
	#des{
		height: 1.6rem;
		width: 100%;
		background: #3e3e3e;
		color: white;
		line-height: 1.6rem;
		font-weight: 400;
		font-size: 18px;
		border-bottom: 1px solid #ccc;
	}
	#markettap a{
		text-decoration: none;
		display: block;
		height: 1.6rem;
		width: 100%;
		border-bottom:1px solid #ccc;
	}
	#markettap span{
		float: left;
		width: 50%;
		height: 1.6rem;
		line-height: 1.6rem;
		text-align: center;
		font-size: 16px;
		color: #3e3e3e;
	}
	#tuijian{
		height: 1.6rem;
		line-height: 1.6rem;
		font-size: 18px;
	}
</style>