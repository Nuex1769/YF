import axios from 'axios'
const actions = {
	pushSongListData({commit,state}){								//推荐歌单
		 const url = 'http://localhost:3000/related/playlist?id=1'
		       axios.get(url).then(response => {
		        let res = response.data
		        if (res.code === 200) {
		             let songlist = res.playlists  
		             commit("getSongList",songlist)  
		          }
		    })
	},		
	pushBannerData({commit,state}){									//banner
		 const url = 'http://localhost:3000/banner'
		       axios.get(url).then(response => {
		        let res = response.data
		        if (res.code === 200) {
		             let bannerList = res.banners  
		             commit("getBanner",bannerList)
		          }
		    })
	},
	pushSong({commit,state},item){									//歌单详情
		 const url = 'http://localhost:3000/playlist/detail?id='+ item.id;
		       axios.get(url).then(response => {
		        let res = response.data
		        if (res.code === 200) {
		              let song = res.playlist
		              commit("getsong",song)
		              let songListDetails = item
		              commit("getsongListDetails",songListDetails)
		          }
		    })
	},
	getUser({commit,state},song){									//歌单作者详情
		 const url = 'http://localhost:3000/user/detail?uid='+ song.creator.userId;
		  axios.get(url).then(response => {
		        let res = response.data
		        if (res.code === 200) {
		              let user = res
		              let userImg = res.profile.avatarUrl
		              commit("getuser",user)
		              commit("getuserImg",userImg)
		          }
		    })
	},
	palayerplay({commit,state}){
		commit('playIcon')
	},
	playerPause({commit,state}){
		commit('playPauseIcon')
	},
	getSongId({commit,state},s){									//点击获取的歌曲
		 const url = 'http://localhost:3000/song/url?id='+ s.id;
		  axios.get(url).then(response => {
		        let res = response.data
		        if (res.code === 200) {
		              let songUrl = res.data[0]      //歌曲链接
		              let songTitle = s.name		 //歌名
					  let songSinger = s.ar[0].name	 //歌手
					  let songImg = s.al.picUrl		 //歌曲封面
					  let recordImg = s.al.picUrl	 //播放器封面
		              let listArr = {}				
		              listArr.url = songUrl.url
		              listArr.id = state.playSongList.length + 1
		              listArr.sid = s.id
		              listArr.title = s.name
		              listArr.name = s.ar[0].name
		              listArr.pic = s.al.picUrl
		              for(let i = 0;i < state.playSongList.length;i++){
		              	 if(state.playSongList[i].name == listArr.name){
		              	 	commit("delplaySong",i)
		              		}
		              }
		              commit("getplaySong",listArr)
		              commit("getsongUrl")
		     //          commit("getsongUrl",songUrl)
		     //          commit("getsongTitle",songTitle)
					  // commit("getsongSinger",songSinger)
					  // commit("getsongImg",songImg)
					  // commit("getrecordImg",recordImg)
		          }
		    })
	},
	getSearchSongId({commit,state},s){
		 const url = 'http://localhost:3000/song/url?id='+ s.id;
		  axios.get(url).then(response => {
		        let res = response.data
		        if (res.code === 200) {
		              let songUrl = res.data[0]      			 //歌曲链接
		              let songTitle = s.name		 			 //歌名
					  let songSinger = s.artists[0].name	     //歌手
					  let songImg = s.artists[0].img1v1Url		 //歌曲封面
					  let recordImg = s.artists[0].img1v1Url     //播放器封面
		              let listArr = {}				
		              listArr.url = songUrl.url
		              listArr.id = state.playSongList.length + 1
		              listArr.sid = s.id
		              listArr.title = songTitle
		              listArr.name = songSinger
		              listArr.pic = songImg
		              for(let i = 0;i < state.playSongList.length;i++){
		              	 if(state.playSongList[i].name == listArr.name){
		              	 	commit("delplaySong",i)
		              		}
		              }
		              commit("getplaySong",listArr)
		              commit("getsongUrl")
		          }
		    })
	},
	getlrc({commit,state}){													//歌词
		 const url = 'http://localhost:3000/lyric?id='+ state.songId;
		  axios.get(url).then(response => {
		        let res = response.data
		        if (res.code === 200) {
		        	if(res.lrc != undefined){
		        		 state.lrc = res.lrc.lyric
		              let lrcs = state.lrc.split('\n');//用回车拆分成数组
		              for(let i in lrcs){
		              	lrcs[i] = lrcs[i].replace(/(^\s*)|(\s*$)/g, ""); //去除前后空格
		              	let t = lrcs[i].substring(lrcs[i].indexOf("[") + 1, lrcs[i].indexOf("]"));//取[]间的内容
		              	let s = t.split(":");//分离:前后文字
					   if(!isNaN(parseInt(s[0]))) { //是数值
				            let arr = lrcs[i].match(/\[(\d+:.+?)\]/g);//提取时间字段，可能有多个
				            let start = 0;
				            for(let k in arr){
				                start += arr[k].length; //计算歌词位置
				            }
				            if(lrcs[i].substring(start)!=""){
				            let content = lrcs[i].substring(start);//获取歌词内容
				            for (let k in arr){
				                let t = arr[k].substring(1, arr[k].length-1);//取[]间的内容
				                let s = t.split(":");//分离:前后文字
				                state.singerArr.push({//对象{t:时间,c:歌词}加入ms数组
				                    t: (parseFloat(s[0])*60+parseFloat(s[1])).toFixed(3),
				                    c: content
				                });
				            }
				        	}
		              	}
		            }
		            }
		        }
		    })
	},
	actionplayerHide({commit,state}){					//
		commit('playerHide')
	},
	actionplayerDisplay({commit,state}){				//播放器
		commit('playerDisplay')
	},
	getAudioItem({commit,state},audios){				//播放状态判断
        commit("getplayerPaused",audios)
	},
	hideAudio({commit,state}){							//
        commit('getAudioHide')
	},
	getShowAudio({commit,state}){						//
        commit('showAudio')
	},
	getlittlePlayer({commit,state},item){				//
		commit('playerLittle',item)
	},
	getShowLrc({commit,state}){							//展示歌词
		commit('showLrc')
	},
	getHideLrc({commit,state}){							//隐藏歌词
		commit('hideLrc')
	},
	DrawerShow({commit,state}){							//抽屉栏展示
		commit('openShow')
	},
	DrawerHide({commit,state}){							//抽屉栏隐藏
		commit('openHide')
	},
	getSongTimes({commit,state},item){					//当前播放时间
		commit('getSongTime',item)
	},
	getRankings({commit,state}){						//全部榜单
		const url = 'http://localhost:3000/toplist'
		const soaringUrl = 'http://localhost:3000/top/list?idx=3'
		const newSongUrl = 'http://localhost:3000/top/list?idx=0'
		const hotSongUrl = 'http://localhost:3000/top/list?idx=1'
		const originalUrl = 'http://localhost:3000/top/list?idx=2'
		const HiphopUrl = 'http://localhost:3000/top/list?idx=23'

		  axios.get(url).then(response => {				//全部榜单
		        let res = response.data
		        if (res.code === 200) {
		              let rankings = res.list
		             commit('getRankings',rankings)
		             
		          }
		    });
		  axios.get(soaringUrl).then(response => {		//飙升榜单
		        let res = response.data
		        if (res.code === 200) {
		              let soaring = res.playlist.tracks
		              commit('getsoaring',soaring)
		             
		          }
		    });
		  axios.get(newSongUrl).then(response => {		//新歌榜单
		        let res = response.data
		        if (res.code === 200) {
		              let soaring = res.playlist.tracks
		              commit('getnewSong',soaring)
		            
		          }
		    });
		  axios.get(hotSongUrl).then(response => {		//热门榜单
		        let res = response.data
		        if (res.code === 200) {
		              let soaring = res.playlist.tracks
		              commit('gethotSong',soaring)
		             
		          }
		    });
		  axios.get(originalUrl).then(response => {		//原创榜单
		        let res = response.data
		        if (res.code === 200) {
		              let soaring = res.playlist.tracks
		              commit('getoriginal',soaring)
		             
		          }
		    });
		  axios.get(HiphopUrl).then(response => {		//说唱榜单
		        let res = response.data
		        if (res.code === 200) {
		              let soaring = res.playlist.tracks
		              commit('getHiphop',soaring)
		             
		          }
		    });
		},
		getHotSearch({commit,state}){				//热搜列表
			 const url = 'http://localhost:3000/search/hot';
			  axios.get(url).then(response => {
			        let res = response.data
			        if (res.code === 200) {
			              let hotSearch = res.result
			              commit("hotSearch",hotSearch)
			          }
			    })
		},
		getSearchSug({commit,state},val){			//搜索匹配关键词
			if(val != ""){
				const url = 'http://localhost:3000/search/suggest?keywords='+ val +' &type=mobile';
				axios.get(url).then(response => {
				        let res = response.data
				        if (res.code === 200) {
				              let searchVal = res.result.allMatch
				              commit("searchSugs",searchVal)
				              commit("searchVals",val)
				          }
				    })
			}else{
				commit("searchSugs","")
			}
		},
		getSearchResult({commit,state}){
			const url = 'http://localhost:3000/search?keywords='+ state.searchVal +'&limit=10&offset=1';
			 axios.get(url).then(response => {
			        let res = response.data
			        if (res.code === 200) {
			              let Val = res.result
			              commit("SearchResults",Val)
			              console.log(Val)
			          }
			    })
		},
		getdelplaySong({commit,state},i){			//删除播放列表中的选中歌曲
			commit("delplaySong",i)
		},
		getorder({commit,state},i){					//获取播放列表当前播放的下标
			commit('getplayOrder',i)
		},
		getduration({commit,state},time){
			commit('getduration',time)
		}
}
export default actions