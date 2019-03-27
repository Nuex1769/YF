<template>
	<div class="result">
		<div class="barList">
			<div class="list">
				<span>综合</span>
			</div>
			<div class="list">
				<span class="elect">单曲</span>
			</div>
			<div class="list">
				<span>视频</span>
			</div>
			<div class="list">
				<span>歌手</span>
			</div>
			<div class="list">
				<span>专辑</span>
			</div>
		</div>
		<div class="songList" ref="roll">
			<div class="roll">
			<div class="playbtn">
				<div class="leftBtn">
					<mu-icon value="play_circle_outline" color="#000"></mu-icon>
					播放全部
				</div>
				<div class="rightBtn">
					<mu-icon value="playlist_add_check" color="#333"></mu-icon>
					多选
				</div>
			</div>
			<div class="song" v-for="(song,index) in searchResult.songs" :key="index" @click="playerMusic(song)">
				<div class="songTitle">
					<h4>{{song.name}}</h4>
					<span class="songAuthor">{{song.artists[0].name}}-{{song.album.name}}</span>
				</div>
				<div class="songRight">
					<mu-icon value="play_circle_outline" color="#999"></mu-icon>
					<mu-icon value="more_vert" color="#999"></mu-icon>
				</div>
			</div>
		  </div>
		</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	import {mapState,mapActions,mapMutations} from 'vuex'
	export default{
		name:'SearchResult',
		computed:{
			...mapState(['searchResult'])
		},
		created(){
			 this.$nextTick(() => { // 数据更新完毕后,组件重新渲染完毕
                        this.initScroll()
              })
		},
		methods:{
			...mapActions(['getSearchSongId']),
			...mapMutations(['playIcon','getNullUserImg','showAudio']),
			playerMusic(s){
				this.getSearchSongId(s)
				this.playIcon()	
				this.getNullUserImg()
				this.showAudio()
				// if(timer>=60){
				// 	let min =  Math.floor(timer/60);
				// 	let s = timer%60;
				// 	console.log(min+":"+s.toFixed(3))
				// }
				this.$emit("get-audio-time")
			},
			initScroll(){
				// 避免内存泄露
                if (!this.menuScroll) {
                    // 保证他是个单例
                    this.menuScroll = new BScroll(this.$refs.roll, {
                        click: true // 允许点击
                    })
                } else {
                    this.menuScroll.refresh() // 重新计算高度
                }
			}
		}
	}
</script>
<style lang="scss" scoped>
	.barList{
		display:flex;
		border-bottom:1px solid #ccc;
		position:relative;
		z-index:2;
		.list{
			flex:1;
			height:48px;
			line-height:48px;
			text-align:center;
			background-color:#fff;
		}
		.elect{
			display:inline-block;
			color:red;
			font-size:15px;
			font-weight:500;
			border-bottom:2px solid red;
		}
	}
.songList{
	position:absolute;
	top:36px;
	bottom:0;
	left:0;
	width:100%;
	overflow:hidden;
	.roll{

	}
	.playbtn{
		position:relative;
		padding:10px;
		i{
			vertical-align:bottom;
		}
		.leftBtn{
			margin-top:10px;
		}
		.rightBtn{
			position:absolute;
			top:20px;
			right:10px;
		}
	}
	.song{
		padding:0 10px 0 15px;
		display:flex;
		margin-bottom:10px;
		h4{
			font-size:14px;
			color:rgb(7,17,27);
			overflow:hidden;
  			text-overflow:ellipsis;
  			white-space: nowrap;
		}
		.songAuthor{
			font-size:12px;
			color:#666;
			overflow:hidden;
  			text-overflow:ellipsis;
  			white-space: nowrap;
		}
		.songTitle{
			flex:1;
		}
		.songRight{
			flex:0 0 48px;
	  		flex-direction: row;
	  		line-height:52px;
		}
	}
}
</style>