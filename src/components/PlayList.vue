<template>
	<div class="playlist" v-show="playlistShow">
		<div class="bgShow" @click="hidePlaylist"></div>
		<div class="main">
		<div class="topBtn">
			<div class="leftBtn">
				<mu-icon value="repeat" class="lefticon" color="#000"></mu-icon>
				列表循环({{playSongList.length}})
			</div>
			<div class="rightBtns">
				<div class="pattern">
					<mu-icon value="library_add" color="#000"></mu-icon>
					收藏全部
				</div>
				<div class="dle">
					<mu-icon value="delete_outline" color="#000"></mu-icon>
				</div>
			</div>
		</div>
		<div class="bottomList">
			<div class="songList" v-for="(s,i) in playSongList" :key="i" @click="Order({s,i})">
				<mu-icon value="volume_up" size="20" color="red" class="volume" v-show="playOrder === i"></mu-icon>
				<div class="song" :class="{SColor:playOrder === i}">
					{{s.title}}-{{s.name}}
					</div>
					<div class="x">
						<mu-icon value="close" size="20" color="#ccc" @click="delListSong(i)"></mu-icon>
					</div>
			</div>
		</div>
	</div>
	</div>
</template>
<script>
	import {mapState,mapActions,mapMutations} from 'vuex'
	export default{
		name:'PlayList',
		data(){
			return{
				
			}
		},
		computed:{
			...mapState(['playlistShow','playSongList','playOrder'])
		},
		methods:{
			...mapActions(['getdelplaySong','getorder','getSongId']),
			...mapMutations(['hidePlaylist','playIcon']),
			Order(item){
				this.getorder(item.i)
				this.getSongId(item.s)
			},
			delListSong(i){
				this.getdelplaySong()
				this.playIcon()
			}
		}
	}
</script>
<style lang="scss" scoped>
	.playlist{
		position:fixed;
		bottom:0;
		left:0;
		width:100%;
		height:100%;
		z-index:999;
		.bgShow{
			position:absolute;
			top:0;
			left:0;
			width:100%;
			height:100%;
			background-color:rgba(7,17,27,0.5);
		}
		.main{
			position:absolute;
			bottom:0;
			left:0;
			border-radius:10px 10px 0 0;
			width:100%;
			height:50%;
			background-color:#fff;

		.topBtn{
			display:flex;
			height:38px;
			border-bottom:1px solid #ccc;
			.leftBtn{
				flex:1;
				display:inline-block;
				.lefticon{
					position:relative;
					top:8px;
					left:5px;
					vertical-align: center;
				}
			}
			.rightBtns{
				position:relative;
				flex:1;
				display:flex;
				text-align:right;
				display:inline-block;
				.dle{
					position:absolute;
					top:8px;
					right:10px;
					width:24px;
					height:24px;
					display:inline-block;
				}
				.pattern{
					text-align:right;
					line-height:38px;
					margin-right:45px;
					i{
						position:absolute;
						top:8px;
						left:60px;
					}
				}
			}
		}
	}
		.songList{
			margin:10px 10px 10px 10px;
			display:flex;
			border-bottom:1px solid #ccc;
			.song{
				flex:1;
				display:inline-block;
			}
			.volume{
				margin-right:10px;
			}
			.SColor{
				color:red;
			}
			.x{
				flex:0 0 40px;
				display:inline-block;

			}
		}
	}
</style>