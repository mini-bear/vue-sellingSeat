<template>
	<div class="h">
		<ul class="film">
			<router-link tag="li" to="/film/nowplaying" activeClass="active" >正在热映</router-link>
			<router-link tag="li" to="/film/comingsoon" activeClass="active" >即将上映</router-link>
		</ul>
		<router-view></router-view>
	</div>

</template>


<script type="text/javascript">

</script>

<style type="text/css" scoped>
	
	.film{
		
		display: flex;
		border-bottom: 1px solid #fe6e00;
		margin-left: 15px;
		margin-right: 15px;
	}

	.film li{
		flex: 1;
		color: #6a6a6a;
		text-align: center;
		height: 45px;
		line-height: 45px;
		font-size: 16px;
	}

	.active{

		color:#fe6e00;
		border-bottom: 3px solid #fe6e00;

	}
	

</style>