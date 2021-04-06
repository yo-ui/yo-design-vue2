/**
 *  author: eric
 *  create at: 2019-12-25 20:50:01
 */
<template>
	<div>
		<yo-main></yo-main>
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
