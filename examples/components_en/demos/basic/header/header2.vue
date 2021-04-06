/**
 *  author: eric
 *  create at: 2019-12-24 23:12:35
 */
<template>
	<div>
		<yo-header></yo-header>
	</div>
</template>
<script>
export default {
	data() {
		return {

		}
	},
	mounted() {
		this.$emit('loaded')
	},
}
</script>
<style lang="less" scoped>
	
</style>
