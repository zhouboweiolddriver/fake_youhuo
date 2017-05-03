<template>
	<div>
		<ul id="indexcate">
		<li><a class="upper_img"><img src="//img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01ae835d5ae6d9502818daf351ad2db6cf.png?imageView2/2/w/98/h/98/q/60" alt=""></a><a class="down_words">新品到着</a></li>


		<li><a class="upper_img" :href="'#/excellent/'"><img src="//img10.static.yhbimg.com/yhb-img01/2017/02/03/09/0126acdfd5558ca5be890abc9f6d928312.png?imageView2/2/w/98/h/98/q/60" alt=""></a><a class="down_words">潮流优选</a></li>


		<li><a class="upper_img" :href="'#/star/'"><img src="//img11.static.yhbimg.com/yhb-img01/2017/02/03/09/01184bba3491999801ec2b9c450526e9dc.png?imageView2/2/w/98/h/98/q/60" alt=""></a><a class="down_words">明星原创</a></li>


		<!-- <li></li> -->
		<router-link tag="li" to="/youhuo/cate"><a class="upper_img"><img src="//img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01b097e06ac9fc78bbcc3d3e0dfbe01fcc.png?imageView2/2/w/98/h/98/q/60" alt=""></a><a class="down_words">全部分类</a></router-link>

		<li><a class="upper_img"><img src="//img11.static.yhbimg.com/yhb-img01/2017/02/03/09/011004f5a04caaf9c18d7848049a75981e.png?imageView2/2/w/98/h/98/q/60" alt=""></a><a class="down_words">人气搭配</a></li>


		<li><a class="upper_img"><img src="//img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01a55ebc7f3be53fa782b89ac1ab25614d.png?imageView2/2/w/98/h/98/q/60" alt=""></a><a class="down_words">潮品推荐</a></li>


		<li><a class="upper_img"><img src="//img10.static.yhbimg.com/yhb-img01/2017/04/11/16/01449f4d73da6b5905592fcf9e0f845e8f.png?imageView2/2/w/98/h/98/q/60" alt=""></a><a class="down_words">领券中心</a></li>


		<li><a class="upper_img"><img src="//img11.static.yhbimg.com/yhb-img01/2017/02/03/09/01d35157ab5942ea40b4f08a11c1680a17.png?imageView2/2/w/98/h/98/q/60" alt=""></a><a class="down_words">折扣专区</a></li>

		</ul>

		<div class="bannerone">
			
				<img src="//img11.static.yhbimg.com/yhb-img01/2017/04/14/10/01d8b5fa38fbe82b508365c78d0799360f.jpg?imageView2/3/w/640/h/200/q/60" alt="">
			
		</div>

		<div class="bannerone">
			
				<img src="//img11.static.yhbimg.com/yhb-img01/2017/04/14/11/0173882d6afdee11362a478fc63d314e2b.jpg?imageView2/3/w/640/h/200/q/60" alt="">
			
		</div>
	</div>
</template>

<script type="text/javascript">

	export default {
		
	}
</script>

<style scoped>
	#indexcate{
		height: 5.06rem;
		width: 100%;
	}
	#indexcate li{
		margin: 0 auto;
		height: 2.53rem;
		display: inline-block;
		float: left;
		width: 25%;
		line-height: 2.53rem;
		text-align: center;
	}
	.upper_img{
		text-align: center;
		margin: 0 auto;
		display: block;
		height: 1.28rem;
		width: 1.28rem;
	}
	.down_words{
		display: block;
		height: 1.24rem;
		line-height: 1.24rem;
		text-align: center;
	}
	#indexcate li img{
		height: 1.28rem;
		width: 1.28rem;
	}
	.bannerone{
		width: 100%;
		height: 3.91rem;
	}
	.bannerone img{
	display: block;
    margin: 0 auto;
    max-width: 100%;
	}
</style>