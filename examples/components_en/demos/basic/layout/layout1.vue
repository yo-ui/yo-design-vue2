/**
 *  author: eric
 *  create at: 2019-12-25 03:07:41
 */
<template>
	<div class="demo">
		<yo-container>
			<yo-header></yo-header>
			<yo-main></yo-main>
			<yo-footer></yo-footer>
		</yo-container>
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
