<template>

		<div class="swiper-container">
		    <div class="swiper-wrapper">
		    	<slot></slot>
			   <!--  <div class="swiper-slide" v-for="data in list">
			    				{{data}} -->
		    </div>
		</div>
		    <!-- 如果需要分页器 -->
		    <!-- <div class="swiper-pagination"></div> -->
		    
		    <!-- 如果需要导航按钮 -->
		    <!-- <div class="swiper-button-prev"></div> -->
		    <!-- <div class="swiper-button-next"></div> -->
		    
		    <!-- 如果需要滚动条 -->
		    <!-- <div class="swiper-scrollbar"></div> -->
		</div>

</template>


<script type="text/javascript">
	

	export default{

		mounted(){

			var mySwiper = new Swiper ('.swiper-container', {

			    loop: true,
			    autoplay: 3000,
			    speed: 1000,

			  })        

		},

	}	

</script>

<style type="text/css" scoped>
	
		.swiper-container{
		    height: 100%;
		    width: 100%;
		}
	
</style>