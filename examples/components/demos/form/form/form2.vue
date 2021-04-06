/**
 *  author: eric
 *  create at: 2020-01-02 16:03:32
 */
<template>
	<div>
		<yo-form></yo-form>
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
