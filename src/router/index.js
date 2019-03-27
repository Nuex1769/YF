import Vue from 'vue'
import Router from 'vue-router'
import Discover from '../view/Discover'
import SongList from '../components/SongList'
import MusicPlayer from '../view/MusicPlayer'
import RankingList from '../view/discover/RankingList'
import Search from '../view/Search'


Vue.use(Router)

export default new Router({
  routes: [
  {
  		path:'/',
  		name:'discover',
  		component:Discover
  	},
    {
      path:'/musicplayer',
      name:'musicplayer',
      component:MusicPlayer
    },
  	{
  		path:'/songlist',
  		name:'songlist',
  		component:SongList
  	},
    {
      path:'/rankinglist',
      name:'rankinglist',
      component:RankingList
    },
    {
      path:'/search',
      name:'search',
      component:Search
    }
  ]
})