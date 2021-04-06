<template>
  	<div class="yo-component-layout-page">
		<yo-anchor :text="'Layout'+$lang('布局容器')" size="18"></yo-anchor>
		用于布局的容器组件，方便快速搭建页面的基本结构：

		<code>&lt;yo-container&gt;</code>：外层容器。当子元素中包含 <code>&lt;yo-header&gt;</code> 或 <code>&lt;yo-footer&gt;</code> 时，全部子元素会垂直上下排列，否则会水平左右排列。

		<code>&lt;yo-header&gt;</code>：顶栏容器。

		<code>&lt;yo-side&gt;</code>：侧边栏容器。

		<code>&lt;yo-main&gt;</code>：主要区域容器。

		<code>&lt;yo-footer&gt;</code>：底栏容器。

		以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，<code>&lt;yo-container&gt;</code> 的子元素只能是后四者，后四者的父元素也只能是 <code>&lt;yo-container&gt;</code>。
		
		<p>说明</p>

		<h3>基本调用</h3>
		<yo-example fold vertical root="/components/demos/" demo="basic/layout/layout1" ext=".vue"></yo-example>

		<h3>其他</h3>
		<yo-example vertical root="/components/demos/" demo="basic/layout/layout2" ext=".vue"></yo-example>

		<yo-anchor :text="'Layout '+$lang('参数')"></yo-anchor>
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

		<yo-anchor :text="'Layout '+$lang('方法')"></yo-anchor>
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

		<yo-anchor :text="'Layout '+$lang('事件')"></yo-anchor>
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
	@import "../../../../assets/less/pages/components/basic/layout/layout.less";
</style>