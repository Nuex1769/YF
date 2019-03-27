<template>
	<div class="rankings" v-if="allRankingList != undefined">
		<div class="ranking" v-for="(item,index) in allRankingList.slice(0,5)" :key="index">
			<div class="rankingImg">
				<img :src="item.coverImgUrl" />
				<span>{{item.updateFrequency}}</span>
			</div>
			<div class="rankingSong">
				<div class="songList">
					<div class="list" v-for="(l,i) in soaringList.slice(0,3)" :key="index">
						{{i+1}}.{{l.name}}-{{l.ar[0].name}}
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="ranking" v-for="(item,index) in allRankingList.slice(1,2)" :key="index">
			<div class="rankingImg">
				<img :src="item.coverImgUrl" />
				<span>{{item.updateFrequency}}</span>
			</div>
			<div class="rankingSong">
				<div class="songList">
					<div class="list" v-for="(l,i) in newSongList.slice(0,3)" :key="index">
						{{i+1}}.{{l.name}}-{{l.ar[0].name}}
					</div>
				</div>
			</div>
		</div>
		<div class="ranking" v-for="(item,index) in allRankingList.slice(2,3)" :key="index">
			<div class="rankingImg">
				<img :src="item.coverImgUrl" />
				<span>{{item.updateFrequency}}</span>
			</div>
			<div class="rankingSong">
				<div class="songList">
					<div class="list" v-for="(l,i) in hotSongList.slice(0,3)" :key="index">
						{{i+1}}.{{l.name}}-{{l.ar[0].name}}
					</div>
				</div>
			</div>
		</div>
		<div class="ranking" v-for="(item,index) in allRankingList.slice(3,4)" :key="index">
			<div class="rankingImg">
				<img :src="item.coverImgUrl" />
				<span>{{item.updateFrequency}}</span>
			</div>
			<div class="rankingSong">
				<div class="songList">
					<div class="list" v-for="(l,i) in originalList.slice(0,3)" :key="index">
						{{i+1}}.{{l.name}}-{{l.ar[0].name}}
					</div>
				</div>
			</div>
		</div>
		<div class="ranking" v-for="(item,index) in allRankingList.slice(4,5)" :key="index">
			<div class="rankingImg">
				<img :src="item.coverImgUrl" />
				<span>{{item.updateFrequency}}</span>
			</div>
			<div class="rankingSong">
				<div class="songList">
					<div class="list" v-for="(l,i) in HiphopList.slice(0,3)" :key="index">
						{{i+1}}.{{l.name}}-{{l.ar[0].name}}
					</div>
				</div>
			</div>
		</div> -->
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	export default{
		name:'Rankings',
		computed:{
			...mapState(['allRankingList','soaringList','hotSongList','HiphopList','originalList','newSongList']),
		},
		methods:{

		},
	}
</script>
<style lang="scss" scoped>
	.ranking{
		display:flex;
		.rankingImg{
			position:relative;
			flex:0 0 130px;
			text-align:center;
			img{
				width:110px;
				height:110px;
				border-radius:5px;
				overflow:hidden;
			}
			span{
				position:absolute;
				bottom:10px;
				left:20px;
				font-size:12px;
				color:#fff;
			}
		}
		.rankingSong{
			flex:1;
			.songList{
				display:flex;
				flex-flow: column;
				width:100%;
				height:100%;
				border-bottom:1px solid #ccc;
			}
			.list{
				flex:1;
				line-height:38px;
			}
		}
		
	}
</style>