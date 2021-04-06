/**
 *  author: eric
 *  create at: 2019-12-25 20:34:43
 */
<template>
	<div>
		<yo-footer></yo-footer>
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
