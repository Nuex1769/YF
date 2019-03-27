<template>
	<div class="discoverMusic" v-show="discoverShow">
		<div class="redBackground"></div>
			<div class="headerBar">
				<div class="tabbarBtn colorBtn">
					<router-link to="">推荐</router-link>
				</div>
				<div class="tabbarBtn">
					<router-link to="">朋友</router-link>
				</div>
				<div class="tabbarBtn">
					<router-link to="">电台</router-link>
				</div>
			</div>
		<div class="module">
			<MusicModule></MusicModule>
		</div>
	</div>
</template>
<script>
import MusicModule from '../components/MusicModule'
import {mapState} from 'vuex'
export default{
	name:'DiscoverMusic',
	computed: mapState(['discoverShow']),
	conputed:{
		
	},
	components:{
		MusicModule
	}

}
	
</script>
<style lang="scss" scoped>
.discoverMusic{
	position:relative;
	top:55px;
	.redBackground{
		position:absolute;
		top:38px;
		width:100%;
		height:90px;
		background-color:#D43C33;
		z-index:-1;

	}
	.headerBar{
		position:fixed;
		display:flex;
		width: 100%;
		height:38px;
		text-align: center;
		background-color: #D43C33;
	.tabbarBtn{
		flex:1;
		line-height: 38px;
		font-weight: 0;
		font-size:14px;
		color:#fff;

	}
	.colorBtn{
		font-weight: 700;
		font-size: 15px;
	}
}
	.tabbarBtn a{
		color:#fff;
	}
	.colorBtn a{
		color:#fff;
		border-bottom: 2px solid #fff; 
	}
	.module{
		position:relative;
		top:38px;
	}
}
</style>