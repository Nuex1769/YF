<template>
	<div class="rankingList">
		<div class="header">
			<mu-button icon slot="left" @click="$router.back(-1)">
	   			<mu-icon value="arrow_back" color="#fff"></mu-icon>
	  		</mu-button>
	  		<h3>排行榜</h3>
		</div>
		<div class="main">
			<h3>官方榜</h3>
			<Rankings />
		</div>
	</div>
</template>
<script>
	import Rankings from '../../components/Rankings'
	export default{
		name:"RankingList",
		components:{
			Rankings
		}
	}
</script>
<style lang="scss" scoped>
	.header{
		width:100%;
		height:48px;
		background-color:#443324;
		h3{
			position:relative;
			top:-5px;
			display:inline-block;
			color:#fff;

		}
	}
	.main{
		margin-top:10px;
		h3{
			margin-left:10px;
			margin-bottom:10px;
		}
	}
	
</style>