/**
 *  author: eric
 *  create at: 2019-12-25 20:34:59
 */
<template>
	<div>
		<yo-side></yo-side>
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
