<template>
	<mu-drawer :open.sync="open" :docked="docked">
    <mu-list>
      <mu-list-item button>
        <mu-list-item-title>Menu Item 1</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-title>Menu Item 2</mu-list-item-title>
      </mu-list-item>
      <mu-list-item  @click="DrawerHide" button>
        <mu-list-item-title>Close</mu-list-item-title>
      </mu-list-item>
    </mu-list>
  </mu-drawer>
</template>
<script>
  import {mapState,mapActions} from 'vuex'
	export default{
		name:"Drawer",
    computed:{
      ...mapState(['open','docked'])
    },
    methods:{
      ...mapActions(['DrawerHide'])
    }
	}
</script>