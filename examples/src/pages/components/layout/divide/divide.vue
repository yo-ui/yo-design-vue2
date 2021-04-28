<template>
  <div class="yo-divide-page">
    <yo-anchor :text="'Divide ' + $lang('组件')" size="30"></yo-anchor>
    <p>
      区隔内容的分割线。 <br />
      对不同章节的文本段落进行分割。 <br />
      对行内文字/链接进行分割，例如表格的操作列。
    </p>

    <yo-anchor :text="$lang('组件注册')" :size="24"></yo-anchor>
    <yo-code
      type="javascript"
      src="/components/demos/layout/divide/use.js"
    ></yo-code>
    <yo-anchor :text="$lang('代码示例')" :size="24"></yo-anchor>

    <yo-example demo="layout/divide/normal">
      <template v-slot:desc>
        <yo-desc :title="$lang('基本用法')">
          {{ $lang("基本用法") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/divide/type">
      <template v-slot:desc>
        <yo-desc :title="$lang('分割线类型')">
          <span
            v-html="
              $lang(
                `使用 <code>type=&quot;vertical&quot; </code>设置为行内的垂直分割线。默认为水平分割线，可在中间加入文字。`
              )
            "
          ></span>
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/divide/size">
      <template v-slot:desc>
        <yo-desc :title="$lang('分割线尺寸')">
          <span
            v-html="
              $lang(
                `网格布局显示 ，可通过设置size为<code>xxxl</code>,<code>xxl</code>,<code>xl</code>,<code>l</code>,<code>m</code>,<code>s</code><code>xs</code>控制尺寸`
              )
            "
          ></span>
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/divide/align">
      <template v-slot:desc>
        <yo-desc :title="$lang('标题位置')">
          <span
            v-html="
              $lang(
                `修改分割线标题的位置。可选像素(30px),百分比(30%)，或者<code>left</code>、<code>center</code>、<code>right</code>枚举值`
              )
            "
          ></span>
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/divide/style">
      <template v-slot:desc>
        <yo-desc :title="$lang('分割线样式')">
          <span
            v-html="
              $lang(
                `dotted 点样式，dashed 虚线样式，默认实线样式,color通过<code>primary</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>枚举值以及自定义颜色值设置`
              )
            "
          ></span>
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/divide/plain">
      <template v-slot:desc>
        <yo-desc :title="$lang('分割文字使用正文样式 ')">
          <span
            v-html="$lang(`设置属性 plain 可以显示为更轻量的分割文字样式。`)"
          ></span>
        </yo-desc>
      </template>
    </yo-example>

    <yo-anchor :text="'Divide ' + $lang('属性')" :size="24"></yo-anchor>
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

    <!-- <yo-anchor :text="'Divide ' + $lang('事件')" :size="24"></yo-anchor>
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
    </table> -->

    <yo-anchor :text="'Divide ' + $lang('插槽')" :size="24"></yo-anchor>
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
          param: "type",
          desc: `类型，可选值为 horizontal 或 vertical`,
          type: "String",
          default: "horizontal",
          version: ""
        },
        {
          param: "color",
          desc: `分割线颜色，可选值为primary,info,success,warning,error 以及标准颜色值`,
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "size",
          desc: `分割线尺寸，可通过设置size为<code>xxxl</code>,<code>xxl</code>,<code>xl</code>,<code>l</code>,<code>m</code>,<code>s</code><code>xs</code>控制尺寸`,
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "textAlign",
          desc: `文字位置，修改分割线标题的位置。可选像素(30px),百分比(30%)，或者<code>left</code>、<code>center</code>、<code>right</code>枚举值`,
          type: "String",
          default: "left",
          version: ""
        },
        {
          param: "dashed",
          desc: `是否虚线显示`,
          type: "Boolean",
          default: "false",
          version: ""
        },
        {
          param: "dotted",
          desc: `是否点线显示`,
          type: "Boolean",
          default: "false",
          version: ""
        },
        {
          param: "plain",
          desc: `文字显示为正文样式`,
          type: "Boolean",
          default: "false",
          version: ""
        }
      ],
      // eventTableData: [
      //   {
      //     param: "click",
      //     desc: "点击事件,点击按钮时的回调",
      //     callback: "(event)=>void",
      //     version: ""
      //   }
      // ],
      slotTableData: [
        { param: "-", desc: "默认插槽,显示分割线文字", version: "" }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@import "../../../../assets/less/pages/components/layout/divide/index.less";
</style>
