<template>
  <div id="app">
 	<navbar></navbar>

 	<router-view></router-view>
  </div>
</template>

<script>

import navbar from "./components/navbar";
import './assets/iconfont/iconfont.css';


export default {
  
	data(){

		return{

			list:["111","222","333"]
		}
	},

	components:{

		navbar,
	}


}
</script>

<style>
/*-------样式重置-------*/
body,html{
	height:100%

}
body,h1,h2,h3,h4,h5,h6,p,ul,li,ol,dl,dt,dd,img,a,input{
	padding:0; margin:0;}

ul,ol{
	list-style:none;}	
header,footer,section,figcaption,figure,main,nav,aside,summary,details{
	display:block;}
html{
	font-size: 14px;
	color: #666666;
	}
img{
	display: block;
}
.w{
	width: 286px;
	margin: 0 auto;
}
.l{
	float: left;
}
.r{
	float: right;
}
.h{
	padding-top: 50px;
}
a{
	text-decoration: none;
}
</style>
