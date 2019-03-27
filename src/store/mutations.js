const mutations = {
	getSongList(state,item){							//推荐歌单
		state.songList = item
	},
	getBanner(state,item){								//banner
		state.bannerList = item
	},
	getsong(state,item){
		state.song = item
	},
	getuser(state,item){
		state.user = item
	},
	getuserImg(state,item){
		state.userImg = item
	},
	getsongUrl(state,item){
		state.playOrder = state.playSongList.length-1
		state.songUrl = state.playSongList[state.playOrder].url
		state.songId = state.playSongList[state.playOrder].sid
		state.recordImg = state.playSongList[state.playOrder].pic
		state.songImg = state.playSongList[state.playOrder].pic
		state.songTitle = state.playSongList[state.playOrder].title
		state.songSinger = state.playSongList[state.playOrder].name
	},
	getplayOrder(state,item){
		state.playOrder = item
		state.songUrl = state.playSongList[state.playOrder].url
		state.songId = state.playSongList[state.playOrder].sid
		state.recordImg = state.playSongList[state.playOrder].pic
		state.songImg = state.playSongList[state.playOrder].pic
		state.songTitle = state.playSongList[state.playOrder].title
		state.songSinger = state.playSongList[state.playOrder].name
	},
	getAddOrder(state){
		if(state.playOrder < state.playSongList.length-1){
			state.playOrder++
			state.songUrl = state.playSongList[state.playOrder].url
			state.songId = state.playSongList[state.playOrder].sid
			state.recordImg = state.playSongList[state.playOrder].pic
			state.songImg = state.playSongList[state.playOrder].pic
			state.songTitle = state.playSongList[state.playOrder].title
			state.songSinger = state.playSongList[state.playOrder].name
		}
	},
	getDecOrder(state){
		if(state.playOrder > 0){
			state.playOrder--
			state.songUrl = state.playSongList[state.playOrder].url
			state.songId = state.playSongList[state.playOrder].sid
			state.recordImg = state.playSongList[state.playOrder].pic
			state.songImg = state.playSongList[state.playOrder].pic
			state.songTitle = state.playSongList[state.playOrder].title
			state.songSinger = state.playSongList[state.playOrder].name
		}
	},
	getplaySong(state,item){
		state.playSongList.push(item)

	},
	delplaySong(state,i){
		state.playSongList.splice(i,1)
		state.playOrder = state.playSongList.length-1
		if(state.playSongList.length === 0){	
			state.songUrl = ""
			state.songId = ""
			state.recordImg = "http://p1.music.126.net/pmHS4fcQtcNEGewNb5HRhg==/2002210674180202.jpg"
			state.songImg = "http://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg"
			state.songTitle = "听一首歌吧~"
			state.songSinger = "横滑可以切歌哦"
		}
	},
	hotSearch(state,item){
		state.HotSearch = item
	},
	searchSugs(state,item){
		if(item === ""){
			state.searchSug = ""
		}else{
			state.searchSug = item
		}
	},
	delsearchSug(state){
		state.searchSug = ""
	},
	getsongTitle(state,item){
		state.songTitle = item
	},
	getsongSinger(state,item){
		state.songSinger = item
	},
	getsongImg(state,item){
		state.songImg = item
	},
	getrecordImg(state,item){
		state.recordImg = item
	},
	getsongListDetails(state,item){
		state.songListDetails = item
	},
	playIcon(state){									//改变播放按钮
		state.playerPlayIcon = "pause_circle_outlinee"
	},
	playPauseIcon(state){
		state.playerPlayIcon = "play_circle_outline"
	},
	initialPaused(state,item){							//
		state.palyPauseStatus = item
	},
	playerLittle(state,item){
		state.littleShow = item
	},
	getplayerPaused(state,item){
		state.playerpaused = item
	},
	getAudioHide(state){
		state.audioShow = false
	},
	showAudio(state){
		state.audioShow = true
	},
	showLrc(state){
		state.lrcShow = false
	},
	hideLrc(state){
		state.lrcShow = true
	},
	openShow(state){
		state.open = true
		state.docked = true
	},
	openHide(state){
		state.open = false
		state.docked = false
	},
	getSongTime(state,item){
		state.songTime = item
	},
	getRankings(state,item){
		state.allRankingList = item
	},
	getsoaring(state,item){
		state.soaringList = item
	},
	getnewSong(state,item){
		state.newSongList = item
	},
	grthotSong(state,item){
		state.hotSongList = item
	},
	getoriginal(state,item){
		state.originalList = item
	},
	getHiphop(state,item){
		state.HiphopList = item
	},
	showPlaylist(state){
		state.playlistShow = true
	},
	hidePlaylist(state){
		state.playlistShow = false
	},
	getduration(state,item){
		state.duration = item
	},
	searchVals(state,item){
		state.searchVal = item
	},
	SearchResults(state,item){
		state.searchResult = item
	}
}
export default mutations