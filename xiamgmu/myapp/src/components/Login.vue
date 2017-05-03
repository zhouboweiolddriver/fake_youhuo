<template>
	<div id="register_div">
		<ul class="register_ul1 l">
			<li class="l ul1_li1"><a href="#"> × </a></li>
			<li class="r ul1_li2"><a href="#"> 注册 </a></li>
		</ul>
		<div class="register_div1">
			<img class="div1_img1" src="/static/img/register/youhuo.png" />
		</div>
		<div class="register_div2">
			<img class="div2_img1" src="/static/img/register/yoho.png">
			<input v-model="username" class="div2_input1" type="text" placeholder="        手机号/邮箱" /><br/>
			<input v-model="pw" type="text" placeholder="密码" /><br/>
		</div>
		<button class="register_btn" @click="regest">注册</button>
		<button class="register_btn" @click="login">登录</button>
		<ul class="register_ul2 l">
			<li class="ul2_li1 l"><a href="#">海外手机</a></li>
			<li class="ul2_li2 l"><a href="#">快速登录</a></li>
			<li class="ul2_li3 l"><a href="#">忘记密码</a></li>
		</ul>
		<ul class="register_ul3 l">
			<li class="ul3_li1 l"><a href="#"><i class="iconfont">&#xe677;</i></a></li>
			<li class="ul3_li2 l"><a href="#"><i class="iconfont">&#xe675;</i></a></li>
			<li class="ul3_li3 l"><a href="#"><i class="iconfont">&#xe607;</i></a></li>
			<li class="ul3_li4 l"><a href="#"><i class="iconfont">&#xe785;</i></a></li>
		</ul>
	</div>
</template>

<script type="text/javascript">
import router from '../router/index.js'
	export default {
		data:function(){
			return{
				username:'',
				pw:''
			}
		},
		methods:{

			regest:function(){
				var self = this
				var username = this.username;
				var pw = this.pw;

				$.ajax({
			        contentType: "application/json" ,
			        type: "POST",
			        url: 'http://localhost:3000/api/regest',
			        data: { username:username,pw:pw },
			        dataType: 'jsonp',
			        success: function(d){
			                    console.log(d);
			                    if(d=="same username"){
			                    	//alert('the username was used')
			                    	console.log('用户名重复')
			                    }
			                    if(d=='username length at last xxx'){
			                    	console.log('用户名过短')
			                    }
			                    if(d.affectedRows == 1){
			                    	console.log('注册成功')
			                    	//保存cookie
			                    	document.cookie="name="+username;
			                    	router.go(-1)
			                    }
			                    //console.log(self.carlist)
			                }
			        })
			},
			login:function(){
				var self = this;
				var username = this.username;
				var pw = this.pw;

				$.ajax({
			        contentType: "application/json" ,
			        type: "POST",
			        url: 'http://localhost:3000/api/login',
			        data: { username:username,pw:pw },
			        dataType: 'jsonp',
			        success: function(d){
			                    console.log(d);
			                   if(d=='yes')
			                   	document.cookie="name="+username;
			                    	router.go(-1)
			                }
			        })
			}
		}
		
	}
</script>
<style type="text/css">
	#register_div{
		background:#a8a8a8;
		overflow: hidden;
		opacity: 0.8;
	}
	.register_ul1{
		width: 100%;
		height:0.88rem;
		line-height: 0.88rem;
		margin-top:0.8rem;
	}
	.register_ul1 li a{
		font-size:0.5rem;
		display: block;
		color: #fff;
	}
	.register_ul1 .ul1_li1 {
		border-radius: 50%;
		border:1px solid #ccc;
		width:0.9rem;
		height:0.9rem;
		margin-left:0.55rem;
	}
	.register_ul1 .ul1_li2 {
		border-radius: 5%;
		border:1px solid #ccc;
		width:01.73rem;
		line-height: 0.9rem;
		text-align: center;
		margin-right: 0.55rem;
	}
	div .div1_img1{
		width: 100%;
		margin-top:0.5rem;
	}
	.register_div2{
		position: relative;
	}
	.div2_img1{
		width:0.5rem;
		display: inline-block;
		position: absolute;
		left: 0.7rem;
		top:0.7rem;
	}
	.register_div2 input{
		width:11.32rem;
		height:1.16rem;
		border:none;
		background-color: #000;
		opacity: 0.3;
		margin-top: 0.4rem;
		color: #fff;
	}
	.register_div2 .div2_input1{
		text-indent: 0.9rem;
	}
	.register_btn{
		width:11.32rem;
		height:1.16rem;	
		margin-top:0.5rem;
		border:none;
		font-size: 0.5rem;
		color: #fff;
		line-height: 1.16rem;	
	}
	.register_ul2{
		margin-left: 0.55rem;
		margin-right:0.55rem;
		margin-top:0.5rem;
	}
	.register_ul2 li {
		padding-right: 2.6rem;
	}
	.register_ul2 li.ul2_li3{
		padding:0;
	}
	.register_ul2 li a{
		color: #fff;
		font-size: 0.5rem;
	}
	.register_ul3{
		width: 100%;
		height: 1.44rem;
		margin-top:4rem;
		padding-bottom: 0.5rem;
		display: flex;
		justify-content: space-around;
		/*margin-left: 0.55rem;*/
	}
	.register_ul3 li{
		height: 1.44rem;
		flex: 1;
	}
	.register_ul3 li a{
		display: block;
		width: 100%;
		height: 100%;
		text-align: center;
	}
	.register_ul3 li a i{
		font-size:30px;
		color: #fff;
		padding-bottom: 0.5rem;
	}
	
	
</style>