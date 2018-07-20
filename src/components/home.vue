<template>
	<div class="homeBox h">
		<swiper :key="bannerList.length">
			<div class="swiper-slide" v-for="data in bannerList">
				<img :src="data.imageUrl" class="banner">
			</div>
		</swiper>
		<ul>
			
		</ul>	
	</div>
</template>


<script type="text/javascript">
	
	import swiper from './swiper';
	import axios from 'axios';
	import {mapState} from 'vuex';

	export default{

		data(){

			return{


			}

		},
		components:{

			swiper
		},
		mounted(){

			// axios.get('/v4/api/billboard/home?__t=1530428155496').then(res=>{
			// 	// console.log(res.data.data.billboards);
			// 	this.list = res.data.data.billboards;
			// 	// console.log(this.list[0].imageUrl);
			// })
			//改为状态管理
			if (this.bannerList.length == 0 ) {

				this.$store.dispatch("getBannerList");
			}else{

			}


			// setTimeout(()=>{
			// 	this.list=["Slide1","Slide2","Slide3"];
			// },2000)
		},
		computed:{

			...mapState(["bannerList"])

		}


	}	

</script>

<style type="text/css" scoped>
	
	.homeBox{

		
		position: relative;
		z-index:-1; 

	}
	.banner{

		width: 100%;
		height: 100%;
	

	}
		

</style>