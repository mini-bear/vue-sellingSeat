<template>
	<div class="navbar">
		<leftSidebar></leftSidebar>
		<rightSidebar></rightSidebar>
	</div>
</template>


<script type="text/javascript">

import leftSidebar from "./leftSidebar";
import rightSidebar from "./rightSidebar";
	export default{

		components:{

			leftSidebar,
			rightSidebar
		}

	}	
</script>

<style type="text/css" scoped>
	.navbar{
		width: 100%;
		height: 50px;
		background: #282828;
		position: fixed;
	}
	.pillar{
	
		display: block;
		height: 50px;

	}

</style>