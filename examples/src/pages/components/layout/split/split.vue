<template>
  <div class="yo-split-page">
    <yo-anchor :text="'Split ' + $lang('组件')" size="30"></yo-anchor>

    <yo-anchor :text="$lang('组件注册')" :size="24"></yo-anchor>
    <yo-code
      type="javascript"
      src="/components/demos/layout/split/use.js"
    ></yo-code>
    <yo-anchor :text="$lang('代码示例')" :size="24"></yo-anchor>

    <yo-example demo="layout/split/normal">
      <template v-slot:desc>
        <yo-desc :title="$lang('左右分割')">
          {{ $lang("左右分割用法。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/split/type">
      <template v-slot:desc>
        <yo-desc :title="$lang('下下分割')">
          {{ $lang("上下分割用法。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/split/group">
      <template v-slot:desc>
        <yo-desc :title="$lang('嵌套使用')">
          {{ $lang("嵌套使用。") }}
        </yo-desc>
      </template>
    </yo-example>

    <yo-anchor :text="'Split ' + $lang('属性')" :size="24"></yo-anchor>
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

    <yo-anchor :text="'Split ' + $lang('事件')" :size="24"></yo-anchor>
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

    <yo-anchor :text="'Split ' + $lang('插槽')" :size="24"></yo-anchor>
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
          desc: `面板位置，可以是 0~1 代表百分比，或具体数值的像素，可用 v-model 双向绑定`,
          type: "Number|String",
          default: "0.5",
          version: ""
        },
        {
          param: "border",
          desc: `是否显示边框`,
          type: "Boolean",
          default: "",
          version: ""
        },
        {
          param: "borderRadius",
          desc: `显示边框圆角大小`,
          type: "String|Number",
          default: "0",
          version: ""
        },
        {
          param: "type",
          desc: `类型，可选值为 horizontal 或 vertical`,
          type: "String",
          default: "horizontal",
          version: ""
        },
        {
          param: "min",
          desc: ``,
          type: "最小阈值，距离最左边或最上边的距离",
          default: "",
          version: ""
        },
        {
          param: "max",
          desc: ``,
          type: "最大阈值，距离最右边或最下边的距离",
          default: "",
          version: ""
        }
      ],
      eventTableData: [
        {
          param: "moveStart",
          desc: "鼠标事件，拖拽开始",
          callback: "(event)=>void",
          version: ""
        },
        {
          param: "moveing",
          desc: "鼠标事件，拖拽中",
          callback: "(event)=>void",
          version: ""
        },
        {
          param: "moveEnd",
          desc: "鼠标事件，拖拽结束",
          callback: "(event)=>void",
          version: ""
        }
      ],
      slotTableData: [
        {
          param: "left",
          desc: "mode 为 horizontal 时可用，左边面板",
          version: ""
        },
        {
          param: "right",
          desc: "mode 为 horizontal 时可用，右边面板",
          version: ""
        },
        {
          param: "top",
          desc: "mode 为 vertical 时可用，上边面板",
          version: ""
        },
        {
          param: "bottom",
          desc: "mode 为 vertical 时可用，下边面板",
          version: ""
        },
        { param: "trigger", desc: "自定义分割拖拽节点", version: "" }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@import "../../../../assets/less/pages/components/layout/split/index.less";
</style>
