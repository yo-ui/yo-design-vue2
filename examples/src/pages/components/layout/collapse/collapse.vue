<template>
  <div class="yo-collapse-page">
    <yo-anchor
      :text="'Collapse ' + $lang('折叠面板组件')"
      size="30"
    ></yo-anchor>

    <yo-anchor :text="$lang('组件注册')" :size="24"></yo-anchor>
    <yo-code
      type="javascript"
      src="/components/demos/layout/collapse/use.js"
    ></yo-code>
    <yo-anchor :text="$lang('代码示例')" :size="24"></yo-anchor>

    <yo-example demo="layout/collapse/normal">
      <template v-slot:desc>
        <yo-desc :title="$lang('基本用法')">
          {{ $lang("基本用法") }}
        </yo-desc>
      </template>
    </yo-example>

    <yo-anchor :text="'Collapse ' + $lang('属性')" :size="24"></yo-anchor>
    <p v-html="$lang('属性说明')"></p>
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
  data() {
    return {
      propsTableData: [
        {
          param: "value",
          desc: `当前激活的面板的 name，可以使用 v-model 双向绑定`,
          type: "String|Array|Number",
          default: "",
          version: ""
        },
        {
          param: "accordion",
          desc: `是否开启手风琴模式，开启后每次至多展开一个面板`,
          type: "Boolean",
          default: "",
          version: ""
        },
        {
          param: "simple",
          desc: `是否开启简洁模式`,
          type: "Boolean",
          default: "",
          version: ""
        }
      ],
      eventTableData: [
        {
          param: "change",
          desc: "切换面板时触发，返回当前已展开的面板的 name，格式为数组",
          callback: "(names)=>void",
          version: ""
        }
      ],
      slotTableData: [{ param: "-", desc: "默认插槽", version: "" }]
    };
  }
};
</script>
<style lang="less" scoped>
@import "../../../../assets/less/pages/components/layout/collapse/index.less";
</style>
