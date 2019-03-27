<template>
	<div class="header">
		<mu-appbar style="width: 100%;" color="#D43C33" z-depth="0">
  			<mu-button icon slot="left" @click="DrawerShow">
   			 <mu-icon value="menu"></mu-icon>
  			</mu-button>
	  		<mu-flex class="flex-wrapper" justify-content="center">
		    	<mu-flex class="flex-demo" justify-content="center">
		    		<mu-button icon slot="left" >
			   			<mu-icon value="track_changes" size="30" color="#E57A77"></mu-icon>
			  		</mu-button>
			  		<mu-button icon slot="left">
			   			<mu-icon value="music_note" size="30" ></mu-icon>
			  		</mu-button>
			  		<mu-button icon slot="left" >
			   			<mu-icon value="people_outline" size="30" color="#E57A77"></mu-icon>
			  		</mu-button>
		    	</mu-flex>
		  	</mu-flex>
  			<mu-button flat slot="right"  @click="searchShow">
  				 <mu-icon value="search" color="#FFF" size="30"></mu-icon>
  			</mu-button>
		</mu-appbar>
	</div>
</template>
<script>
	import {mapActions} from 'vuex'
	export default {
		name:"Homepage",
		open:false,
		methods:{
			...mapActions(['DrawerShow','getHotSearch']),
			drawerTrue(){
				this.open = this.open
			},
			searchShow(){
				this.$router.push({path:'/search'})
				this.getHotSearch()
			}
		}
}
</script>
<style lang="scss" scoped>
.header{
	position:fixed;
	width:100%;
	.mu-appbar-title{
		display:flex;

	}
	.mu-ripple-wrapper{
		flex: 1;
	}
}

	
</style>