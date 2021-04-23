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
          <span
            v-html="
              $lang(
                '可以同时展开多个面板，这个例子默认展开了第一个。<code>borderRadius</code>属性，设置圆角显示单位为<code>px</code>'
              )
            "
          ></span>
        </yo-desc>
      </template>
    </yo-example>

    <yo-example demo="layout/collapse/accordion">
      <template v-slot:desc>
        <yo-desc :title="$lang('手风琴')">
          {{ $lang("手风琴，每次只打开一个面板项。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/collapse/size">
      <template v-slot:desc>
        <yo-desc :title="$lang('面板尺寸')">
          <span
            v-html="
              $lang(
                '网格布局显示 ，可通过设置size为<code>xxxl</code>,<code>xxl</code>,<code>xl</code>,<code>l</code>,<code>m</code>,<code>s</code><code>xs</code>控制尺寸'
              )
            "
          ></span>
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/collapse/group">
      <template v-slot:desc>
        <yo-desc :title="$lang('面板嵌套')">
          {{ $lang("嵌套折叠面板。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/collapse/simple">
      <template v-slot:desc>
        <yo-desc :title="$lang('简洁模式 ')">
          <span
            v-html="
              $lang(
                '设置属性 <code>simple</code> 可以显示为不带边框和背景色的简洁模式。'
              )
            "
          ></span>
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/collapse/diy">
      <template v-slot:desc>
        <yo-desc :title="$lang('自定义图标')">
          <span
            v-html="$lang('自定义各个面板的背景色、圆角、边距和图标。')"
          ></span>
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/collapse/hide">
      <template v-slot:desc>
        <yo-desc :title="$lang('隐藏箭头')">
          <span
            v-html="
              $lang(
                '你可以通过  <code>iconHide</code>隐藏 y-collapse-item 组件的箭头图标。'
              )
            "
          ></span>
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/collapse/extra">
      <template v-slot:desc>
        <yo-desc :title="$lang('额外节点')">
          <span
            v-html="$lang('可以同时展开多个面板，这个例子默认展开了第一个。')"
          ></span>
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/collapse/action">
      <template v-slot:desc>
        <yo-desc :title="$lang('面板操作区')">
          <span v-html="$lang('面板操作组，位置在面板内容底部')"></span>
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

    <yo-anchor :text="'CollapseItem ' + $lang('属性')" :size="24"></yo-anchor>
    <p v-html="$lang('属性说明')"></p>
    <table class="table">
      <tr>
        <th v-for="item in propsTableKeys" :key="item.code">
          {{ $lang(item.name) }}
        </th>
      </tr>
      <tr v-for="item in itemPropsTableData" :key="item.param">
        <td>{{ item.param }}</td>
        <td v-html="item.desc"></td>
        <td>{{ item.type }}</td>
        <td>{{ item.default || "-" }}</td>
        <td>{{ item.version || "-" }}</td>
      </tr>
    </table>

    <yo-anchor :text="'CollapseItem ' + $lang('插槽')" :size="24"></yo-anchor>
    <table class="table">
      <tr>
        <th v-for="item in slotTableKeys" :key="item.code">
          {{ $lang(item.name) }}
        </th>
      </tr>
      <tr v-for="item in itemSlotTableData" :key="item.param">
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
          param: "value(v-model)",
          desc: `当前激活的面板的 name，可以使用 v-model 双向绑定`,
          type: "String|Array|Number",
          default: "",
          version: ""
        },
        {
          param: "accordion",
          desc: `是否开启手风琴模式，开启后每次至多展开一个面板`,
          type: "Boolean",
          default: "false",
          version: ""
        },
        {
          param: "simple",
          desc: `是否开启简洁模式`,
          type: "Boolean",
          default: "false",
          version: ""
        },
        {
          param: "borderRadius",
          desc: `边框圆角`,
          type: "Number|String",
          default: 0,
          version: ""
        },
        {
          param: "border",
          desc: `是否显示边框，建议在灰色背景下使用`,
          type: "Boolean",
          default: true,
          version: ""
        },
        {
          param: "size",
          desc: `面板尺寸,可选值有<code>xxxl</code>、<code>xxl</code>、<code>xl</code>、<code>l</code>、<code>m</code>、<code>s</code>、<code>xs</code>,不填则为默认大小`,
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "iconHide",
          desc: `是否隐藏图标`,
          type: "Boolean",
          default: true,
          version: ""
        },
        {
          param: "split",
          desc: `是否显示分割线`,
          type: "Boolean",
          default: "true",
          version: ""
        },
        {
          param: "icon",
          desc: `标题前的图标,可选值为对应的图标类，若为内部icon类，则可省略yo-icon-前缀`,
          type: "String",
          default: "right",
          version: ""
        },
        {
          param: "iconSize",
          desc: `图标大小`,
          type: "Number",
          default: "",
          version: ""
        },
        {
          param: "iconPosition",
          desc: `设置图标位置： left, right`,
          type: "String",
          default: "left",
          version: ""
        },
        {
          param: "maxHeight",
          desc: `面板内容区最大高度,与折叠动画时长相关`,
          type: "Number",
          default: "500",
          version: ""
        },
        {
          param: "animationTime",
          desc: `面板内容展开的动画时长  单位为ms`,
          type: "Number",
          default: "200",
          version: ""
        },
        {
          param: "destroyInactivePanel",
          desc: `销毁折叠隐藏的面板`,
          type: "Boolean",
          default: "false",
          version: ""
        }
      ],
      itemPropsTableData: [
        {
          param: "name",
          desc: `当前面板的 name，与 Collapse的value对应，不填为索引`,
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "header",
          desc: `折叠面板头内容`,
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "icon",
          desc: `标题前的图标,可选值为对应的图标类，若为内部icon类，则可省略yo-icon-前缀`,
          type: "String",
          default: "right",
          version: ""
        },
        {
          param: "iconSize",
          desc: `图标大小`,
          type: "Number",
          default: "",
          version: ""
        },
        {
          param: "disabled",
          desc: `禁用后的面板展开与否将无法通过用户交互改变`,
          type: "Boolean",
          default: "",
          version: ""
        },
        {
          param: "iconPosition",
          desc: `设置图标位置： left, right`,
          type: "String",
          default: "left",
          version: ""
        },
        {
          param: "maxHeight",
          desc: `面板内容区最大高度,与折叠动画时长相关`,
          type: "Number",
          default: "500",
          version: ""
        },
        {
          param: "animationTime",
          desc: `面板内容展开的动画时长  单位为ms`,
          type: "Number",
          default: "200",
          version: ""
        },
        {
          param: "destroyInactivePanel",
          desc: `销毁折叠隐藏的面板`,
          type: "Boolean",
          default: "false",
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
      slotTableData: [{ param: "-", desc: "默认插槽", version: "" }],
      itemSlotTableData: [
        { param: "-", desc: "默认插槽,面板内容主体显示", version: "" },
        { param: "extra", desc: "自定义渲染每个面板右上角的内容", version: "" },
        { param: "action", desc: "自定义面板下方显示", version: "" },
        { param: "header", desc: "面板头内容", version: "" },
        { param: "icon", desc: "自定义图标", version: "" }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@import "../../../../assets/less/pages/components/layout/collapse/index.less";
</style>
