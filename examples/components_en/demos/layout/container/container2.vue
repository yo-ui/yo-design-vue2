/**
 *  author: eric
 *  create at: 2019-12-24 22:12:39
 */
<template>
	<div>
		<yo-container></yo-container>
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
