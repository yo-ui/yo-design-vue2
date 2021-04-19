/**
 *  author: eric
 *  create at: 2019-12-25 03:07:41
 */
<template>
	<div>
		<yo-layout></yo-layout>
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
