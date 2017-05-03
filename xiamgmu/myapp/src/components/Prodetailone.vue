<template>
	<div id="prodone">
		<h1>猜你喜欢</h1>
		<ul>
		<li v-for="product in hotProducts">
			<a :href="'#product/'+product.marketid" tag="li">
			<div><img :src="product.imgsrc"></div>
			<div><p>{{product.description}}</p></div>
			<span >{{product.price}}</span>
	</a>
		</li>
	
			
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		props:['hotProducts']
	}
</script>

<style scoped>
	#prodone h1{
		width: 100%;
		height: 1.24rem;
		background: white;
		text-align: center;
		line-height: 1.24rem;
		color: #dadada;
		font-size: 1rem;
	}
	#prodone li{
		width: 50%;
		float: left;
		height: 9.4rem;
	}
	#prodone img{
		margin: 0 auto;
		height: 7rem;
	}

</style>