<template>
	<div class="box l">
		<div class="btn left" @click="show()">
			<div class="menu l"><i class="iconfont icon-ego-caidan"></i></div>
			<div class="title l">
				{{$store.state.title}}
			</div>
		</div>
		<menuList :showList="isShow" v-model="isShow"></menuList>
	</div>
</template>

<script type="text/javascript">

import menuList from "./menuList";
	
	export default{

		data(){

		return	{
			// title:"卖座电影",
			isShow:false
			}

		},

		methods:{

			show(){

				this.isShow = !this.isShow;
				// console.log(this.isShow);
			}

		},
		components:{

			menuList

		}

	}

</script>

<style type="text/css" scoped>
	
	.box{

		width: 132px;
		height: 50px;

	}


	.btn{

		width: 132px;
		height: 50px;
		cursor: pointer;
		user-select: none;
	}
	.menu{
		height: 50px;
		line-height: 50px;
		width: 47px;
		border-right: 1px solid #222;
		box-shadow:1px 0 1px #313131;
		text-align: center;
/*		font-size: 40px;*/
	}
	.menu i{
	
		font-size: 20px;

	}
	.title{
		height: 50px;
		line-height: 50px;
		width: 84px;
		color: #efefef;
		text-align: center;
		font-size: 14px;
		user-select: none;
	}

</style>