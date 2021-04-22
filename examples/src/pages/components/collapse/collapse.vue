<template>
  	<div class="yo-collapse-page">
		<yo-anchor :text="'Collapse '+$lang('组件')" size="30"></yo-anchor>

		<yo-anchor :text="$lang('组件注册')" :size="24"></yo-anchor>
    <yo-code
      type="javascript"
      src="/components/demos/collapse/use.js"
    ></yo-code>
    <yo-anchor :text="$lang('代码示例')" :size="24"></yo-anchor>

    <yo-example demo="collapse/collapse1">
      <template v-slot:desc>
        <yo-desc :title="$lang('基本用法')">
          {{
            $lang(
              "基本用法"
            )
          }}
        </yo-desc>
      </template>
    </yo-example>

		<yo-anchor :text="'Collapse ' + $lang('属性')" :size="24"></yo-anchor>
    <p
      v-html="
        $lang(
          '属性说明'
        )
      "
    ></p>
    <table class="table">
      <tr>
        <th v-for="item in propsTableKeys" :key="item.code">
          {{ $lang(item.name) }}
        </th>
      </tr>
      <tr v-for="item in propsTableData" :key="item.param">
        <td>{{ item.param }}</td>
        <td v-html="item.desc"></td>
        <td>{{ item.type }}</td>
        <td>{{ item.default || "-" }}</td>
        <td>{{ item.version || "-" }}</td>
      </tr>
    </table>


    <yo-anchor :text="'Collapse ' + $lang('事件')" :size="24"></yo-anchor>
    <table class="table">
      <tr>
        <th v-for="item in eventTableKeys" :key="item.code">
          {{ $lang(item.name) }}
        </th>
      </tr>
      <tr v-for="item in eventTableData" :key="item.param">
        <td>{{ item.param }}</td>
        <td v-html="item.desc"></td>
        <td>{{ item.callback || "-" }}</td>
        <td>{{ item.version || "-" }}</td>
      </tr>
    </table>


    <yo-anchor :text="'Collapse ' + $lang('插槽')" :size="24"></yo-anchor>
    <table class="table">
      <tr>
        <th v-for="item in slotTableKeys" :key="item.code">
          {{ $lang(item.name) }}
        </th>
      </tr>
      <tr v-for="item in slotTableData" :key="item.param">
        <td>{{ item.param }}</td>
        <td v-html="item.desc"></td>
        <td>{{ item.version || "-" }}</td>
      </tr>
    </table>
  	</div>
</template>
<script>
	export default {
		data(){
			return {
				propsTableData:[
        {
          param: "type",
          desc: ``,
          type: "String",
          default: "",
          version: ""
        },
        ],
				eventTableData:[{
          param: "click",
          desc: "点击事件,点击按钮时的回调",
          callback: "(event)=>void",
          version: ""
        }],
				slotTableData:[ { param: "-", desc: "默认插槽", version: "" },],
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../../../assets/less/pages/components/collapse/collapse.less";
</style>