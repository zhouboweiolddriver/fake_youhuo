<style type="text/css" src="mint-ui/lib/style.css"></style>

<template>
	<div>
		<ul class="nav_list">
			<li @click = "changeLiOne()" v-bind:class="{active:one}">推荐</li>
			<li @click = "changeLiTwo()" v-bind:class="{active:two}">话题</li>
			<li @click = "changeLiThree()" v-bind:class="{active:three}">搭配</li>
			<li @click = "changeLiFour()" v-bind:class="{active:four}">潮人</li>
			<li @click = "changeLiFive()" v-bind:class="{active:five}">潮品</li>
			<li @click = "changeLiSix()" v-bind:class="{active:six}">专题</li>
		</ul>
		
		<ul class="main_list">
			<li class="recommend" v-if="level == '1'">
				
				<div class="excellent_slider">
					<mt-swipe :auto="4000">
						<mt-swipe-item>
							<img src="static/images/shopping/slider1.jpg">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="static/images/shopping/slider2.jpg">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="static/images/shopping/slider3.jpg">
						</mt-swipe-item>
					</mt-swipe>		
				</div>

				<div v-for = "item in shopList">
					<div class="shopDes">
						<h2 class="title">
							<img :src="item.headImg" class="l">
							<span class="l">{{item.userName}}</span>
						</h2>
						<div class="imgDiv">
							<div class="floatDiv">{{item.float}}</div>
							<img :src="item.divImg">
						</div>
						<h3 class="h3_describe">{{item.h3_describe}}</h3>
						<p class="p_describe">{{item.p_describe}}</p>
						<div class="time_describe">
							<p class="time l"><span></span>4月14日 12:10</p> 
							<p class="glance l"><span></span>11499</p>
							<p class="r"><span></span>6</p>
						</div>
					</div>
				</div>
			</li>
			<li class="recommend" v-if="level == '2'">
				
				<div class="excellent_slider">
					<mt-swipe :auto="4000">
						<mt-swipe-item>
							<img src="static/images/shopping/slider1.jpg">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="static/images/shopping/slider2.jpg">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="static/images/shopping/slider3.jpg">
						</mt-swipe-item>
					</mt-swipe>		
				</div>

				<div v-for = "item in shopList">
					<div class="shopDes">
						<h2 class="title">
							<img :src="item.headImg" class="l">
							<span class="l">{{item.userName}}</span>
						</h2>
						<div class="imgDiv">
							<div class="floatDiv">{{item.float}}</div>
							<img :src="item.divImg">
						</div>
						<h3 class="h3_describe">{{item.h3_describe}}</h3>
						<p class="p_describe">{{item.p_describe}}</p>
						<div class="time_describe">
							<p class="time l"><span></span>4月14日 12:10</p> 
							<p class="glance l"><span></span>11499</p>
							<p class="r"><span></span>6</p>
						</div>
					</div>
				</div>
			</li>
			<li class="recommend" v-if="level == '3'">
				
				<div class="excellent_slider">
					<mt-swipe :auto="4000">
						<mt-swipe-item>
							<img src="static/images/shopping/slider1.jpg">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="static/images/shopping/slider2.jpg">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="static/images/shopping/slider3.jpg">
						</mt-swipe-item>
					</mt-swipe>		
				</div>

				<div v-for = "item in shopList">
					<div class="shopDes">
						<h2 class="title">
							<img :src="item.headImg" class="l">
							<span class="l">{{item.userName}}</span>
						</h2>
						<div class="imgDiv">
							<div class="floatDiv">{{item.float}}</div>
							<img :src="item.divImg">
						</div>
						<h3 class="h3_describe">{{item.h3_describe}}</h3>
						<p class="p_describe">{{item.p_describe}}</p>
						<div class="time_describe">
							<p class="time l"><span></span>4月14日 12:10</p> 
							<p class="glance l"><span></span>11499</p>
							<p class="r"><span></span>6</p>
						</div>
					</div>
				</div>
			</li>
			<li class="recommend" v-if="level == '4'">
				
				<div class="excellent_slider">
					<mt-swipe :auto="4000">
						<mt-swipe-item>
							<img src="static/images/shopping/slider1.jpg">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="static/images/shopping/slider2.jpg">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="static/images/shopping/slider3.jpg">
						</mt-swipe-item>
					</mt-swipe>		
				</div>

				<div v-for = "item in shopList">
					<div class="shopDes">
						<h2 class="title">
							<img :src="item.headImg" class="l">
							<span class="l">{{item.userName}}</span>
						</h2>
						<div class="imgDiv">
							<div class="floatDiv">{{item.float}}</div>
							<img :src="item.divImg">
						</div>
						<h3 class="h3_describe">{{item.h3_describe}}</h3>
						<p class="p_describe">{{item.p_describe}}</p>
						<div class="time_describe">
							<p class="time l"><span></span>4月14日 12:10</p> 
							<p class="glance l"><span></span>11499</p>
							<p class="r"><span></span>6</p>
						</div>
					</div>
				</div>
			</li>
			<li class="recommend" v-if="level == '5'">
				
				<div class="excellent_slider">
					<mt-swipe :auto="4000">
						<mt-swipe-item>
							<img src="static/images/shopping/slider1.jpg">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="static/images/shopping/slider2.jpg">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="static/images/shopping/slider3.jpg">
						</mt-swipe-item>
					</mt-swipe>		
				</div>

				<div v-for = "item in shopList">
					<div class="shopDes">
						<h2 class="title">
							<img :src="item.headImg" class="l">
							<span class="l">{{item.userName}}</span>
						</h2>
						<div class="imgDiv">
							<div class="floatDiv">{{item.float}}</div>
							<img :src="item.divImg">
						</div>
						<h3 class="h3_describe">{{item.h3_describe}}</h3>
						<p class="p_describe">{{item.p_describe}}</p>
						<div class="time_describe">
							<p class="time l"><span></span>4月14日 12:10</p> 
							<p class="glance l"><span></span>11499</p>
							<p class="r"><span></span>6</p>
						</div>
					</div>
				</div>
			</li>
			<li class="recommend" v-if="level == '6'">
				
				<div class="excellent_slider">
					<mt-swipe :auto="4000">
						<mt-swipe-item>
							<img src="static/images/shopping/slider1.jpg">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="static/images/shopping/slider2.jpg">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="static/images/shopping/slider3.jpg">
						</mt-swipe-item>
					</mt-swipe>		
				</div>

				<div v-for = "item in shopList">
					<div class="shopDes">
						<h2 class="title">
							<img :src="item.headImg" class="l">
							<span class="l">{{item.userName}}</span>
						</h2>
						<div class="imgDiv">
							<div class="floatDiv">{{item.float}}</div>
							<img :src="item.divImg">
						</div>
						<h3 class="h3_describe">{{item.h3_describe}}</h3>
						<p class="p_describe">{{item.p_describe}}</p>
						<div class="time_describe">
							<p class="time l"><span></span>4月14日 12:10</p> 
							<p class="glance l"><span></span>11499</p>
							<p class="r"><span></span>6</p>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import { Swipe, SwipeItem, Loadmore} from 'mint-ui';
	var obj = {};
	obj[Swipe.name]= Swipe;
	obj[SwipeItem.name]= SwipeItem;

	export default {
		data () {
			return {
				level:'1',
				shopList:[],
				sliderImg:'',
				one:true,
				two:false,
				three:false,
				four:false,
				five:false,
				six:false
			}
		},
		methods: {
			changeLiOne:function () {
				this.level = '1'
			},
			changeLiTwo:function () {
				this.level = '2'
			},
			changeLiThree:function () {
				this.level = '3'
			},
			changeLiFour:function () {
				this.level = '4'
			},
			changeLiFive:function () {
				this.level = '5'
			},
			changeLiSix:function () {
				this.level = '6'
			}
		},
		mounted () {
			fetch('/static/data/shopping.json')
				.then(response => response.json())				
				.then(data => {
					// console.log('parsed json', data)
					this.shopList = data
				})
		},
		components: obj	
	}
</script>

<style scoped>
	.nav_list{
		width: 12.42rem;
		height: 1.35rem;
		display: flex;
		flex-flow: row;
		justify-content: space-around;
		text-align: center;
	}
	.nav_list li{
		flex: 1;
		height: 1.35rem;
		line-height: 1.35rem;		
	}
	.nav_list li a{
		font-size: 14px;
	}
	.main_list{
		height: 100%;
	}
	
	.main_list .recommend{
		height: 100%;	
		position: absolute;
	}
	.main_list .recommend .excellent_slider{
		height: 6.45rem;
	}
	.main_list .recommend  img{
		width: 100%;
		height: 100%;
	}
	/*============================   shopDes   ==============================*/
	.shopDes{
		height: 13.9rem;
	}
	.shopDes .title{
		height: 1.32rem;
		line-height: 1.32rem;
		overflow: hidden;
	}
	.shopDes .title img{
		display: block;
		width: 0.94rem;
		height: 0.94rem;
		border-radius: 50%;
		margin-top: 0.15rem;
		margin-left:0.4rem;
	}
	.shopDes .title span{
		width: 6.4rem;
		height: 100%;
		line-height: 1.32rem;
		margin-left: 0.46rem;
		text-align: left;
		font-size:14px;
	}
	.shopDes .imgDiv{
		height: 7.8rem;
		position: relative;
	}
	.shopDes .imgDiv img{
		width: 100%;
		height: 7.8rem;
	}
	.shopDes .imgDiv .floatDiv{
		position: absolute;
		top: 0;
		left: 0;
		background: #fff;
	}
	.shopDes .h3_describe{
		height: 1.58rem;
		line-height: 0.79rem;
		font-size: 18px;
		padding-left: 0.48rem;
	}
	.shopDes .p_describe{
		height: 1.2rem;
		line-height: 1.2rem;
		padding-left: 0.48rem;
	}
	.shopDes .time_describe{
		height: 1.5rem;
		line-height: 1.5rem;
		padding-left: 0.48rem;
	}
	.shopDes .time_describe p:nth-child(1){
		width: 3.84rem;
	}
	.shopDes .time_describe p:nth-child(2){
		width: 3.84rem;
	}
	.shopDes .time_describe p:nth-child(2){
		width: 3rem;
	}
</style>

