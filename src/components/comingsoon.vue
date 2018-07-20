<template>
	<ul :key="comingsoonList.length" class="now">
		<li v-for="data in comingsoonList" :key="data.id">
			<div class="l photo">
				<img :src="data.poster.origin">
			</div>
			<div class="l rightText">
				<div class="top">
					<p class="l">{{data.name}}</p>
<!-- 					<span class="grade r">{{data.grade}}<span>></span></span> -->
				</div>
				<div class="center">
					<p>{{data.intro}}</p>
				</div>
			</div>
		</li>
	</ul>
</template>


<script type="text/javascript">

	export default{

		computed:{

			comingsoonList(){

				return this.$store.state.comingsoonList;

			}


		},

		mounted(){

			if (this.comingsoonList.length == 0) {

				this.$store.dispatch("getcomingsoonList")

			}


		}




	}



</script>

<style type="text/css" scoped>
	
	.now{

		margin-right: 15px;
		margin-left: 15px;
	}
	.now li{

		width: 290px;
		height: 85px;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	.now li .photo{

		height: 85px;

	}
	.now li .photo img{

	
		height: 100%;
	}
	.now li .rightText{
		
		padding-left: 15px;

	}
	.now li .rightText p{
		
		width: 169px;
		height: 32px;
		line-height: 32px;
		color: #000;
		font-size: 16px;


	}
	.now li .rightText .top{
		
		height: 32px;

	}
	.now li .rightText .top .grade{

		color: #fc7103;
		font-size: 16px;
		display: block;
		height: 32px;
		line-height: 32px;

	}
	.now li .rightText .top .grade span{
		
		color: #999;

	}
	.now li .rightText .center p{
		
		font-size: 12px;
		color: #8e8e8e;
		height: 24px;
		line-height: 24px;
		text-overflow: ellipsis;
		white-space: nowrap;
		
	}
</style>