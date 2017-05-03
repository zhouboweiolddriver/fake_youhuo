<template>
		
	<!-- <ul>
      <router-link tag="li" to="/youhuo/boy" ><a>首页</a></router-link>
      <router-link tag="li" to="/youhuo/cate" ><a>分类</a></router-link>
      <router-link tag="li" to="/youhuo/shopping" ><a>逛</a></router-link>
      <router-link tag="li" to="/youhuo/cart" ><a>购物车</a></router-link>
      <router-link tag="li" to="/youhuo/my" ><a>我的</a></router-link>
    </ul> -->
    <div id="el_router">
    	<el-menu default-active="manifests" theme="dark" v-bind:router="true">
                <el-menu-item index="/youhuo/boy">首页</el-menu-item>
                <el-menu-item index="/youhuo/cate">分类</el-menu-item>
                <el-menu-item index="/youhuo/shopping">逛</el-menu-item>
                <el-menu-item index="/youhuo/cart">购物车</el-menu-item>
                <el-menu-item index="/youhuo/my">我的</el-menu-item>
        </el-menu>
    </div>
</template>

<script type="text/javascript">
	export default {
		
	}
</script>
<style scoped>
	#el_router li{
		width: 20%;
		font-size: 0.2rem;
		float: left;

	}
	#el_router{
		z-index: 999;
		position: fixed;
		bottom:0;
		width: 100%;
	}
	#myfooter{
		z-index: 999;
		width: 100%;
		height: 2rem;
	}
</style>