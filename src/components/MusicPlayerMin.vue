<template>
	<div class="MusicPlayerMin" @click="hideLittlePlayer">
		<div class="musicImg">
			<img :src="songImg">
		</div>
		<div class="musicTitle">
			<span>{{songTitle}}</span>
			<p>{{songSinger}}</p>
		</div>
		<div class="musicIcon">
	   		<mu-icon class="player" :value="playerPlayIcon" color="#333" size="25" @click="playerPlay">
	   		</mu-icon>
	   		<mu-icon value="format_indent_increase" color="#333" size="25" @click="showList">
	   		</mu-icon>
		</div>
	</div>
</template>
<script>
	import Aplayer from 'vue-aplayer'
	import {mapActions,mapState,mapMutations} from 'vuex'
	export default{
		name:'MusicPlayerMin',
		props:['audios','Times'],
		data(){
			return{
				
			}
		},
		computed:{
			...mapState(['playerPlayIcon','songTitle','songSinger','songImg','littleShow','songUrl']),
			getTimes(){
				return this.Times
			}
		},
		components:{
			'aplayer':Aplayer
		},
		methods:{
			...mapActions(['ifPlayerPlay','actionplayerHide','hideAudio','getlrc']),
			...mapMutations(['showPlaylist']),
			playerPlay(){
				this.$emit("get-audio")
				event.stopPropagation()
			},
			showList(){
				this.showPlaylist()
				event.stopPropagation()
				},
			playerHide(){
		       this.hideAudio()
				},
			hideLittlePlayer(){
				this.$router.push({path:"/musicplayer"})
	        	this.hideAudio()
	        	if(this.songUrl){
	        		this.getlrc()
	        	}
			},
	}
}
</script>
<style lang="scss" scoped>
	.MusicPlayerMin{
		position: fixed;
		display:flex;
		bottom:0;
		padding:5px;
		background-color: #fff;
		width:100%;
		height:50px;
		z-index:998;
		.musicImg{
			flex:0 0 35px;
			display:inline-block;
			img{
				width:35px;
				height:40px;
			}
		}
		.musicTitle{
			position:relative;
			flex:1;
			margin-left:10px;
			p{
				color:#999;
			}
			.aplayer{
				width:350px;
				position:absolute;
				top:-50px;
				left:-50px;
			}
		}
		.musicIcon{
			position:relative;
			flex:0 0 60px;
			line-height:50px;
			.player{
				margin-right:10px;
			}
		}
	}
</style>