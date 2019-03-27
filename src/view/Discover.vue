<template>
<div>
	<!-- 头部导航 -->
	<Homepage></Homepage>
	<!-- 发现音乐 -->
	<DiscoverMusic></DiscoverMusic>
</div>
</template>
<script>
	import Homepage from '../components/Homepage'
	import DiscoverMusic from '../components/DiscoverMusic'

	export default{
		name:'Discover',
		components:{
			Homepage,
			DiscoverMusic
		}
	}
</script>