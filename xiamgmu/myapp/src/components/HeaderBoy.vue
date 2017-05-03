<template>
	<div id="header_boy">
		<span class="header_boy_one" @click="changeState"><i class="iconfont">&#x3452;</i></span>
		<span class="header_boy_two">youhuo</span>
		<span class="header_boy_three"><i class="iconfont">&#xe511;</i></span>
	</div>
</template>

<script type="text/javascript">
import {mapState, mapGetters, mapActions } from 'vuex'
	export default {
		computed: {
			//映射State
            ...mapState([
            	'shownav'
            ])
		},
		 methods: {
	    ...mapActions([
	      'changeState',
	    ])
  }

	}
</script>

<style scoped>
	#header_boy{
		background: #3e3e3e;
		width: 100%;
		height: 1.92rem;
	}
	.header_boy_one{
		float: left;
		color: white;
		height: 1.92rem;
		display:inline-block;
		text-align: center;
		line-height: 1.92rem;
		margin-left: 0.5rem;
		width: 1rem;
	}
	.header_boy_two{
		float: left;
		color: white;
		height: 1.92rem;
		display:inline-block;
		text-align: center;
		line-height: 1.92rem;
		width: 8rem;
	}
	.header_boy_three{
		float: right;
		color: white;
		height: 1.92rem;
		display:inline-block;
		text-align: center;
		line-height: 1.92rem;
		width: 1rem;
	}
</style>