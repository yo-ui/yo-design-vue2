/**
 *  author: eric
 *  create at: 2020-01-15 00:03:52
 */
<template>
	<div class="demo">
		{{yoCheckbox}} <br>
		<yo-checkbox v-model="yoCheckbox" label="上海"></yo-checkbox>
		<yo-checkbox border v-model="yoCheckbox" label="广州"></yo-checkbox>
	</div>
</template>
<script>
export default {
	data() {
		return {
			yoCheckbox:'选中且禁用',
			label:'选中且禁用',
			single:false,
			single1:0,
		}
	},
	mounted() {
		this.$emit('loaded')
	},
}
</script>
<style lang="less" scoped>
	
</style>
