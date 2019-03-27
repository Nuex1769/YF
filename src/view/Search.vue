<template>
	<div class="search">
		<div class="header">
			<div class="header-left">
				<mu-button icon slot="left" @click="$router.back(-1)">
					 <mu-icon value="arrow_back" color="#000" size="30"></mu-icon>
	  			</mu-button>
			</div>
			<div class="header-right">
				 <mu-form :model="form" class="mu-demo-form">
				    <mu-form-item>
				      <mu-text-field v-model="form.input" color="red"></mu-text-field>
				    </mu-form-item>
				</mu-form>
  				 <mu-icon value="search" class="searchIcon" color="#000" @click="getSearchSong"></mu-icon>
			</div>
		</div>
		<div class="main" v-if="resultShow">
			<div class="searchSug">
				<div class="SugList" v-for="s,index in searchSug" :key="index" @click="joinSug(s)">
					{{s.keyword}}
				</div>
			</div>
			<div class="hotSearch">
				<h3>热门搜索</h3>
				<div class="list" v-for="h,index in HotSearch.hots" :key="index" @click="searchHotVal(h)">{{h.first}}</div>
			</div>
			<div class="searchRecord">
				<h3>搜索历史</h3>
				<div class="list">陈雪凝</div>
				<div class="list">绿色</div>
				<div class="list">关于孤独</div>
			</div>
		</div>
		<div class="searchResult" v-else>
			<SearchResult />
		</div>
	</div>
</template>
<script>
	import SearchResult from '../components/SearchResult'
	import {mapState,mapActions} from 'vuex'
	export default{
		name:'Search',
		data(){
			return{
				resultShow:true,
				form:{
					input:""
				}
			}
		},
		computed:{
			...mapState(['HotSearch','searchSug']),
			getInput(){
				return this.form.input
			}
		},
		watch:{
			getInput(val){
				this.getSearchSug(val)
			}
		},
		methods:{
			...mapActions(['getSearchSug','getSearchResult']),
			searchHotVal(item){
				this.form.input = item.first
			},
			joinSug(item){
				this.form.input = item.keyword
			},
			getSearchSong(){
				this.getSearchResult()
				this.resultShow = false
			}
		},
		components:{
			SearchResult
		}
	}
	
</script>
<style lang="scss" scoped>
	.search{
		display:flex;
		flex-flow: column;
		position:fixed;
		top:0;
		left:0;
		bottom:0;
		width:100%;
		height:100%;
		.header{
			flex:0 0 48px;
			display:flex;
			.header-left{
				flex:0 0 48px;
			}
			.header-right{
				flex:1;
				margin-top:10px;
				margin-left:5px;
				position:relative;
				right:10px;
			}
			.searchIcon{
				position:absolute;
				top:0;
				right:10px;
			}
		}
		.main{
			padding:10px;
			flex:1;
			position:relative;
			font-size:14px;
			width:100%;
			h3{
				padding:10px 0;
				font-size:14px;
				color:#000;
			}
			.list{
				padding:5px;
				margin-bottom:10px;
				margin-right:10px;
				display:inline-block;
				background-color:#eee;
				border-radius:14px;
				overflow:hidden;
				color:#333;
			}
			.searchSug{
				position:absolute;
				top:0;
				left:0;
				width:95%;
				margin:0 10px;
				padding:0 10px;
				background-color:#fff;
				box-shadow:1px 1px 1px 1px #ccc;
				.SugList{
					padding:5px 0;
				}
			}
		}
		.searchResult{
			flex:1;
			position:relative;
			bottom:0;
			left:0;
			width:100%;
			height:100%;
		}
	}
</style>