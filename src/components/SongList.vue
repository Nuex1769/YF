<template>
	<div class="songList">
		<div class="headerColor">
			<div class="headerBtn">
			<mu-appbar style="width: 100%;" color="#443324" z-depth="0">
	  			<mu-button icon slot="left" @click="$router.back(-1)">
	   			 <mu-icon value="arrow_back" color="#fff"></mu-icon>
	  			</mu-button>
		  		<div class="songlist-title">
		  			<h4>歌单</h4>
		  			<p>编辑推荐:一周新歌推荐来啦~</p>
		  		</div>
	  			<mu-button flat slot="right">
	  				 <mu-icon value="search" color="#fff" size="30"></mu-icon>
	  			</mu-button>
	  			<mu-button flat slot="right">
	  				 <mu-icon value="more_vert" color="#fff" size="30"></mu-icon>
	  			</mu-button>
			</mu-appbar>
		</div>
			<div class="main">
				<div class="main-top" v-if="user && user.profile">
					<div class="main-top-img">
						<img :src="songListDetails.coverImgUrl">
					</div>
					<div class="main-top-title">
						<h3>{{songListDetails.name}}</h3>
						<span>
							<img class="userImg" :src="user.profile.avatarUrl">
							<span class="userName">{{user.profile.nickname}}></span>
						</span>
					</div>
				</div>
				<div class="main-bottom">
					<div class="btn">
						<mu-icon value="chat" color="#fff"></mu-icon>
						<span class="des">1111</span>
					</div>
					<div class="btn">
						<mu-icon value="share" color="#fff"></mu-icon>
						<span class="des">1111</span>

					</div>
					<div class="btn">
						<mu-icon value="get_app" color="#fff"></mu-icon>
						<span class="des">下载</span>

					</div>
					<div class="btn">
						<mu-icon value="playlist_add_check" color="#fff"></mu-icon><!-- check_box -->
						<span class="des">多选</span>

					</div>
				</div>
			</div>
		</div>
		<div class="list">
				<div class="playbtn">
					<span class="playbtn-left" v-if="songlength">
						<mu-icon value="play_circle_outline" color="#333"></mu-icon>
						播放全部({{songlength.length}}首)
					</span>
					<span class="collectSongBtn">+收藏(9999)</span>
				</div>
				<div class="songDetails" v-for="(s,index) in songlength" :key="index" @click="playerMusic(s)">
					<i class="index">{{index+1}}</i>
					<div class="songLeft">
						<h4>{{s.name}}</h4>
						<span class="songAuthor">{{s.ar[0].name}}-{{s.al.name}}</span>
					</div>
					<div class="songRight">
						<mu-icon value="play_circle_outline" color="#999"></mu-icon>
						<mu-icon value="more_vert" color="#999"></mu-icon>
					</div>
				</div>
		</div>
	</div>
</template>
<script>
	import {mapState,mapActions,mapMutations} from 'vuex'
	export default{
		name:'SongList',
		data(){
			return {
				currentTimes:""
			}
		},
		computed:{
			...mapState(['songListDetails','user','song','playerpaused','playSongList']),
			songlength(){
				return this.song.tracks
			},
			getplayerpaused(){
				return this.playerpaused
			}
		},
		methods:{
			...mapActions(['getSongId','ifPlayerPlay','playerPause','getAudioItem']),
			...mapMutations(['playIcon','showAudio']),
			playerMusic(s){
				this.getSongId(s)
				this.playIcon()	
				this.showAudio()
				// if(timer>=60){
				// 	let min =  Math.floor(timer/60);
				// 	let s = timer%60;
				// 	console.log(min+":"+s.toFixed(3))
				// }
				this.$emit("get-audio-time")
				console.log(this.playSongList)
				
			}
		}
	}
	
</script>
<style lang="scss" scoped>
/*eslint-disable*/
	.songList{
		position: relative;
		width: 100%;
		background:#fff;
		color:#fff;
		.headerColor{
			background-color:#443324;
			padding-bottom:10px;
			.headerBtn{
				position:fixed;
				padding-right:10px;
				background-color:#443324;
				z-index:10;
			}
		}
		.mu-appbar-title{
			height:46px;
		}
		.songlist-title{ 
			h4{
				display:block;
				width: 100%;
				line-height:22px;
				font-size: 16px;
			}
		 	p{
				width: 100%;
				color:#999;
				font-size:12px;
				display:block;
				line-height:12px;
			}
		
		}
		.main-bottom{
			margin-top:20px;
			display:flex;
			.btn{
				flex:1;
				text-align:center;
				line-height:12px;
				.des{
					display:block;
					color:#999;
					font-size:12px;
				}
			}
		}
		.main{
			position:relative;
			top:56px;
			padding:10px 10px 66px 10px;
			.main-top{
				display:flex;
				}
				.main-top-img{
					flex:0 0 100px;
					width:100px;
					height:110px;
					border-radius:5px;
					overflow:hidden;
					margin-left:10px;
					img{
						width:100%;
						height:100%;
					}
				}
				.main-top-title{
					flex:1;
					margin-left:20px;
					margin-top:10px;
					h3{
						margin-bottom:10px;
					}
					img.userImg{
						display:inline-block;
						width:30px;
						height:30px;
						border-radius:50%;
						overflow:hidden;
						margin-top:-3px;
					}
					.userName{
						margin-left:10px;
						vertical-align: top;
						color:#999;
					}
				}

		}
		.list{
			position:relative;
			top:-10px;
			border-radius:10px 10px 0 0;
			overflow:hidden;	
			background-color:#fff;
		}
}
	.playbtn{
		width:100%;
		height:46px;
		position:relative;
		display:inline-block;
		font-size:16px;
		background:#fff;
		border-bottom:1px solid #ccc;
		.playbtn-left{
			position:absolute;
			left:10px;
			top:10px;
			color:#333;
			i{
				vertical-align:bottom;
			}
	}
	.collectSongBtn{
		position:absolute;
		right:0;
		padding:10px;
		height:100%;
		display:inline-block;
		background-color:red;
		padding-bottom:1px;
	}
  }
  .songDetails{
  	display:flex;
  	height:50px;
  	background:#fff;
  	border-bottom:1px solid #ccc;
  	color:#333;
	.index{

		padding:10px;
		width:30px;
		text-align:center;
		line-height:26px;
	}
  	.songLeft{
  		flex:1;
  		margin-top:5px;
  		margin-left:10px;
  		flex-direction: row;
  		line-height:20px;
  		h4{
  			display:inline-block;
  			max-width:286px;
  			height:20px;
  			overflow:hidden;
  			text-overflow:ellipsis;
  			white-space: nowrap;
  		}
  		.songAuthor{
  			display:block;
  			max-width:286px;
  			height:15px;
  			line-height:15px;
  			font-size:12px;
  			color:#999;
  			overflow:hidden;
  			text-overflow:ellipsis;
  			white-space: nowrap;
  		}
  	}
  	.songRight{
  		flex:0 0 48px;
  		flex-direction: row;
  		line-height:52px;
  	}
  }
</style>