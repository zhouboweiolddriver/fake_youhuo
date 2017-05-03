<template>
	<div class="my_con">
		<div class="my_top ">
			
			<div class="my_top_login"><span>{{username}}</span> <a href="/#youhuo/login" v-if="showlog">登录/注册</a></div>
			<ul class="l my_ul1">
				<li class="l"><a href="#">收藏的品牌</a></li>
				<li class="l"><a href="#">收藏的品牌</a></li>
				<li class="l my_ul1_li3"><a href="#">浏览的记录</a></li>
			</ul>
		</div>
		<div class="my_con_div1"><a href="#"><i class="iconfont">&#xe637;</i>关于防诈骗的重要提醒!</a></div>
		<div class="my_con_div2 ">
			<p><a href="#"><span class="my_div2_span1 l">我的订单</span><span class="my_div2_span2 l">查看全部订单 > </span></a></p>
			<ul class=" l">
				<li class="l div2_li1"><a href="#"><i class="iconfont">&#xe63b;</i>待付款</a></li>
				<li class="l"><a href="#"><i class="iconfont">&#xe661;</i>待发货</a></li>
				<li class="l"><a href="#"><i class="iconfont">&#xe63c;</i>待收货</a></li>
				<li class="l div2_li4"><a href="#"><i class="iconfont">&#xe6b9;</i>待晒单</a></li>
				<li class="l div2_li5"><a href="#"><i class="iconfont">&#xe6c9;</i>退/换货</a></li>
			</ul>
		</div>
		<div class="my_con_div3 l">
			<p><a href="#"><span class="my_div3_span1 l">我的资产</span></a></p>
			<ul class=" l">
				<li class="l div3_li1"><a href="#"><i class="iconfont">&#xe639;</i>优惠券</a></li>
				<li class="l"><a href="#"><i class="iconfont">&#xe60e;</i>有货币</a></li>
				<li class="l"><a href="#"><i class="iconfont">&#xe606;</i>限购码</a></li>
				<li class="l div3_li5"><a href="#"><i class="iconfont">&#xe8b0;</i>分期</a></li>
			</ul>
		</div>
		<div class="my_con_div4 l">
			<ul>
				<li class="l div4_li1"><a href="#"><i class="iconfont">&#xe61f;</i>我的逛<span> > </span></a></li>
				<li class="l div4_li2"><a href="#"><i class="iconfont">&#xe6b9;</i>我的晒单<span> > </span></a></li>
			</ul>
		</div>
		<div class="my_con_div5 l"><a href="#"><i class="iconfont">&#xe688;</i>邀请好友赢福利<span> > </span></a></div>
		<div class="my_con_div6 l"><a href="#"><i class="iconfont">&#xe63a;</i>服务与反馈<span> > </span></a></div>
		<img src="/static/img/my/mypic1.jpg" class="my_con_img"/>
		
		<div class="my_con_div7">
			<h2>为您优选新品</h2>
			<a href="#" class="div7_a">
				<dl class="l div7_dl">
					<dt><img src="/static/img/my/mypic2.jpg"></dt>
					<dd>
						<p>BOY BY BOY纯色个性系带衬衫</p>
						<span class="div7_span1">¥1499.00</span>
						<span class="div7_span2">¥1759.00</span>
					</dd>
				</dl>
			</a>
			<a href="#" class="div7_a">
				<dl class="l div7_dl">
					<dt><img src="/static/img/my/mypic3.jpg"></dt>
					<dd>
						<p>C2H4 全印花牛仔夹克</p>
						<span class="div7_span1">¥1299.00</span>
						<span class="div7_span2">¥1299.00</span>
					</dd>
				</dl>
			</a>
			<a href="#" class="div7_a">
				<dl class="l div7_dl">
					<dt>
						<p class="div7_p">NEW</p>
						<img src="/static/img/my/mypic4.jpg">
						<p class="div7_p2">即将售罄</p>
					</dt>
					<dd>
						<p>SANKUANZ X MYGE合作款 卡通图案印花T恤</p>
						<span class="div7_span1">¥369.00</span>
						<span class="div7_span2">¥369.00</span>
					</dd>
				</dl>
			</a>
			<a href="#" class="div7_a">
				<dl class="l div7_dl">
					<dt><img src="/static/img/my/mypic5.jpg"></dt>
					<dd>
						<p>3.1 Phillip Lim  简约植物图案印花T恤</p>
						<span class="div7_span1">¥1299.00</span>
						<span class="div7_span2">¥1299.00</span>
					</dd>
				</dl>
			</a>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data:function(){
			return{
				username:'',
				showlog:true
			}
		},
		mounted(){
			var str = document.cookie
			var reg = /name=[a-z 0-9]*/
			if(str.match(reg)){
				this.username = (str.match(reg)[0]).split('=')[1]
			}
			if(this.username){
				this.showlog=false
			}
			//console.log(this.username)	
		}
	}
</script>

<style scoped>

a{
	color:#3e3e3e;
}
.my_con{
	background:#f0f0f0;
	overflow: hidden;
}
.my_top {
	background: url(/static/img/my/headerbbg.jpg) no-repeat;
	background-position: 0;
    background-size: 100%;
	height:5.22rem;
	font-size:0.14rem;
}

.my_top .my_title .my_li1 a{
	display: block;
	padding-left: 0.4rem;
}

.my_top_login{
	width:3.58rem;
	height:1.28rem;
	border:0.02rem solid #fff;
	line-height: 1.28rem;
	text-align: center;
	position: absolute;
	left:4.4rem;
	top:1.5rem;
}
.my_top_login a{
	font-size: 0.5rem;
	color: #fff;
	display: block;

}
.my_ul1{
	width: 100%;
	height:1.32rem;
	position: absolute;
	left:0rem;
	top:4rem;
	background: #000;
}
.my_ul1 li{
	border-right: 0.01rem solid #ebebeb;
	padding-left:0.81rem;
	padding-right:0.81rem;
	height:1.32rem;
	line-height: 1.32rem;
	text-align: center;
}
.my_ul1 li a{
	width: 100%;
	height: 100%;
	display: block;
	font-size: 16px;
	color: #fff;
	text-align: center;
}
.my_ul1 .my_ul1_li3{
	border-right:none;
}
.my_con_div1{
	background: #fff;
	margin-top:0.25rem;
	height:1.45rem;
	text-align: left;
	padding-left: 0.4rem;
	line-height: 1.15rem;
	font-size: 0.44rem;
}
.my_con_div1 a i{
	color: #df1b24;
	padding-right:0.3rem; 
}
.my_con_div2{
	background: #fff;
	margin-top:0.25rem;
}
.my_con_div2 p{
	border-bottom: 0.01rem solid #ccc;
	height:1.4rem;
	line-height: 1.4rem;
}
.my_con_div2 p span.my_div2_span1{
	font-size: 0.5rem;
	font-weight: bold;
	text-align: left;
	display: block;
	padding-left: 0.55rem;
	width: 5rem;
}
.my_con_div2 p span.my_div2_span2{
	font-size: 0.45rem;
	color: #ccc;
	display: block;
	padding-left: 3rem;
}
.my_con_div2 ul{
    background: #fff;
    width: 100%;
}
.my_con_div2 ul li a i{
	font-size: 0.8rem;
}
.my_con_div2 ul li {
	margin-left:0.4rem;
	width:1.1rem;
	padding-left: 0.25rem;
	padding-right: 0.25rem;
}
.my_con_div2 ul li.div2_li4 a i{
	color: #fe0000;
}
.my_con_div2 .div2_li1{
	padding-left: 1rem;
}
.my_con_div2 .div2_li5{
	width:1.2rem;
	padding-right:1rem;
}

.my_con_div3{
	background: #fff;
	margin-top:0.25rem;
	height:3.5rem;
	width: 100%;
}
.my_con_div3 p {
	height:1.35rem;
	line-height: 1.35rem;
	border-bottom: 0.01rem solid #ccc; 
}
.my_con_div3 p span.my_div3_span1{
	font-size: 0.5rem;
	font-weight: bold;
	text-align: left;
	display: block;
	padding-left: 0.55rem;
	width: 5rem;
}

.my_con_div3 ul li a i{
	font-size: 0.8rem;
}
.my_con_div3 ul li.div3_li1 a i{
	color: #fe0000;
}
.my_con_div3 ul li {
	margin-left:0.4rem;
	width:1.1rem;
	padding-left: 0.6rem;
	padding-right: 0.6rem;
}
.my_con_div3 .div3_li1{
	padding-left: 1rem;
}
.my_con_div3 .div3_li5{
	padding-right:1rem;
}
.my_con_div4{
	width:100%;
	height: 2.7rem;
	background: #fff;
	margin-top:0.3rem;
}
.my_con_div4 ul li{
	width:100%;
	height:1.3rem;
	line-height: 1.3rem;
	text-align: left;
	padding-left: 0.4rem;
}
.my_con_div4 ul li a i{
	font-size: 0.6rem;
	padding-right:0.4rem;
}
.my_con_div4 ul li a{
	font-size: 0.5rem;
	display: block;
	width:100%;
	height:1.35rem;
}
.my_con_div4 ul li.div4_li1 a span{
	padding-left: 8.56rem;
	color: #ccc;
}
.my_con_div4 ul li.div4_li2 a i{
	color: #fe0000;
}
.my_con_div4 ul li.div4_li2 a span{
	padding-left: 8rem;
	color: #ccc;
}
.my_con_div5{
	background: #fff;
	margin-top:0.25rem;
	width: 100%;
	height: 1.4rem;
	text-align: left;
	padding-left: 0.4rem;
	font-size: 0.5rem;
}
.my_con_div5 i{
	font-size: 0.6rem;
    padding-right: 0.4rem;
}
.my_con_div5 span{
	padding-left: 6.5rem;
	color: #ccc;
}
.my_con_div6{
	background: #fff;
	margin-top:0.25rem;
	width: 100%;
	height: 1.4rem;
	text-align: left;
	padding-left: 0.4rem;
	font-size: 0.5rem;
}
.my_con_div6 i{
	font-size: 0.6rem;
    padding-right: 0.4rem;
}
.my_con_div6 span{
	padding-left: 7.5rem;
	color: #ccc;
}
.my_con_img{
	width:100%;
}
.my_con_div7{
	background: #fff;
	margin-top:0.15rem;
	width: 100%;
	overflow: hidden;
	/*height:10rem;*/
}
.my_con_div7 h2{
	text-align: center;
	height:1.56rem;
	line-height: 1.56rem;
	font-size: 0.5rem;
}
.div7_a{
	display: block;
	width:5.34rem;
	height:10.48rem;
	float: left;
	margin-left: 0.6rem;
}
.my_con_div7 .div7_dl{
	float: left;
	width:5.34rem;
	height:10.48rem;
	text-align: left;
	background: #fff;
	/*padding-left: 0.3rem;*/
}
.my_con_div7 .div7_dl dt {
	width:5.34rem;
	height:7.08rem;
	position: relative;
}
.my_con_div7 .div7_dl dt img{
	width:5.34rem;
	height:7.08rem;
}
.my_con_div7 .div7_dl dd p{
	/*height:1.62rem;*/
	line-height: 1rem;
	font-size: 0.35rem;
}
.my_con_div7 .div7_dl dd .div7_span1{
	color:#fe0000;
	font-size: 0.25rem;
	float: left;
}
.my_con_div7 .div7_dl dd .div7_span2{
	color:##ccc;
	font-size: 0.25rem;
	text-decoration: line-through;
	text-indent: 0.2rem;
	display: block;
	float: left;
}
.my_con_div7 .div7_dl dt .div7_p{
	background-color:#78dc7e;
	color: #fff;
	display: inline-block;
	padding-left:0.2rem;
	padding-right:0.2rem;
	position: absolute;
	left: -0.1rem;
	top:-0.6rem;
}
.my_con_div7 .div7_dl dt .div7_p2{
	background-color:#ffac5b;
	color: #fff;
	text-align: center;
	width:5.68rem;
	padding-top:0.09rem;
	padding-bottom:0.09rem;
	position: absolute;
	left: -0.17rem;
	bottom:0;
}
.my_top_login span{
	font-weight: bold;
    font-size: 0.6rem;
    color: white;
}
</style>