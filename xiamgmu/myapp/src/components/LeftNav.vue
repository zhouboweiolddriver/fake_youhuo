<template>
	<div id="leftnav" v-bind:class="[shownav?classA:classB]">
		<el-menu default-active="manifests" theme="dark" v-bind:router="true">
                <el-menu-item index="/youhuo/boy" class="li li1">男生<span>BOYS</span></el-menu-item>
                <el-menu-item index="/youhuo/girl" class="li li2">女生<span>GIRLS</span></el-menu-item>
                <el-menu-item index="/youhuo/kid" class="li li3">童装<span>KIDS</span></el-menu-item>
                <el-menu-item index="/youhuo/lifestyle" class="li li4">创意生活<span>LIFESTYLE</span></el-menu-item>
                <el-menu-item index="/youhuo/shopping" class="li">逛<span>TRENDFINDER</span> </el-menu-item>
        </el-menu>
	</div>
</template>

<script type="text/javascript">
import {mapState, mapActions} from 'vuex'
	export default{
		data(){
			return{
				isA:false,
				classA:'classshow',
				classB:'classhide'
			}
		},
		computed: {
			//映射State
            ...mapState([
            	'shownav'
            ])
		},
	}
</script>

<style scoped>
	#leftnav{
		z-index: 9999;
		height: 100%;
		width: 8rem;
		background: #f0f0f0;
		position: absolute;
		transition: all linear 0.3s;
		
	}
	.classhide{
		top: 0rem;
		left: -8rem;
	}
	.classshow{
		left: 0rem;
		top: 0rem;
	}
	.li{
		width:8rem;
		height:2rem;
		border-bottom: 1px solid #eee;
		background:#fff;
		font-size: 24px;
		color: black;
	}
   
  
   


	span{
		font-size: 12px;
	}

	
</style>