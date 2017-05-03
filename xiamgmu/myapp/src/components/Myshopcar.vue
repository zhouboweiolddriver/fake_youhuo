<template>
	<div id="myshopcar">
		<div class="cart_header">
			<span class="before"><</span>
			<h1 class="title">购物车</h1>
			<span class="edit">编辑</span>
		</div>
		

		<h2>{{$route.params.userid}}</h2>

		<ul class="shopList">
			<li v-for="x in carlist" class="listItem" >
				<div class="ipt">		
					
					 <div  @click="say" v-bind:id="(''+(x.proid))" >
					 	<!-- <i class="iconfont" >&#xe8f8;</i> -->
					 	<!-- <span ref="('pro'+(x.proid))">AAAAA</span> -->
					 	<hello-counter></hello-counter>
					 </div>
					 

				</div>
						
				<img :src="x.imgsrc" class="shopImg">
				<div class="des">
					<p class="name">
						<span class="shopName">{{x.proname}}</span>
						<span class="count singcount">×{{x.mycount}}</span>
					</p>
					<p class="price singprice">￥{{x.price}}</p>
					<span class="singtot">单品总价{{x.price * x.mycount}}</span>	
				</div>
			</li>
		</ul>
		<div class="footer">
			
			<div class="money">
				<p class="all">总计：¥{{tot}}</p>
				<p class="freight">不含运费</p>
			</div>
			<div class="Settlement">去结算</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import router from '../router'
import Vue from 'vue'

var Child = Vue.component('hello-counter', {
  template: '<span  style="display:inline-block;height:4rem;width:1.2rem;text-align:left;"><i class="iconfont" v-show="buy" style="font-size:0.7rem;" @click="buy = !buy" >&#xe8f8;</i><i class="iconfont" v-show="!buy" style="font-size:0.7rem;" @click="buy = !buy">&#xe739;</i></span>',
  // data 是一个函数，因此 Vue 不会警告，
  // 但是我们为每一个组件返回了同一个对象引用
  data: function () {
    return {
    buy:true
  }
  }
})

	export default{
		data:function(){
			return{
				carlist:[],
				tot:'',
				name:'',
				isSelect:{
					isSelect:true
				},
				
			}
		},
		methods:{

			
			say:function(e){
				this.isSelect.isSelect=!(this.isSelect.isSelect)
				
				var str = e.currentTarget.id
				  // var child = this.$refs.str
				  // console.log(child)
				 console.log("id"+e.currentTarget.id)
				 //console.log("count"+e.currentTarget.class)
				 //sql
				 var proid = e.currentTarget.id
				 var self = this
				 var str = document.cookie
				var reg = /name=[a-z 0-9]*/

				var customer = (str.match(reg)[0]).split('=')[1]
				if(customer){
					this.name=customer
				}
				// if(!(this.isSelect.isSelect) ){
				// 	//删除
					console.log("删除")
				 $.ajax({
			        contentType: "application/json" ,
			        type: "POST",
			        url: 'http://localhost:3000/api/removepropost',
			        data: { username:self.name,proid:""+e.currentTarget.id },
			        dataType: 'jsonp',
			        success:function(d){
			                    console.log(d);

			                    $.ajax({
			        contentType: "application/json" ,
			        type: "POST",
			        url: 'http://localhost:3000/api/showpostincar',
			        data: { username:self.name,proid:""+self.$route.params.proId },
			        dataType: 'jsonp',
			        success:function(d){
			                    console.log(d);
			                     //self.carlist=d
			                    var len = d.length;
			                    var tot =0
			                    for(let i=0;i<len;i++){
			                    	tot += d[i].tot
			                    }
			                    self.tot = tot;
			                    //console.log(self.tot)
			                     //console.log(self.carlist)

			                }
			        })
			                     //self.carlist=d
			                    // var len = d.length;
			                    // var tot =0
			                    // for(let i=0;i<len;i++){
			                    // 	tot += d[i].tot
			                    // }
			                    // self.tot = tot;
			                    //console.log(self.tot)
			                     //console.log(self.carlist)

			                }
			        })
				// }else{
				// 	//返回添加
				// 	console.log('添加')
					
				// }
				
				 


			}
		},
		components:{
			"hello-counter":Child
		},
		mounted(){
			//console.log("mounted running")
			//console.log(this.$route.userid)
			var str = document.cookie
			var reg = /name=[a-z 0-9]*/

			var customer = (str.match(reg)[0]).split('=')[1]
			if(customer){
				this.name=customer
			}
			var self = this
			$.ajax({
			        contentType: "application/json" ,
			        type: "POST",
			        url: 'http://localhost:3000/api/showpostincar',
			        data: { username:self.name,proid:""+self.$route.params.proId },
			        dataType: 'jsonp',
			        success:function(d){
			                    console.log(d);
			                     self.carlist=d
			                    var len = d.length;
			                    var tot =0
			                    for(let i=0;i<len;i++){
			                    	tot += d[i].tot
			                    }
			                    self.tot = tot;
			                    //console.log(self.tot)
			                     //console.log(self.carlist)

			                }
			        })
		}
	}
</script>

<style scoped>
	#myshopcar{
		width: 100%;
		height: 100%;
	}
	.cart_header{
		height: 1.8rem;
		background: #333;
	}
	.cart_header .before{
		display: block;
		width: 1.8rem;
		height: 1.8rem;
		line-height: 1.8rem;
		color: #fff;
		font-weight: 400;
		font-size: 24px;
		float: left;
	}
	.cart_header .title{
		width: 8rem;
		height: 1.8rem;
		line-height: 1.8rem;
		text-align: center;
		color: #fff;
		font-weight: 400;
		font-size: 24px;
		float: left;

	}
	.radio{
		line-height: 4.2rem;
	}
	.ipt{
		height: 4.2rem;
	}
	.cart_header .edit{
		display: block;
		width: 1.8rem;
		height: 1.8rem;
		line-height: 1.8rem;
		color: #fff;
		font-weight: 400;
		font-size: 20px;
		float: left;
		text-align: center;
	}
	.shopList{
		width: 100%;
		height: 100%;
		background: #eee;
	}
	.shopList .listItem{
		width: 100%;
		height: 4.2rem;
		background: #fff;	
	}
	.shopList .listItem .ipt{
		width: 0.8rem;
		height: 4.2rem;
		float: left;
		line-height: 4.2rem;
	}
	.shopList .listItem .radio{
		display: inline-block;
		width: 0.5rem;
		height: 0.5rem;
		line-height: 4.2rem;
	}
	.shopList .listItem .shopImg{
		display: block;
		width: 4rem;
		height: 4rem;
		float: left;
		margin-right: 0.3rem;
	}
	.shopList .listItem .des{
		width: 7rem;
		height: 4.2rem;
		float: left;
	}
	.shopList .listItem .des .name{
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		margin-top:0.5rem;
		font-size: 14px;
	}
	.shopList .listItem .des .name .count{
		margin-left: 1.5rem;

	}
	.shopList .listItem .des .price{
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		color: red;
		font-size: 16px;
		margin-top: 0.3rem;
	}
	.footer{
		width: 100%;
		height: 2rem;
		background: #fff;
		border-top: 1px solid #ccc;
		position: fixed;
		bottom: 0;
	}
	.footer .input{
		width: 0.8rem;
		height: 2rem;
		float: left;
		line-height: 2.3rem;
		margin-left: 0.3rem;
	}
	.footer .input input{
		display: inline-block;
		width: 0.7rem;
		height: 0.7rem;
	}
	.footer .money{
		width: 7.4rem;
		height: 2rem;
		float: left;
	}
	.footer .money .all{
		height: 0.8rem;
		line-height: 0.8rem;
		text-align: right;
		margin-top: 0.2rem;
		color: #eb0313;
		font-size: 16px;
	}
	.footer .money .freight{
		height: 0.8rem;
		line-height: 0.8rem;
		text-align: right;
		color: #999;
	}
	.footer .Settlement{
		width: 3rem;
		height: 1.4rem;
		line-height: 1.4rem;
		text-align: center;
		background: #eb0313;
		color: #fff;
		font-weight: 400;
		font-size: 20px;
		float: right;
		margin-top: 0.3rem;
		margin-right: 0.3rem;
	}
	.singtot{
		float: right;
    font-size: 0.5rem;
    color: red;
	}
	.singcount{
		float: right;
	}
</style>