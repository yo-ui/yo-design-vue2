<template>
  	<div class="yo-component-link-page">
		<yo-anchor :text="'Link'+$lang('按钮')" size="18"></yo-anchor>

		
		<p>说明</p>

		<h3>基本调用</h3>
		<yo-example root="/components/demos/" demo="basic/link/link1" ext=".vue"></yo-example>

		<h3>其他</h3>
		<yo-example root="/components/demos/" demo="basic/link/link2" ext=".vue"></yo-example>

		<yo-anchor :text="'Link '+$lang('参数')"></yo-anchor>
		<table class="table">
			<tr>
				<th>参数</th>
				<th>说明</th>
				<th>类型</th>
				<th>可选值</th>
				<th>默认值</th>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td>Boolean</td>
				<td>-</td>
				<td>false</td>
			</tr>
		</table>

		<yo-anchor :text="'Link '+$lang('方法')"></yo-anchor>
		<table class="table">
			<tr>
				<th>方法</th>
				<th>说明</th>
				<th>参数</th>
				<th>返回值</th>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		</table>

		<yo-anchor :text="'Link '+$lang('事件')"></yo-anchor>
		<table class="table">
			<tr>
				<th>参数</th>
				<th>说明</th>
				<th>返回值</th>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		</table>
  	</div>
</template>

<style lang="less" scoped>
	@import "../../../../assets/less/pages/components/basic/link/link.less";
</style>