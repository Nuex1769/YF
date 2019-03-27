import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)
const state = {
	open:false,
	docked:false,
	playerPlayIcon:"play_circle_outline",		//播放按钮
	playerpaused:"",							//播放状态
	duration:"00:00",							//歌曲总时长
	littleShow:"",								//小播放器
	audioShow:false,							//小播放器展示
	playlistShow:false,							//播放列表
	songList:{},								//推荐歌单
	bannerList:{},								//轮播图
	song:{},									//歌单详情
	songListDetails:{},							//歌单图
	songUserId:{},								//歌单作者id
	user:{},									//歌单作者信息
	backups:{},									//传递中介
	songUrl:"",									//歌曲url
	playSongList:[],							//播放列表歌单
	playOrder:"",								//播放顺序
	singerArr:[],								//歌词
	songTime:"",								//已播放的时长
	lrcShow:true,								//显示歌词				
	allRankingList:{},							//全部榜单
	soaringList:{},								//飙升榜
	newSongList:{},								//新歌榜
	hotSongList:{},								//热歌榜
	originalList:{},							//原创榜
	HiphopList:{},								//说唱榜
	HotSearch:{},								//热搜列表
	searchVal:"",								//搜索关键字
	searchSug:{},								//搜索匹配关键字
	searchResult:{},							//搜索结果
	recordImg:"http://p1.music.126.net/pmHS4fcQtcNEGewNb5HRhg==/2002210674180202.jpg",
	userImg:"",
	songTitle:"听一首歌吧~",						//歌名
	songSinger:"横滑可以切歌哦",					//歌手
	songImg:"http://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg"									//歌曲封面		
}
const store = new Vuex.Store({
		state,
		mutations,
		actions
	})
export default store