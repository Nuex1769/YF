<template>
	<div class="recommend">
		<h3>推荐歌单></h3>
		<div class="recommend-list">
			<div class="RList">
				<router-link to="/songlist">
					<img src="https://p1.music.126.net/Fs0DjAvcAAyAZa1dgXzFfQ==/109951163571833739.jpg">
					<p>每日歌曲推荐</p>
				</router-link>
			</div>
			<div class="RList" v-for="(song,index) in forSongList" :key='index' 
			@click="songListClick(song)">
				<router-link to="/songlist">
					<img :src="song.coverImgUrl">
					<p>{{song.name}}</p>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	import {mapActions,mapState} from 'vuex'
	export default{
		name:'Recommend',

		computed:{
			...mapState(['songList']),
			forSongList(){
				let song = this.songList
				return song
			},
		},
		 beforeMount(){
		  	this.pushSongListData()
		  },
		methods:{
			...mapActions(['pushSongListData','pushSong','getUser']),
			songListClick(song){
				this.pushSong(song)
				this.getUser(song)
			}
		}
	}
</script>
<style>
	.recommend{
		width: 100%;
		padding:20px 0;
	}
	.recommend-list{
		width:100%;
		display: flex;
		flex-wrap:wrap;
	}
	.RList{
		flex:1 1 32%;
		margin:15px 2px 0 2px;
		height: 150px;
		font-size: 0;

	}
	.RList a{
		color:#000;
	}
	.RList img{
		width:100%;
		height: 110px;
		border-radius: 5px;
		overflow: hidden;
	}
	.RList p{
		font-size: 10px;
		padding:0 3px; 
	}
</style>