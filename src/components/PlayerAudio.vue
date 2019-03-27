<template>
      <audio class="aplayer" autoPlay :src="songUrl" @timeupdate="getupdate"></audio>
</template>
<script>
	import {mapState} from 'vuex'
	export default{
		name:'PlayerAudio',
		computed:{
		    ...mapState(['songUrl']),
		},
		mounted(){
			
		},
		methods:{
			getupdate(){
				this.$emit("time-update")
			}
		}
	}
</script>