<template>
	<div class="r">
		<router-link to="/city" tag="a" class="city l">
			<span class="l">大连</span>
			<i class="iconfont icon-jiantouarrow483 l"></i>
		</router-link>
		<router-link tag="a" to="/mine" class="mine l">
			<i class="iconfont icon-iconfuzhi"></i>
		</router-link>
	</div>
</template>


<script type="text/javascript">
	
	export default{


	}	

</script>

<style type="text/css" scoped>
			
	.city{
		
		color:#999;
		font-size: 14px;
		display: block;
		width: 44px;
		padding-right: 6px;
		padding-left: 6px;
		height: 50px;
		line-height: 50px;

	}

	.mine{

		color:#999;
		font-size: 14px;
		display: block;
		line-height: 50px;
		width: 48px;
		height: 50px;
		text-align: center;

	}
	
</style>