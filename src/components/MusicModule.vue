<template>
	<div class="MusicModule">
		<Banner></Banner>
		<div class="classifyList">
			<div class="classify">
				<mu-flex class="flex-demo" justify-content="center" >
					<span><mu-icon value="radio" color="#D43C33"></mu-icon></span>
				</mu-flex>
					私人FM
				</div>
			<div class="classify">
		    	<mu-flex class="flex-demo" justify-content="center" >
					<span><mu-icon value="event_note" color="#D43C33"></mu-icon></span>
				</mu-flex>
					每日推荐
				</div>
			<div class="classify">
				<mu-flex class="flex-demo" justify-content="center" >
					<span><mu-icon value="format_list_bulleted" color="#D43C33"></mu-icon></span>
				</mu-flex>
					歌单
				</div>
			<div class="classify" @click="getrankings">
				<mu-flex class="flex-demo" justify-content="center" >
					<span><mu-icon value="location_city" color="#D43C33"></mu-icon></span>
				</mu-flex>
					排行榜
				</div>
		</div>
		<Recommend></Recommend>
	</div>
</template>
<script>
	import Banner from '../components/Banner'
	import Recommend from '../components/Recommend'
	import {mapActions} from 'vuex'

	export default{
		name:"MusicModule",
		methods:{
			...mapActions(['getRankings']),
			getrankings(){
				this.getRankings()
				this.$router.push({path:'/rankinglist'})
			}
		},
		components:{
			Banner,
			Recommend
		}
	}
</script>
<style>
	.MusicModule{
		width: 100%;
		padding: 10px;
	}
	.classifyList{
		display: flex;
		width: 100%;
		padding: 10px 0;
		border-bottom: 1px solid rgba(7,17,27,0.1)
	}
	.classify{
		flex:1;
		height: 70px;
		text-align: center;
	}
	.classify span{
		display:block;
		width: 40px;
		height: 40px;
		border:1px solid #D43C33;
		border-radius: 50%;

	}
	.classify span i{
		line-height: 40px;
	}
</style>