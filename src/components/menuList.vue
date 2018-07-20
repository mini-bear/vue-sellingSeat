<template>
	<div>
		<transition name="fade">
			<div class="mask" @click.self="show()" v-show="showList"></div>
		</transition>
		<transition name="slide-fade">
			<div class="menuList" v-show="showList">
				<ul @click="show()">
					<router-link :to="data.router" tag="li" v-for="data in list" :key="data.name">
						{{data.name}}
						<span class="r">></span>
					</router-link>
				</ul>
			</div>
		</transition>
	</div>
</template>


<script type="text/javascript">

	export default{

		data(){

			return {
				list:[
					{
						name:"首页",
						router:"/home"
					},{
						name:"影片",
						router:"/film"
					},{
						name:"影院",
						router:"/cinema"
					},{
						name:"我的",
						router:"/mine"
					},{
						name:"卖座卡",
						router:"/card"
					}
				],	
			}
		},

		props:["showList","value"],
		methods:{

			show(){
				this.$emit("input",false)
				// console.log(this.value);
			}

		}		
	}	
</script>

<style type="text/css" scoped>

	.menuList{

		position: fixed;
/*		top: 50px;*/
		left: 0px;
		background: #282828;
		height: 100%;
		width: 65%;
		border-top: 1px solid #222;
		box-shadow: 0 1px 1px #363636 inset;
		z-index: 999;
	
	}
	.menuList li{
		height: 50px;
		line-height: 50px;
		padding-left: 16px;
		padding-right: 16px;
		font-size: 14px;
		border-bottom: 1px dotted #333;
		cursor: pointer;
	}
	.menuList li a{
		color: #9a9a9a;
	}
	.menuList li span{
		font-weight: bold;
		color: #666;
	}
	.fade-enter-active {
	  transition: all .4s ease;
	}
	.fade-leave-active {
	  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.fade-enter, .fade-leave-to
	/* .slide-fade-leave-active for below version 2.1.8 */ {
	/*  transform: translateX(-100%);*/
	  opacity: 0;
	}

	.slide-fade-enter-active {
	  transition: all .5s ease;
	}
	.slide-fade-leave-active {
	  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active for below version 2.1.8 */ {
	  transform: translateX(-100px);
	  opacity: 0;
	}
	
	.mask{
		position:fixed;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
		top: 50px;
		left: 0px;
	}
</style>