<template>
  <div id="app">
     <keep-alive>
  		<router-view @getAudioState="getAudio" /><!-- /*@get-audio-time="getcurrentTime"*/ -->
    </keep-alive>
      <Drawer/>
      <PlayerAudio ref="Player" @time-update="getTimer"/>
      <PlayList />  
      <MusicPlayerMin v-show="audioShow" @get-audio="getAudio"/>
  </div>
</template>

<script>
  import Drawer from './components/Drawer'
  import PlayerAudio from './components/PlayerAudio'
  import PlayList from './components/PlayList'
  import MusicPlayerMin from './components/MusicPlayerMin'
  import {mapActions,mapState,mapMutations} from 'vuex'

export default {
  name: 'app',
  data(){
    return{
        currentTimes:''
    }
  },
  computed:{
    ...mapState(['audioShow','playerpaused','songTime','songUrl','singerArr','playOrder','playSongList'])
    },
  methods:{
    ...mapActions(['getlittlePlayer','getAudioItem','getSongTimes','palayerplay','playerPause','getduration']),
    ...mapMutations(['getAddOrder']),
      getAudio(){
        let audio =  this.$refs.Player.$el
        if(this.songUrl != ''){
          if(audio.paused){
            audio.play()
            this.palayerplay()
          }else{
            audio.pause()
            this.playerPause()
          } 
        }
     },
     // getcurrentTime(){
     //  let audio = this.$refs.Player.$el
     // },
    getTimer(){
       let audio = this.$refs.Player.$el
       if(!audio.ended){
         this.getSongTimes(audio.currentTime)
         this.getduration(audio.duration)
       }else{
          if(this.playOrder < this.playSongList.length-1){
            this.getAddOrder()
          }else{
            console.log("播放结束")
            this.playerPause()
          }
       }
    }
  },
  components: {
  	MusicPlayerMin,
    PlayerAudio,
    Drawer,
    PlayList
  },
  
}
</script>
<style lang="scss" scoped>
 html,body,#app{
	position: absolute;
  width:100%;
  height:100%;
}

</style>
