/**
 *  author: eric
 *  create at: 2019-12-26 16:42:34
 */
<template>
	<div>
		<yo-breadcrumb></yo-breadcrumb>
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
