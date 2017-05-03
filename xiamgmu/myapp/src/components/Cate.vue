<template>
	<div class="cate_da">
	    <input type="text" name="search" class="search" placeholder="      搜索商品"/>
	    <ul class="u1">
	    	<li class="l cur" @click="Changeone()">Boys</li>
	    	<li class="l" @click="Changetwo()">Girls</li>
	    	<li class="l" @click="Changethree()">Kids</li>
	    	<li class="l" @click="Changefour()">LifeStyle</li>
	    </ul>
	    <div class="cate_shangyi" v-if="level=='1'">
	    <ul class="u2 l">
	    	<li class="active" @click="Changefive">上衣</li>
	    	<li @click="Changesix">裤装</li>
	    	<li @click="Changeseven">鞋靴</li>
	    	<li @click="Changeeight">包类</li>
	    	<li @click="Changennine">服配</li>
	    	<li @click="Changeten">内衣|家居服</li>
	    	<li @click="Changeeleven">美妆|个服</li>
	    </ul>
	  <ul class="l u3"  v-if="score=='1'" >
	    	<li>全部上衣</li>
	    	<li>T恤</li>
	    	<li>POPL</li>
	    	<li>衬衫</li>
	    	<li>夹克</li>
	    	<li>卫衣</li>
	    	<li>防风外套</li>
	    	<li>皮衣</li>
	    	<li>毛衣针线</li>
	    	<li>大衣风衣</li>
	    	<li>西装</li>
	    	<li>马甲</li>
	    	
	    </ul>
	     <ul class="l u3"  v-else-if="score=='2'">
	    	<li>全部裤装</li>
	    	<li>休闲裤</li>
	    	<li>短裤</li>
	    	<li>牛仔裤</li>
	    	<li>运动裤</li>
	    	<li>打底裤</li>
	    	<li>紧身裤</li>
	    	<li>连体裤</li>
	    	<li>西裤</li>
	    
	    </ul>
	    <ul class="l u3"   v-else-if="score=='3'">
	    
	    	<li>全部鞋靴</li>
	    	<li>休闲运动</li>
	    	<li>靴子</li>
	    	<li>时装鞋</li>
	    	<li>凉鞋</li>
	    	<li>拖鞋</li>
	    	<li>保养护理</li>

	    </ul>
	    <ul class="l u3"   v-else-if="score=='4'">
	    	<li>全部包类</li>
	    	<li>双肩包</li>
	    	<li>手拎包/单肩包</li>
	    	<li>钱包</li>
	    	<li>腰包</li>
	    	<li>邮差包</li>
	    	<li>电脑包</li>
	    	<li>储物包</li>
	    	<li>环保包</li>
	    	<li>包赔</li>
	    	<li>tote包</li>
	    	<li>旅行包</li>
	    	<li>旅行箱</li>
	    	
	    </ul>
        <ul class="l u3"   v-else-if="score=='5'">
	    	
	    	<li>全部服饰</li>
	    	<li>首饰</li>
	    	<li>帽子</li>
	    	<li>手表</li>
	    	<li>袜子</li>
	    	<li>配饰</li>
	    	<li>皮带</li>
	    	<li>太阳镜</li>
	    	<li>围巾</li>
	    	<li>手帕</li>
	    	<li>丝巾</li>
	    	<li>手套</li>
	    	<li>披肩</li>
	    
	    </ul>
	     <ul class="l u3"   v-else-if="score=='6'">
	    	
	    	<li>全部内衣家居服</li>
	    	<li>内裤</li>
	    	<li>家居服</li>
	    </ul>
         <ul class="l u3" v-else>
	    	
	    	<li>全部美妆个护</li>
	    	<li>个人护理</li>
	    	<li>纹身贴</li>
	    	<li>香水</li>
	    	<li>面部护理</li>
	    	<li>彩妆</li>
	    	
	    </ul>
        
	    </div>
	    <div class="cate_boy" v-else-if="level=='2'">
	    <ul class="u2 l">
	    	<li class="active" @click="Changeone1">上衣</li>
	    	<li  @click="Changeone2">裤装</li>
	    	<li  @click="Changeone3">群装</li>
	    	<li  @click="Changeone4">鞋靴</li>
	    	<li  @click="Changeone5">包类</li>
	    	<li  @click="Changeone6">服配</li>
	    	<li  @click="Changeone7">内衣|家居服</li>
	    	<li  @click="Changeone8">美妆|个服</li>
	    </ul>
	     <ul class="l u3" v-if="grade=='1'">
	    	<li>全部上衣</li>
	    	<li>T恤</li>
	    	<li>POPL</li>
	    	<li>衬衫</li>
	    	<li>夹克</li>
	    	<li>卫衣</li>
	    	<li>防风外套</li>
	    	<li>皮衣</li>
	    	<li>毛衣针线</li>
	    	<li>大衣风衣</li>
	    	<li>西装</li>
	    	<li>马甲</li>
	    	
	    </ul>
	     <ul class="l u3" v-else-if="grade=='2'" >
	   
	    	<li>全部裙装</li>
	    	<li>连衣裙</li>
	    	<li>平生裙</li>
	    	
	    </ul>
	    <ul class="l u3" v-else-if="grade=='3'" >
	    	<li>全部裤装</li>
	    	<li>休闲裤</li>
	    	<li>短裤</li>
	    	<li>牛仔裤</li>
	    	<li>运动裤</li>
	    	<li>打底裤</li>
	    	<li>紧身裤</li>
	    	<li>连体裤</li>
	    	<li>西裤</li>
	    </ul>
	    <ul class="l u3" v-else-if="grade=='4'" >
	    	<li>全部鞋靴</li>
	    	<li>休闲运动</li>
	    	<li>靴子</li>
	    	<li>时装鞋</li>
	    	<li>凉鞋</li>
	    	<li>拖鞋</li>
	    	<li>保养护理</li>
	    </ul>
	    <ul class="l u3" v-else-if="grade=='5'" >
	    	<li>全部包类</li>
	    	<li>双肩包</li>
	    	<li>手拎包/单肩包</li>
	    	<li>钱包</li>
	    	<li>腰包</li>
	    	<li>邮差包</li>
	    	<li>电脑包</li>
	    	<li>储物包</li>
	    	<li>环保包</li>
	    	<li>包赔</li>
	    	<li>tote包</li>
	    	<li>旅行包</li>
	    	<li>旅行箱</li>
	    </ul>
	    <ul class="l u3" v-else-if="grade=='6'" >
	    	<li>全部服饰</li>
	    	<li>首饰</li>
	    	<li>帽子</li>
	    	<li>手表</li>
	    	<li>袜子</li>
	    	<li>配饰</li>
	    	<li>皮带</li>
	    	<li>太阳镜</li>
	    	<li>围巾</li>
	    	<li>手帕</li>
	    	<li>丝巾</li>
	    	<li>手套</li>
	    	<li>披肩</li>
	    </ul>
	    <ul class="l u3" v-else-if="grade=='7'" >
	    	<li>全部内衣家居服</li>
	    	<li>内裤</li>
	    	<li>家居服</li>
	    		<li>文胸</li>
	    	<li>家居鞋</li>
	    </ul>
	       <ul class="l u3" v-else >
	    	<li>全部美妆个护</li>
	    	<li>个人护理</li>
	    	<li>纹身贴</li>
	    	<li>香水</li>
	    	<li>面部护理</li>
	    	<li>彩妆</li>
	    </ul>
	    </div>
	    <div class="cate_kid" v-else-if="level=='3'">
	    <ul class="u2 l">
	    	<li class="active" @click="Changetwo1">上衣</li>
	    	<li @click="Changetwo2">裤装</li>
	    	<li @click="Changetwo3">鞋靴</li>
	    	<li @click="Changetwo4">包类</li>
	    	<li @click="Changetwo5">服配</li>
	    	<li @click="Changetwo6">内衣|家居服</li>
	    	<li @click="Changetwo7">美妆|个服</li>
	    </ul>
	       <ul class="l u3" v-if="lala=='1'">
	    	<li>全部上衣</li>
	    	<li>T恤</li>
	    	<li>POPL</li>
	    	<li>衬衫</li>
	    	<li>夹克</li>
	    	<li>卫衣</li>
	    	<li>防风外套</li>
	    	<li>皮衣</li>
	    	<li>毛衣针线</li>
	    	<li>大衣风衣</li>
	    	<li>西装</li>
	    	<li>马甲</li>
	    	
	    </ul>
	     <ul class="l u3" v-else-if="lala=='2'" >
	   
	    	<li>全部裙装</li>
	    	<li>连衣裙</li>
	    	<li>平生裙</li>
	    	
	    </ul>
	    <ul class="l u3" v-else-if="lala=='3'" >
	    	<li>全部裤装</li>
	    	<li>休闲裤</li>
	    	<li>短裤</li>
	    	<li>牛仔裤</li>
	    	<li>运动裤</li>
	    	<li>打底裤</li>
	    	<li>紧身裤</li>
	    	<li>连体裤</li>
	    	<li>西裤</li>
	    </ul>
	    <ul class="l u3" v-else-if="lala=='4'" >
	    	<li>全部鞋靴</li>
	    	<li>休闲运动</li>
	    	<li>靴子</li>
	    	<li>时装鞋</li>
	    	<li>凉鞋</li>
	    	<li>拖鞋</li>
	    	<li>保养护理</li>
	    </ul>
	    <ul class="l u3" v-else-if="lala=='5'" >
	    	<li>全部包类</li>
	    	<li>双肩包</li>
	    	<li>手拎包/单肩包</li>
	    	<li>钱包</li>
	    	<li>腰包</li>
	    	<li>邮差包</li>
	    	<li>电脑包</li>
	    	<li>储物包</li>
	    	<li>环保包</li>
	    	<li>包赔</li>
	    	<li>tote包</li>
	    	<li>旅行包</li>
	    	<li>旅行箱</li>
	    </ul>
	    <ul class="l u3" v-else-if="lala=='6'" >
	    	<li>全部服饰</li>
	    	<li>首饰</li>
	    	<li>帽子</li>
	    	<li>手表</li>
	    	<li>袜子</li>
	    	<li>配饰</li>
	    	<li>皮带</li>
	    	<li>太阳镜</li>
	    	<li>围巾</li>
	    	<li>手帕</li>
	    	<li>丝巾</li>
	    	<li>手套</li>
	    	<li>披肩</li>
	    </ul>
	    <ul class="l u3" v-else-if="lala=='7'" >
	    	<li>全部内衣家居服</li>
	    	<li>内裤</li>
	    	<li>家居服</li>
	    		<li>文胸</li>
	    	<li>家居鞋</li>
	    </ul>
	    </div>
	    <div class="cate_lifestyle" v-else>
	    <ul class="u2 l" >
	    	<li  class="active" @click="Changethree1">上衣</li>
	    	<li @click="Changethree2">裤装</li>
	    	<li @click="Changethree3">鞋靴</li>
	    	<li @click="Changethree4">包类</li>
	    	<li @click="Changethree5">服配</li>
	    	<li @click="Changethree6">内衣|家居服</li>
	    	<li @click="Changethree7">美妆|个服</li>
	    </ul>

	       <ul class="l u3" v-if="haha=='1'">
	    	<li>全部上衣</li>
	    	<li>T恤</li>
	    	<li>POPL</li>
	    	<li>衬衫</li>
	    	<li>夹克</li>
	    	<li>卫衣</li>
	    	<li>防风外套</li>
	    	<li>皮衣</li>
	    	<li>毛衣针线</li>
	    	<li>大衣风衣</li>
	    	<li>西装</li>
	    	<li>马甲</li>
	    	
	    </ul>
	     <ul class="l u3" v-else-if="haha=='2'" >
	   
	    	<li>全部裙装</li>
	    	<li>连衣裙</li>
	    	<li>平生裙</li>
	    	
	    </ul>
	    <ul class="l u3" v-else-if="haha=='3'" >
	    	<li>全部裤装</li>
	    	<li>休闲裤</li>
	    	<li>短裤</li>
	    	<li>牛仔裤</li>
	    	<li>运动裤</li>
	    	<li>打底裤</li>
	    	<li>紧身裤</li>
	    	<li>连体裤</li>
	    	<li>西裤</li>
	    </ul>
	    <ul class="l u3" v-else-if="haha=='4'" >
	    	<li>全部鞋靴</li>
	    	<li>休闲运动</li>
	    	<li>靴子</li>
	    	<li>时装鞋</li>
	    	<li>凉鞋</li>
	    	<li>拖鞋</li>
	    	<li>保养护理</li>
	    </ul>
	    <ul class="l u3" v-else-if="haha=='5'" >
	    	<li>全部包类</li>
	    	<li>双肩包</li>
	    	<li>手拎包/单肩包</li>
	    	<li>钱包</li>
	    	<li>腰包</li>
	    	<li>邮差包</li>
	    	<li>电脑包</li>
	    	<li>储物包</li>
	    	<li>环保包</li>
	    	<li>包赔</li>
	    	<li>tote包</li>
	    	<li>旅行包</li>
	    	<li>旅行箱</li>
	    </ul>
	    <ul class="l u3" v-else-if="haha=='6'" >
	    	<li>全部服饰</li>
	    	<li>首饰</li>
	    	<li>帽子</li>
	    	<li>手表</li>
	    	<li>袜子</li>
	    	<li>配饰</li>
	    	<li>皮带</li>
	    	<li>太阳镜</li>
	    	<li>围巾</li>
	    	<li>手帕</li>
	    	<li>丝巾</li>
	    	<li>手套</li>
	    	<li>披肩</li>
	    </ul>
	    <ul class="l u3" v-else >
	    	<li>全部内衣家居服</li>
	    	<li>内裤</li>
	    	<li>家居服</li>
	    		<li>文胸</li>
	    	<li>家居鞋</li>
	    </ul>
	    </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return{
				level:"1",
				score:"1",
				grade:"1",
				lala:"1",
				haha:"1"
			}
		},
		methods:{ 
			Changeone:function()
			{
				this.level="1"
			},
			Changetwo:function()
			{
				this.level="2"
			},
			Changethree:function()
			{
				this.level="3"
			},
			Changefour:function()
			{
				this.level="4"
			},
			Changefive:function(){
				
				this.score="1"

			},
			Changesix:function(){
		     
				this.score="2"
			},
			Changeseven:function(){
				this.score="3"
			},
			Changeeight:function(){
				this.score="4"
			},
			Changennine:function(){
				this.score="5"
			},
			Changeten:function(){
				this.score="6"
			},
			Changeeleven:function(){
				this.score="7"
			},
			Changeone1:function(){
				this.grade="1"
			},
			Changeone2:function(){
				this.grade="2"
			},
			Changeone3:function(){
				this.grade="3"
			},
			Changeone4:function(){
				this.grade="4"
			},
			Changeone5:function(){
				this.grade="5"
			},
			Changeone6:function(){
				this.grade="6"
			},
			Changeone7:function(){
				this.grade="7"
			},
			Changeone8:function(){
				this.grade="8"
			},
			Changetwo1:function(){
				this.lala="1"
			},
			Changetwo2:function(){
				this.lala="2"
			},
			Changetwo3:function(){
				this.lala="3"
			},
			Changetwo4:function(){
				this.lala="4"
			},
			Changetwo5:function(){
				this.lala="5"
			},
			Changetwo6:function(){
				this.lala="6"
			},
			Changetwo7:function(){
				this.lala="7"
			},
			Changethree1:function(){
				this.haha="1"
			},
				Changethree2:function(){
				this.haha="2"
			},
				Changethree3:function(){
				this.haha="3"
			},
				Changethree4:function(){
				this.haha="4"
			},
				Changethree5:function(){
				this.haha="5"
			},
				Changethree6:function(){
				this.haha="6"
			},
				Changethree7:function(){
				this.haha="7"
			},
     },
       mounted () {
      $(function(){
        $('.u2 li').click(function(){
            $(this).addClass('active').siblings('li').removeClass('active');
            var index = $(this).index();
            console.log(index)
        }),
          $('.u1 li').click(function(){
            $(this).addClass('cur').siblings('li').removeClass('cur');
            // console.log('fdsa')
            var index = $(this).index();
            console.log(index)

         })
      })

  },
	updated(){
		 $(function(){
         $('.u2 li').click(function(){
            $(this).addClass('active').siblings('li').removeClass('active');
            // console.log('fdsa')
            var index = $(this).index();
            console.log(index)
        }),
          $('.u1 li').click(function(){
            $(this).addClass('cur').siblings('li').removeClass('cur');
            // console.log('fdsa')
            var index = $(this).index();
            console.log(index)

         })
         
      }) 

	}	
 }
      
</script>
		

<style scoped>
.active{
	background:white;
}
.cur{
	color:black;
}

.cate_da{
	background:#f8f8f8;
}	
.cate_da input{
	width:11.61rem;
	height:1.2rem;
	margin-top:0.3rem;
	border-radius: 0.5rem;
	border: none;
	line-height:1.2rem;
   
    background-position: 5px 8px;
}
.cate_da ul.u1{
	margin-top: 0.3rem;
	height:1.44rem;
	background:white;
	line-height: 1.44rem;
	border-bottom: 1px solid #eee;
     color: #999;
}
.cate_da ul.u1 li{
	width:24%;
	font-size:13px;
	border-right:1px solid #eee;
	 
}

.cate_da{
	height:100%;
	overflow: hidden;
}
.cate_da ul.u1 li:nth-child(4){
	border:none;
}
.cate_da .cate_shangyi{
	background-color: #f8f8f8;
}
.cate_da .cate_shangyi ul.u2{
	width:5.61rem;
	height:11.56rem;

}
.cate_da .cate_shangyi ul.u2 li{
	width:5rem;
	height:1.68rem;
	line-height: 1.68rem;
	font-size: 15px;
	text-align: left;
	padding-left: 0.6rem;

}

.cate_da .cate_shangyi ul.u3 li{
	 width:6.7rem;
     height:1.68rem;
     background-color:white; 
     font-size: 15px;
     line-height: 1.68rem;
     border-bottom: 1px solid #eee;
}



.cate_da .cate_boy{
	background-color: #f8f8f8;
}
.cate_da .cate_boy ul.u2{
	width:5.61rem;
	height:11.56rem;

}
.cate_da .cate_boy ul.u2 li{
	width:5rem;
	height:1.68rem;
	line-height: 1.68rem;
	font-size: 15px;
	text-align: left;
	padding-left: 0.6rem;


}

.cate_da .cate_boy ul.u3 li{
	width:6.7rem;
     height:1.68rem;
     background-color:white; 
     font-size: 15px;
     line-height: 1.68rem;
     border-bottom: 1px solid #eee;
}




.cate_da .cate_kid{
	background-color: #f8f8f8;
}
.cate_da .cate_boy ul.u2{
	width:5.61rem;
	height:11.56rem;

}
.cate_da .cate_kid ul.u2 li{
	width:5rem;
	height:1.68rem;
	line-height: 1.68rem;
	font-size: 15px;
	text-align: left;
	padding-left: 0.6rem;
	

}


.cate_da .cate_kid ul.u3 li{
	width:6.7rem;
     height:1.68rem;
     background-color:white; 
     font-size: 15px;
     line-height: 1.68rem;
     border-bottom: 1px solid #eee;
}


.cate_da .cate_lifestyle{
	background-color: #f8f8f8;
}
.cate_da .cate_lifestyle ul.u2{
	width:5.61rem;
	height:11.56rem;

}
.cate_da .cate_lifestyle ul.u2 li{
	width:5rem;
	height:1.68rem;
	line-height: 1.68rem;
	font-size: 15px;
	text-align: left;
	padding-left: 0.6rem;


}

.cate_da .cate_lifestyle ul.u3 li{
	width:6.7rem;
     height:1.68rem;
     background-color:white; 
     font-size: 15px;
     line-height: 1.68rem;
     border-bottom: 1px solid #eee;
}

</style>