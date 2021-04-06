/**
 *  author: eric
 *  create at: 2019-12-26 16:42:34
 */
<template>
	<div>
		<yo-breadcrumb :items="items"></yo-breadcrumb>
		<br>
		<yo-breadcrumb :items="items1"></yo-breadcrumb>
		<br>
		<yo-breadcrumb separator=">" :items="items1"></yo-breadcrumb>
<br>
		<yo-breadcrumb separator-icon="right" :items="items"></yo-breadcrumb>
<br>
		<yo-breadcrumb>
			<yo-breadcrumb-item icon="home" :to="{name:'index'}">Home</yo-breadcrumb-item>
			<yo-breadcrumb-item right-icon="close" :to="{name:'component'}">Component</yo-breadcrumb-item>
			<yo-breadcrumb-item>Breadcrumb</yo-breadcrumb-item>
		</yo-breadcrumb>
	</div>
</template>
<script>
export default {
	data() {
		return {
			items:[
				{title:'Home',icon:'home',rightIcon:'eye',to:{name:'index'}},
				{title:'Component',to:{name:'component'}},
				{title:'Breadcrumb'},
			],
			items1:[
				{title:'Home',icon:'home',to:'/'},
				{title:'Component',to:'/component'},
				{title:'Breadcrumb'},
			],
		}
	},
	mounted() {
		this.$emit('loaded')
	},
}
</script>
<style lang="less" scoped>
	
</style>
