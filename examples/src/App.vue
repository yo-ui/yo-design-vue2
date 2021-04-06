<template>
  <div id="app" :class1="(userInfo?userInfo.pageUserTheme:'')+' '+lang">
    <keep-alive>
      <router-view class="flex-content-box" v-if="$route.meta.cache"></router-view>
    </keep-alive>
    <router-view class="flex-content-box" v-if="!$route.meta.cache"></router-view>
  </div>
</template>

<script>
import fqCommon from '@/common/common'
import {URL} from '@/common/env'
let variablePool={
	startTime:Date.now()
}

export default {
	name: 'app',
	data(){
		return {
			// serviceDialogShowStatus:false,
		}
	},
	async created() {
		let that=this
	},
	components:{
	},
	computed:{
		userInfo(){
			let userInfo=this.$store.getters.getUserInfo
			if(userInfo&&userInfo.pageUserTheme){
				$('body').removeClass('dark').removeClass('light').addClass(userInfo?userInfo.pageUserTheme:'')
			}
			return userInfo
		},
		lang(){
			let lang=this.$store.state.lang
			let _lang=(lang||'').toLowerCase()
			$('body').removeClass('zh-cn').removeClass('en').removeClass('korean').removeClass('japanese').addClass(_lang||'')
			return lang
		}
	},
	async mounted() {
		let that=this
	},
	beforeDestroy(){
		let that=this
		
	},
	destroyed(){
	},
	methods:{
		
	}
}
</script>

<style lang="less">
@import './assets/less/main.less';
</style>
