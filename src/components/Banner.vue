<template>
	<div class="banner">
		<!-- <transtion name="bannerShow"> -->
			<div class="list" v-for="(b,i) in bannerList" :key="i" v-show="time === i">
				<img :src="b.imageUrl">
			</div>
		<!-- </transtion> -->
	</div>
</template>
<script>
	import {mapActions,mapState} from 'vuex'
	import Carousel from 'vue-m-carousel'
	import Swiper from 'swiper';
	export default{
		name:'Banner',
		data(){
			return{
				time:0,
			}
			
		},
		 created(){
		  	this.pushBannerData()
		  	this.getTime()
		  },
		  computed:{
			...mapState(['bannerList']),
			forBannerList(){
				let banner = this.bannerList
				return banner
			},
		},
		methods:{
			...mapActions(['pushBannerData']),
			getTime(){
			setInterval(() => {
				if(this.time >= this.bannerList.length - 1){
					this.time = 0
				}else{
					this.time ++
				}
			},1500)
				
			}
		},
		components:{
			Carousel
		}
	}
</script>
<style lang="scss" scoped>
	.banner{
		position: relative;
		width: 100%;
		height:120px !important;
		background-color: #ccc;
		border-radius: 5px;
		overflow: hidden;
		z-index:-1 !important;
		.list{
			position:absolute;
			top:0;
			left:0;
			width:100%;
			height:120px;
			img{
				width:100%;
				height:120px;
			}
		}
		
	}
	/*.swiper-pagination{
		position: absolute;
		bottom: 10px;
		border-radius: 50%;
		width:15px;
		height:15px;
		background-color:red;
		z-index:100;
	}*/
</style>
