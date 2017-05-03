<style type="text/css" src="mint-ui/lib/style.css"></style>

<template>
	<div>
		<div id="excellent_head">
			<span class="span_i"><i class="iconfont">&#xe62c;</i></span>
			<p class="head_title">潮流优选</p>
		</div>
		<ul id="nav_list">
			<li class="l" @click="changeMan()"><span v-bind:class="{active:man}">MEN男士</span></li>
			<li class="l woman" @click="changeWoman()"><span v-bind:class="{active:woman}">WOMAN女士</span></li>
		</ul>

		<ul id="changeDiv">
			<li class="manDiv changeLi" v-if = "level =='1'">
				<div class="excellent_slider">
					<mt-swipe :auto="4000">
						<mt-swipe-item>
							<img src="static/images/excellent/l1.jpg">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="static/images/excellent/l2.jpg">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="static/images/excellent/l3.jpg">
						</mt-swipe-item>
					</mt-swipe>		
				</div>

				<h2 class="newTitle">新品来到</h2>
				<div class="newGoods">
					<img src="static/images/excellent/a.jpg">
				</div>
				<h2 class="noticeTitle">注目品牌</h2>
				<div class="noticeDiv newGoods">
					<img src="static/images/excellent/c.jpg">
				</div>	
				<div class="smallSlider">
					<ul class="s_list">
						<li class="l">
							<img src="static/images/excellent/1.jpg">
						</li>
						<li class="l">
							<img src="static/images/excellent/2.jpg">
						</li>
						<li class="l">
							<img src="static/images/excellent/3.jpg">
						</li>
						<li class="l">
							<img src="static/images/excellent/4.jpg">
						</li>
						<li class="l">
							<img src="static/images/excellent/5.jpg">
						</li>
					</ul>
				</div>
				<h2 class="newTitle">热门品类</h2>
				<div class="hotType">
					<div class="hotGoods l"><img src="static/images/excellent/T.jpg"></div>
					<div class="hotGoods l"><img src="static/images/excellent/W.jpg"></div>
					<div class="hotGoods l"><img src="static/images/excellent/s.jpg"></div>
					<div class="hotGoods l"><img src="static/images/excellent/sx.jpg"></div>
					<div class="hotGoods l"><img src="static/images/excellent/ps.jpg"></div>
					<div class="hotGoods l"><img src="static/images/excellent/k.jpg"></div>
				</div>
				<h2 class="newTitle">热门商品</h2>
				<div class="hotshopping">
					<a href="javascript:;" class="hot_a">
						<dl>
							<dt><img src="static/images/excellent/hot1.jpg"></dt>
							<dd>
								<p class="describe">Undefeated 经典油画logo影印T恤衫</p>
								<p class="price">¥ 99</p>
							</dd>
						</dl>
					</a>
					<a href="javascript:;" class="hot_a">
						<dl>
							<dt><img src="static/images/excellent/hot2.jpg"></dt>
							<dd>
								<p class="describe">Undefeated 经典油画logo影印T恤衫</p>
								<p class="price">¥ 99</p>
							</dd>
						</dl>
					</a>
					<a href="javascript:;" class="hot_a">
						<dl>
							<dt><img src="static/images/excellent/hot3.jpg"></dt>
							<dd>
								<p class="describe">Undefeated 经典油画logo影印T恤衫</p>
								<p class="price">¥ 99</p>
							</dd>
						</dl>
					</a>
				</div>
			</li>
			<li class="manDiv changeLi" v-if = "level =='2'">
				<div class="excellent_slider">
					<mt-swipe :auto="4000">
						<mt-swipe-item>
							<img src="static/images/excellent/nl1.jpg">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="static/images/excellent/nl2.jpg">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="static/images/excellent/nl3.jpg">
						</mt-swipe-item>
					</mt-swipe>		
				</div>
				
				<h2 class="newTitle">新品来到</h2>
				<div class="newGoods">
					<img src="static/images/excellent/aa.jpg">
				</div>
				<h2 class="noticeTitle">注目品牌</h2>
				<div class="noticeDiv newGoods">
					<img src="static/images/excellent/c.jpg">
				</div>	
				<div class="smallSlider">
					<ul class="s_list">
						<li class="l">
							<img src="static/images/excellent/1.jpg">
						</li>
						<li class="l">
							<img src="static/images/excellent/2.jpg">
						</li>
						<li class="l">
							<img src="static/images/excellent/3.jpg">
						</li>
						<li class="l">
							<img src="static/images/excellent/4.jpg">
						</li>
						<li class="l">
							<img src="static/images/excellent/5.jpg">
						</li>
					</ul>
				</div>
				<h2 class="newTitle">热门品类</h2>
				<div class="hotType">
					<div class="hotGoods l"><img src="static/images/excellent/T.jpg"></div>
					<div class="hotGoods l"><img src="static/images/excellent/W.jpg"></div>
					<div class="hotGoods l"><img src="static/images/excellent/s.jpg"></div>
					<div class="hotGoods l"><img src="static/images/excellent/sx.jpg"></div>
					<div class="hotGoods l"><img src="static/images/excellent/ps.jpg"></div>
					<div class="hotGoods l"><img src="static/images/excellent/k.jpg"></div>
				</div>
				<h2 class="newTitle">热门商品</h2>
				<div class="hotshopping">
					<a href="javascript:;" class="hot_a">
						<dl>
							<dt><img src="static/images/excellent/hot4.jpg"></dt>
							<dd>
								<p class="describe">Undefeated 经典油画logo影印T恤衫</p>
								<p class="price">¥ 99</p>
							</dd>
						</dl>
					</a>
					<a href="javascript:;" class="hot_a">
						<dl>
							<dt><img src="static/images/excellent/hot5.jpg"></dt>
							<dd>
								<p class="describe">Undefeated 经典油画logo影印T恤衫</p>
								<p class="price">¥ 99</p>
							</dd>
						</dl>
					</a>
					<a href="javascript:;" class="hot_a">
						<dl>
							<dt><img src="static/images/excellent/hot2.jpg"></dt>
							<dd>
								<p class="describe">Undefeated 经典油画logo影印T恤衫</p>
								<p class="price">¥ 99</p>
							</dd>
						</dl>
					</a>
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
				man: true,
				woman: false,
				level:'1'
			} 
		},
		methods:{
			changeMan:function () {
				this.man = true;
				this.woman = false;
				this.level ='1';
			},
			changeWoman:function () {
				this.woman = true;
				this.man = false;
				this.level ='2';
			},
		},
		components: obj
	}

</script>

<style scoped>
	html,body{
		height: 100%;
	}
	a{
		color: #3e3e3e;
		text-decoration: none;
	}
	#excellent_head{
		width:100%;
		height: 1.28rem;
		background: #333;
	}
	#excellent_head .span_i{
		width: 1.6rem;
		height: 1.28rem;
		line-height: 1.28rem;
		color:#fff;
		float: left;
	}
	#excellent_head .head_title{
		height: 1.28rem;
		line-height: 1.28rem;
		color: #fff;
		font-size: 18px;
		text-indent: -1.6rem;
	}
	#nav_list{
		height: 1.56rem;
		display: flex;
		justify-content: space-around;

	}
	#nav_list li.l{
		height: 1.56rem;
		line-height: 1.56rem;
		flex: 1;
		font-size:18px;
		display: block;
		color: #aaa;
	}
	.active{
		border-bottom: 2px solid #333;
		color: #333;
	}
	#changeDiv{
		height: 100%;
	}
	#changeDiv .changeLi{
		height: 100%;
	}
	#changeDiv .changeLi .excellent_slider{
		height: 6rem;
	}
	#changeDiv .changeLi .excellent_slider img{
		width: 12.42rem;
		height: 6rem;
	}
	#changeDiv .changeLi .newTitle{
		height: 1.52rem;
		line-height: 1.52rem;
		font-size: 20px;
	}
	#changeDiv .changeLi .newGoods{
		width: 100%;
		height: 6rem;
	}
	#changeDiv .changeLi .newGoods img{
		width: 100%;
		height: 100%;
	}
	#changeDiv .changeLi .noticeTitle{
		height: 1.52rem;
		line-height: 1.52rem;
		font-size: 20px;
	}
	#changeDiv .changeLi .smallSlider{
		height: 5.4rem;
		overflow: hidden;
	}
	#changeDiv .changeLi .smallSlider .s_list{
		width: 30rem;
		height: 5.4rem;
	}
	#changeDiv .changeLi .smallSlider .s_list li{
		width: 4.2rem;
		height: 4.2rem;
		margin: 0.6rem 0.3rem 0.6rem 0.3rem;
	}
	#changeDiv .changeLi .smallSlider .s_list li:nth-child(1){
		margin-left: 0.6rem;
	}
	#changeDiv .changeLi .smallSlider .s_list li img{
		width: 100%;
		height: 100%;
	}
	#changeDiv .changeLi .hotType{
		width: 100%;
		height: 18.63rem;
	}
	#changeDiv .changeLi .hotType .hotGoods{
		width: 6.21rem;
		height: 6.21rem;
	}
	#changeDiv .changeLi .hotType .hotGoods img{
		width: 100%;
		height: 100%;
	}
	#changeDiv .changeLi .hotshopping{
		width: 100%;
		height: 100%;
	}
	#changeDiv .changeLi .hotshopping .hot_a{
		display: block;
		width: 5.4rem;
		height: 10rem;
		float: left;
		margin-left: 0.5rem;
		margin-top:0.75rem;
	}
	#changeDiv .changeLi .hotshopping .hot_a dl{
		width: 100%;
		height: 100%;

	}
	#changeDiv .changeLi .hotshopping .hot_a dl dt{
		width: 100%;
		height: 7.1rem;
	}
	#changeDiv .changeLi .hotshopping .hot_a dl dt img{
		width: 100%;
		height: 100%;
	}
	#changeDiv .changeLi .hotshopping .hot_a dl dd{
		width: 100%;
		height: 2.84rem;
	}
	#changeDiv .changeLi .hotshopping .hot_a dl dd .describe{
		width: 100%;
		height: 1rem;
		margin-top:0.46rem;
		text-align:left;
	}
	#changeDiv .changeLi .hotshopping .hot_a dl dd .price{
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		text-align:left;
	}
</style>