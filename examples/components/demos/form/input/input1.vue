/**
 *  author: eric
 *  create at: 2019-12-30 23:48:26
 */
<template>
	<div class="demo">
		{{$lang('双向绑定')}}:{{yoInput}} <br>
		<p>{{$lang('基础用法')}}</p>
		<yo-input :placeholder="$lang('请输入内容')" v-model="yoInput"></yo-input>

		<p>{{$lang('尺寸')}}</p>
		<yo-input size="l" :placeholder="$lang('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input size="m" :placeholder="$lang('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input :placeholder="$lang('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input size="s" :placeholder="$lang('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input size="xs" :placeholder="$lang('请输入内容')" v-model="yoInput"></yo-input>

		<p>{{$lang('可清空')}}</p>
		<yo-input :placeholder="$lang('请输入内容')" v-model="yoInput" clearable></yo-input>
		<p>{{$lang('显示字数统计')}}</p>
		<yo-input show-word-limit clearable maxlength="100" :placeholder="$lang('请输入内容')" v-model="yoInput1"></yo-input>
		<yo-input show-word-limit outer maxlength="100" :placeholder="$lang('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input show-word-limit  :placeholder="$lang('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input type="textarea" show-word-limit  :placeholder="$lang('请输入内容')" v-model="yoInput"></yo-input>

		<p>{{$lang('禁用状态')}}</p>
		<yo-input disabled :placeholder="$lang('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input type="textarea" disabled :placeholder="$lang('请输入内容')" v-model="yoInput"></yo-input>
		<p>{{$lang('密码框')}}</p>
		<yo-input type="password" :placeholder="$lang('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input type="password" clearable show-password :placeholder="$lang('请输入内容')" v-model="yoInput"></yo-input>

		<p>{{$lang('带icon的输入框')}}</p>
		{{$lang('属性方式')}}:
		<yo-input right-icon="calendar" :placeholder="$lang('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input icon="search" :placeholder="$lang('请输入内容')" v-model="yoInput"></yo-input>
		<br>
		{{$lang('slot方式')}}:
		<yo-input :placeholder="$lang('请输入内容')" v-model="yoInput">
			<i class="yo-icon-calendar" slot="right"></i>
		</yo-input>
		<yo-input :placeholder="$lang('请输入内容')" v-model="yoInput">
			<i class="yo-icon-search" slot="left"></i>
		</yo-input>

		<p>{{$lang('复合型输入框')}}</p>
		<yo-input :placeholder="$lang('请输入内容')" v-model="yoInput">
			<span slot="prepend">Http://</span>
		</yo-input>
		<yo-input size="l" :placeholder="$lang('请输入内容')" v-model="yoInput">
			<span slot="append">.com</span>
		</yo-input>
		<yo-input :placeholder="$lang('请输入内容')" v-model="yoInput">
			<span slot="append" class="yo-icon-search"></span>
		</yo-input>
		<p>{{$lang('开启 search 属性，可以设置为搜索型输入框。')}}</p>
		<yo-input search :placeholder="$lang('请输入内容')" v-model="yoInput">
		</yo-input>
		<yo-input search size="l" enter-button :placeholder="$lang('请输入内容')" v-model="yoInput">
		</yo-input>
		<yo-input search enter-button="Search" :placeholder="$lang('请输入内容')" v-model="yoInput">
		</yo-input>

	</div>
</template>
<script>
export default {
	data() {
		return {
			yoInput:1,
			yoInput1:2,
		}
	},
	mounted() {
		this.$emit('loaded')
	},
}
</script>
<style lang="less" scoped>
	.demo{
		.yo-input{
			margin-right: 10px;
		}
	}
</style>
