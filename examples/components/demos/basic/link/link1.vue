/**
 *  author: eric
 *  create at: 2019-12-23 10:47:50
 */
<template>
	<div class="demo">

		<yo-link>默认文字链接</yo-link>
		<yo-link type="primary">主要文字链接</yo-link>
		<yo-link type="success">成功文字链接</yo-link>
		<yo-link type="info">信息文字链接</yo-link>
		<yo-link type="warning">警告文字链接</yo-link>
		<yo-link type="error">错误文字链接</yo-link>
		<br>
		<yo-link :underline="false">默认文字链接</yo-link>
		<yo-link :underline="false" type="primary">主要文字链接</yo-link>
		<yo-link :underline="false" type="success">成功文字链接</yo-link>
		<yo-link :underline="false" type="info">信息文字链接</yo-link>
		<yo-link :underline="false" type="warning">警告文字链接</yo-link>
		<yo-link :underline="false" type="error">错误文字链接</yo-link>

		<br>
		<yo-link disabled>默认文字链接</yo-link>
		<yo-link disabled type="primary">主要文字链接</yo-link>
		<yo-link disabled type="success">成功文字链接</yo-link>
		<yo-link disabled type="info">信息文字链接</yo-link>
		<yo-link disabled type="warning">警告文字链接</yo-link>
		<yo-link disabled type="error">错误文字链接</yo-link>

		<br>
		<yo-link icon="message">默认文字链接</yo-link>
		<yo-link right-icon="eye">默认文字链接</yo-link>
		<yo-link icon="left" right-icon="right">默认文字链接</yo-link>
		<br>
		<yo-link icon="close" to="http://www.baidu.com/">跳转外部链接</yo-link>
		<yo-link icon="message" :to="{name:'componentButton'}">跳转到button</yo-link>
		<yo-link right-icon="eye">默认文字链接</yo-link>
		<yo-link icon="left" right-icon="right">默认文字链接</yo-link>
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
	.demo{
		.yo-a{
			margin-right: 10px;
		}
	}
</style>
