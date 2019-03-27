<template>
	<div class="MusicPlayer">
		<div class="bg" :style="{backgroundImage:'url('+ recordImg + ')'}"></div>
		<div class="playerHeader">
			<div class="playerLeft">
				<mu-button icon slot="left" @click="actionBack">
	   			 <mu-icon value="arrow_back" color="#fff"></mu-icon>
	  			</mu-button>
	  			<div class="playerTitle">
	  				<h3>{{songTitle}}</h3>
	  				<span>{{songSinger}}</span>
	  			</div>
			</div>
			<div class="playerRight">
				<div class="singer" v-show="userImg">
					<img :src="userImg">
					<span>关注</span>
				</div>
				<mu-button icon slot="right">
	   			 <mu-icon value="share" color="#fff"></mu-icon>
	  			</mu-button>
			</div>
		</div>
		<div class="playerMiddle">
			<div class="playerShow" v-show="lrcShow" @click="ShowLrc">
				<div class="playerCover">
					<img class="needle" :src="logo1">
					<img class="recordImg" :src="recordImg">
					<img class="record" :src="logo2">
				</div>
				<div class="playerBtnList">
						<div class="btn">
							<mu-icon value="favorite_border" color="#fff"></mu-icon>
						</div>
						<div class="btn">
							<mu-icon value="get_app" color="#fff"></mu-icon>
						</div>
						<div class="btn">
							<mu-icon value="headset" color="#fff"></mu-icon>
						</div>
						<div class="btn">
							<mu-icon value="chat" color="#fff"></mu-icon><!-- check_box -->
						</div>
						<div class="btn">
							<mu-icon value="more_vert" color="#fff"></mu-icon><!-- check_box -->
						</div>
				</div>
			</div>
			<div v-show="!lrcShow">
				<div class="lyric" @click="getHideLrc" ref="lrcHeight">
					<div class="lyricTop" ref="lrcs" 
					:style="{transform: 'translateY(' + top + 'px)'}"
					>
						<div v-for="(singer,index) in singerArr" :key="index" :class="index == indexline?'colorur':'lrc'">
							{{singer.c}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="playerBottom">
			<div class="linear">
				 <mu-flex class="demo-linear-progress">
				 	<span class="time">{{getPlanTime}}</span>
				   <mu-slider class="demo-slider" :value="linear" color="red"></mu-slider>
				   <span class="time">{{durations}}</span>
				 </mu-flex>
			</div>
			<div class="playerBtn">
				<div class="btn">
						<mu-icon value="repeat" color="#fff"></mu-icon>
					</div>
					<div class="btn">
						<mu-icon value="skip_previous" color="#fff" @click="getDecOrder"></mu-icon>
					</div>
					<div class="btn">
						<mu-icon class="play" @click="play" :value="playerPlayIcon" size="50" color="#fff"></mu-icon>
					</div>
					<div class="btn">
						<mu-icon value="skip_next" color="#fff" @click="getAddOrder"></mu-icon><!-- check_box -->
					</div>
					<div class="btn">
						<mu-icon value="format_indent_increase" color="#fff" @click="showPlaylist"></mu-icon><!-- check_box -->
					</div>
			</div>
			
		</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	import {mapActions,mapMutations,mapState} from 'vuex'
	export default{
		name:'MusicPlayer',
		data(){
			return{
				top:0,
				linear: 0,
				logo1: require('@/../src/components/img/needle.png'),
				logo2: require('@/../src/components/img/record.png'),
				// volume_up 音量  repeat 循环  repeat_one 单曲循环  replay刷新 volume_off 静音
				indexline:0
			}
		},
		created(){
			 this.$nextTick(() => { // 数据更新完毕后,组件重新渲染完毕
                    this.initScroll()
              })
		},
		computed:{
			...mapState(['littleShow','recordImg','songTitle','songSinger','user','userImg','lrcShow','lrc','singerArr','playerpaused','playerPlayIcon','songTime','duration']),
			getplayerpaused(){
				return this.songTime
			},
			durations(){
				let min =  Math.floor(this.duration / 60)+""
				let s =  Math.floor(this.duration % 60)+""
				if(min.length === 1){
					min = "0" + min
				}
				if(s.length === 1){
					s = "0" + s
				}
				let time = min + ":" + s
				return time
			},
			getPlanTime(){
				let min = Math.floor(this.songTime / 60)+""
				let s =  Math.floor(this.songTime % 60)+""
				if(min.length === 1){
					min = "0" + min
				}
				if(s.length === 1){
					s = "0" + s
				}
				let time = min + ":" + s
				return time
			},
		},
		watch:{
				getplayerpaused(val){
					if(this.lrcShow == false){
					let value = val.toFixed(3)
					let time = Number(value)
					if(this.singerArr.length != 0){
						for(let i = 0;i < this.singerArr.length-1;i++){
							let timer = Number(this.singerArr[i].t)
							let timer1 =  Number(this.singerArr[i+1].t)
								// console.log(timer)
								if(timer - time <0.5){
									this.indexline=i
									let y = this.$refs.lrcs.children
									for(let j = 0;j < y.length;j++){
										if(y[j].className == "colorur"){
											this.top = this.top - 42
										}
										
									}
									
								}
								// if(this.indexline >= 8){
								// 	this.top = this.top+32
								// 	console.log(this.top)
								// }
								
							}
						}
					}
					if(this.duration){
						let plan = (this.songTime / this.duration) * 100
						plan = Number(plan.toFixed(3))
						this.linear = plan
					}
				}
			},
		methods:{
			...mapActions(['getShowLrc','getHideLrc','getlrc','getShowAudio']),
			...mapMutations(['showPlaylist','getAddOrder','getDecOrder']),
			actionBack(){
				this.$router.back(-1),
				this.getShowAudio()
			},
			play(){
				this.$emit("getAudioState")
			},
			ShowLrc(){
				this.getShowLrc()
			},
			initScroll(){
				// 避免内存泄露
                if (!this.menuScroll) {
                    // 保证他是个单例
                    
                    this.menuScroll = new BScroll(this.$refs.lrcHeight, {
                        click: true, // 允许点击
                        scrollY: true,
                    })
                } else {
                    this.menuScroll.refresh() // 重新计算高度
                }
			}
			
		},
	}
</script>
<style lang="scss" scoped>
.MusicPlayer{
	width:100%;
	height:100%;
	display:flex;
	flex-flow: column;
	overflow:hidden;
	.bg{
		position:absolute;
		width:100%;
		height:100%;
		background-repeat:no-repeat; 
		background-size:200% 100%;
		background-position:center;
		filter: blur(15px);
		z-index:-1;
	}
	.playerHeader{
		flex:0 0 56px;
		display:flex;
		width:100%;
		height:56px;
		border-bottom:1px solid #ccc;
		background:rgba(7,17,27,0.3);
		color:#fff;
		.playerLeft{
			flex:1;
			.mu-button{
				top:-5px;
			}
			.playerTitle{
				margin:10px;
				display:inline-block;
				h3{
					max-width:180px;
					height:24px;
					overflow:hidden;
			  		text-overflow:ellipsis;
			  		white-space: nowrap;
				}
				span{
					font-size:12px;
					color:#DFE0E1;
					vertical-align: top;
					max-width:180px;
					height:16px;
					overflow:hidden;
		  			text-overflow:ellipsis;
		  			white-space: nowrap;
				}
			}
		}
		.playerRight{
			position:relative;
			flex:0 0 120px;
			.singer{
				position:relative;
				display:inline-block;
				margin-right:15px;
				padding:0 10px;
				img{
					width:30px;
					height:30px;
					border-radius:50%;					
					margin-top:15px;
			}
				span{
					position:absolute;
					top:20px;
					right:-26px;
					width:40px;
					text-align:center;
					height:18px;
					font-size:12px;
					border-radius:10px;
					background:rgba(7,17,27,0.3);
					
			}
		}
			.mu-button{
				left:10px;
				top:-5px;
			}
		}
	}
	.playerMiddle{
		position:relative;
		flex:1;
		width:100%;
		background:rgba(7,17,27,0.3);
		.playerShow{
			position:relative;
			width:100%;
			height:100%;
		}
		.lyric{
			position:absolute;
			width:100%;
			height:100%;
			text-align:center;
			padding:10px 20px;
			word-wrap:break-word ;
			overflow:hidden;
			.lyricTop{
				position:relative;
				// overflow:auto;
				// transform:translateY(240px);
			.lrc{
				font-size:14px;
				margin:10px 0;
				color:#000;
			}
			.colorur{
				font-size:15px;
				color:red;
			}
		}
		}
		.playerCover{
			position:relative;
			width:100%;
			height:100%;
			overflow:hidden;
			.needle{
				position:absolute;
				top:-7%;
				left:30%;
				width:50%;
				z-index:1;
			}
			.recordImg{
				position:absolute;
				top:27.5%;
				left:25.5%;
				width:50%;
				border-radius:50%;
				overflow:hidden;

			}
			.record{
				position:absolute;
				top:-5%;
				left:10%;
				width:80%;
				overflow:hidden;
			}
		}
		.playerBtnList{
			position:absolute;
			bottom:0;
			display:flex;
			width:100%;
			padding:0 20px;
			.btn{
				flex:1;
				text-align:center;
			}
		}
	}
	.playerBottom{
		flex:0 0 84px;
		position:relative;
		background:rgba(7,17,27,0.3);
		width:100%;
		.linear{
		position:relative;
		top:20px;
			.time{
				padding:0 10px;
			}
		}
		.playerBtn{
			width:100%;
			display:flex;
			line-height:84px;
			.btn{
				flex:1;
				text-align:center;
				position:relative;
			}
			.play{
				position:absolute;
				top:12px;
				left:14px;
			}
			
		}
	}
}
</style>