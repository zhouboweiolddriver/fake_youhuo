<template>
<div id="myawesomelider">
	<swiper :options="swiperOption">
        <swiper-slide><div>
      <img :src="$store.state.slideritems[1].imgsrc">
      </div></swiper-slide>
        <swiper-slide><div>
      <img :src="$store.state.slideritems[1].imgsrc">
      </div></swiper-slide>
        <swiper-slide><div>
      <img :src="$store.state.slideritems[2].imgsrc">
      </div></swiper-slide>
        <swiper-slide><div>
      <img :src="$store.state.slideritems[2].imgsrc">
      </div></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</div>
  
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true
        }
      }
    }
  }
</script>

<style scoped>
	#myawesomelider{
    z-index: 3;
   height: 6.05rem;
   overflow: hidden;
   display: block;
  }
  #myawesomelider img{
    width: 100%;
    height: 6.05rem;
  }
</style>
