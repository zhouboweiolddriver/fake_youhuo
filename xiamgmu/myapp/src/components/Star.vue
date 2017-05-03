<style type="text/css" src="mint-ui/lib/style.css"></style>

<template>
	<div id="star">
		<div class="star_div1">
			<a href="#">
				<i class="iconfont">&#xe612;</i>
			</a>
			<span> 明星原创</span>
		</div>
		<ul class="star_ul1">
			<li  class="l star_li1" @click = "changeBtn1()">
				<span v-bind:class="{active:blank}">原创潮牌</span>
			</li>
			<li  class="l" @click = "changeBtn2()" >
				<span v-bind:class="{active:stars}">明星潮品</span>
			</li>
		</ul>
		<div class="star_div2"  v-if="level =='1'">
			<dl  v-for = "item in star">
				<dt><img :src="item.img"/></dt>
				<dd>{{item.title}}</dd>
			</dl>
		</div>
			<div class="star_div3"  v-if="level =='2'">
				<div class="star_swipe" v-for="item in star" >
					<mt-swipe :auto="4000" >
			    		<mt-swipe-item >
							<img  :src="item.src1"/>
			    		</mt-swipe-item>			    		
			    		<mt-swipe-item >
							<img  :src="item.src2"/>
			    		</mt-swipe-item>
			    	</mt-swipe>
			    </div>	    	
			</div>
		
	  
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
				star:[],
				blank:true,
				stars:false
				}
		},
		methods: {
			changeBtn1:function(){
				this.blank = true;
				this.stars = false;
				this.level ='1';
			},
			changeBtn2:function(){
				this.stars = true;
				this.blank= false;				
				this.level ='2';
			}				
		},
		components: obj,
		mounted () {
			fetch('/static/data/star.json')
				.then(response => response.json())				
				.then(data => {
					// console.log('parsed json', data)
					this.star = data
				})
		}
	}
</script>
<style type="text/css" scoped>
	.star_ul1 li  .active{
		color:#333;
	}
	.star_swipe{
		margin-bottom:0.5rem;
		height:100%;
	}
	#star{
		width:100%;
		height:100%;
	}
	.star_div1{
		width:100%;
		height: 1.05rem;
		background-color:#3e3e3e;
		color:#fff;
	}
	.star_div1 a {
		display: block;
		height:1.05rem;
		line-height:1.05rem;
		float: left;
		text-align: left;
		padding-left: 0.46rem;
	}
	.star_div1 span{
		display: block;
		color:#fff;
		float:left;
		height:1.05rem;
		line-height: 1.05rem;
		width:11rem;
		text-align: center;
		font-size:0.5rem;
	}
	.star_div1 a i{
		color:#fff;
		font-size:0.6rem;
		line-height: 0.75rem;
		float: left;
		height:1.05rem;
	}
	.star_ul1 {
		display: flex;
		height:1.42rem;
		line-height: 1.42rem;
	}
	.star_ul1 li{
		flex: 1;
		font-size: 0.5rem;
		color:#ccc;
		height:1.42rem;
	}
	.star_ul1 li{
		border-right:0.01rem solid #ccc;
	}
	.star_ul1 li span{
		font-size: 0.5rem;
		color:#ccc;
	}
	.star_div2 dl dt img{
		width:100%;
	}
	.star_div2 dl dd{
		text-align: left;
		padding-left: 0.16rem;
		height:1.14rem;
		line-height:1.14rem;
		font-size: 0.4rem;
	}
	.star_div3{
		width: 12.42rem;
		height: 6rem;
	}
	.star_div3 img{
		width:100%;
	}
	.star_div3{
		background: #f0f0f0;
	}
</style>