<template>
	<div id="shopcar">
		<a :href="'#myshopcar/'+'xxx'"><span @click="mycar" class="shopCart"><img src="static/images/cart/cart.jpg"></span></a>
		<span @click="showlist" class="len">{{carlist.length}}</span>	
		<span @click="remove" class="decrease">-</span>
		<span @click="addtocar" class="increase">加入购物车</span>
		
		
	</div>
	
</template>

<script type="text/javascript">
import router from '../router'

	export default{
		data:function(){
			return{
				counter:0,
				carlist:[],
				isShow:false,
				name:''
			}
		},
		mounted(){
			var str = document.cookie
			var reg = /name=[a-z 0-9]*/

			var customer = (str.match(reg)[0]).split('=')[1]
			if(customer){
				this.name=customer
			}
			var self =this
			//console.log(this.carlist)
			//console.log(this.counter)
			$.ajax({
			        contentType: "application/json" ,
			        type: "POST",
			        url: 'http://localhost:3000/api/mypost',
			         data: { username:self.name,proid:""+self.$route.params.proId },
			        dataType: 'jsonp',
			        success:function(d){
			                    console.log('mounted 初始化底部购物车商品'+d);
			                    self.carlist=d
			                    //console.log(self.carlist)
			                }
			        })
		},
		methods:{
			addtocar:function(){
				var self = this
				if(!this.name){
					console.log('无用户状态')
					router.push({ path: '/youhuo/my' })
					return;
				}
				//console.log(this.$route.params.proId)
			$.ajax({
			        contentType: "application/json" ,
			        type: "POST",
			        url: 'http://localhost:3000/api/post',
			         data: { username:self.name,proid:""+self.$route.params.proId },
			        dataType: 'jsonp',
			        success:function(d){
			                    //console.log(d);
			                    console.log(self.name)
			                    $.ajax({
			        contentType: "application/json" ,
			        type: "POST",
			        url: 'http://localhost:3000/api/mypost',
			         data: { username:self.name,proid:""+self.$route.params.proId },
			        dataType: 'jsonp',
			        success:function(d){
			                    console.log(d);
			                    self.carlist=d
			                    console.log('addtocar  添加商品'+self.carlist)
			                }
			        })

			                }
			        })
			},
			mycar:function(){
				var self = this

				$.ajax({
			        contentType: "application/json" ,
			        type: "POST",
			        url: 'http://localhost:3000/api/mypost',
			        data: { username:self.name,proid:""+self.$route.params.proId },
			        dataType: 'jsonp',
			        success: function(d){
			                    console.log(d);
			                    //console.log(self.carlist)
			                }
			        })
			},
			remove:function(){
				var self = this
				console.log('remove')
				//console.log(this.$route.params.proId)
				$.ajax({
			        contentType: "application/json" ,
			        type: "POST",
			        url: 'http://localhost:3000/api/removeformpost',
			         data: { username:self.name,proid:""+self.$route.params.proId },
			        dataType: 'jsonp',
			        success:function(d){
			                    console.log(d);
			                    console.log('重新获取')
			                    $.ajax({
			        contentType: "application/json" ,
			        type: "POST",
			        url: 'http://localhost:3000/api/mypost',
			         data: { username:self.name,proid:""+self.$route.params.proId },
			        dataType: 'jsonp',
			        success:function(d){
			                    console.log(d);
			                    self.carlist=d
			                    console.log(self.carlist)
			                }
			        })

			                }
			        })
			},
			showlist:function(){
				console.log('showlist start')
					var self = this
					this.isShow = true

				    $.ajax({
			        contentType: "application/json" ,
			        type: "POST",
			        url: 'http://localhost:3000/api/mypost',
			         data: { username:self.name,proid:""+self.$route.params.proId },
			        dataType: 'jsonp',
			        success:function(d){
			                    console.log(d);
			                    //console.log(self.carlist)
			                }
			        })

			    console.log('showlist end')
			}
		}
	}
</script>
<style scoped>
	#shopcar{
		position:fixed;
		bottom: 0;
		height: 2.2rem;
		width: 100%;
		line-height: 2rem;
		text-align: center;
		border-top: 1px solid #ccc;
		background: #fff;
		position: relative;
		position: fixed;
		bottom: 0;
	}
	.shopCart{
		width: 1.8rem;
		height: 1.6rem;
		float: left;
		margin-top: 0.3rem;
		margin-left: 0.4rem;
	}
	.shopCart img{
		display: block;
		width: 100%;
		height: 100%;
	}
	.len{
		width: 1rem;
		height: 1rem;
		float: left;
		background:  #eb0313;
		border-radius: 50%;
		position: absolute;
		color: #fff;
		text-align: center;
		line-height: 1rem;
		font-size: 16px;
		left: 1.7rem;
		top: 0.2rem;
	}
	.increase{
		display: block;
		width: 4.8rem;
		height: 1.5rem;
		background: #eb0313;
		font-size: 18px;
		font-weight: bold;
		line-height: 1.5rem;
		text-align: center;
		color: #fff;
		margin-top: 0.3rem;
		float: right;
		margin-right: 0.5rem;
	}
	.decrease{
		width: 2rem;
		height: 1.5rem;
		float: right;
		background: #eb0313;
		margin-right: 0.3rem;
		margin-top: 0.3rem;
		color: #fff;
		font-size: 18px;
		font-weight: bold;
		line-height: 1.5rem;
		text-align: center;
	}
</style>