<template>
  <div class="yo-component-link-page">
    <yo-anchor :text="'Link' + $lang('文字链接')" size="30"></yo-anchor>
    <p>
      {{ $lang("基础组件，用于文字超链接。") }}
    </p>
    <p
      class="alert"
      v-html="$lang('注意：非 template/render 模式下，需使用 <code>y-link</code>。')"
    ></p>

    <yo-anchor :text="$lang('组件注册')" size="24"></yo-anchor>
    <yo-code type="javascript" src="/components/demos/basic/link/use.js"></yo-code>

    <yo-anchor :text="$lang('代码示例')" size="24"></yo-anchor>
    <yo-example demo="basic/link/normal">
      <template v-slot:desc>
        <yo-desc :title="$lang('基础用法')">
          {{
            $lang(
              "基础的文字链接用法。链接有6种类型:默认链接、主题色链接、信息链接、成功链接、警告链接、错误链接"
            )
          }}
        </yo-desc>
      </template>
    </yo-example>

    <yo-example demo="basic/link/disabled">
      <template v-slot:desc>
        <yo-desc :title="$lang('禁用状态')">
          {{ $lang("文字链接不可用状态。") }}
        </yo-desc>
      </template>
    </yo-example>

    <yo-example demo="basic/link/underline">
      <template v-slot:desc>
        <yo-desc :title="$lang('下划线')">
          {{ $lang("文字链接下划线。") }}
        </yo-desc>
      </template>
    </yo-example>

    <yo-example demo="basic/link/icon">
      <template v-slot:desc>
        <yo-desc :title="$lang('图标')">
          {{ $lang("带图标的文字链接可增强辨识度。") }}
        </yo-desc>
      </template>
    </yo-example>

    <yo-example demo="basic/link/link">
      <template v-slot:desc>
        <yo-desc :title="$lang('带链接')">
          {{ $lang("链接可跳转") }}
        </yo-desc>
      </template>
    </yo-example>

    <yo-anchor :text="'Link ' + $lang('属性')" :size="24"></yo-anchor>
    <!-- <p
      v-html="
        $lang(
          '支持原生 <code>button</code> 的其他所有属性。注意使用了<code>to</code>属性的时候相当于 <code>a</code>标签'
        )
      "
    ></p> -->
    <table class="table">
      <tr>
        <th v-for="item in propsTableKeys" :key="item.code">{{ $lang(item.name) }}</th>
        <!-- <th>说明</th>
        <th>类型</th> -->
        <!-- <th>可选值</th> -->
        <!-- <th>默认值</th>
        <th>版本</th> -->
      </tr>
      <tr v-for="item in propsTableData" :key="item.param">
        <td>{{ item.param }}</td>
        <td v-html="item.desc"></td>
        <td>{{ item.type }}</td>
        <td>{{ item.default || "-" }}</td>
        <td>{{ item.version || "-" }}</td>
      </tr>
    </table>

    <yo-anchor :text="'Link ' + $lang('插槽')" :size="24"></yo-anchor>
    <table class="table">
      <tr>
        <th v-for="item in slotTableKeys" :key="item.code">{{ $lang(item.name) }}</th>
        <!-- <th>名称</th>
        <th>说明</th> -->
      </tr>
      <tr v-for="item in slotTableData" :key="item.param">
        <td>{{ item.param }}</td>
        <td v-html="item.desc"></td>
        <!-- <td>{{ item.callback || "-" }}</td> -->
        <td>{{ item.version || "-" }}</td>
      </tr>
    </table>

    <!-- <h3>其他</h3>
    <yo-example demo="basic/link/link2"></yo-example> -->
    <!-- 
    <yo-anchor :text="'Link ' + $lang('参数')"></yo-anchor>
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

    <yo-anchor :text="'Link ' + $lang('方法')"></yo-anchor>
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

    <yo-anchor :text="'Link ' + $lang('事件')"></yo-anchor>
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
    </table> -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        propsTableData: [
          {
            param: "type",
            desc: `设置链接类型,可选值为<code>primary</code>,<code>text</code>,<code>info</code>,<code>success</code>,<code>warning</code>,<code>error</code>或者不设置`,
            type: "String",
            default: "",
            version: "",
          },
          {
            param: "disabled",
            desc: "链接失效状态",
            type: "Boolean",
            default: "false",
            version: "",
          },

          {
            param: "iconSize",
            desc: "左侧引用图标尺寸",
            type: "Number",
            default: "12",
            version: "",
          },

          {
            param: "icon",
            desc:
              "左侧引用图标名称,可选值为对应的图标类，若为内部icon类，则可省略<code>yo-icon-</code>前缀",
            type: "String",
            default: "",
            version: "",
          },
          {
            param: "rightIconSize",
            desc: "右侧引用图标尺寸",
            type: "Number",
            default: "12",
            version: "",
          },
          {
            param: "rightIcon",
            desc:
              "右侧引用图标名称,可选值为对应的图标类，若为内部icon类，则可省略<code>yo-icon-</code>前缀",
            type: "String",
            default: "",
            version: "",
          },
          {
            param: "to",
            desc: "跳转的链接，支持 vue-router 对象",
            type: "String | Object",
            default: "",
            version: "",
          },
          {
            param: "replace",
            desc: "路由跳转时，开启 replace 将不会向 history 添加新记录",
            type: "Boolean",
            default: "false",
            version: "",
          },
          {
            param: "underline",
            desc: "是否带下划线",
            type: "Boolean",
            default: "true",
            version: "",
          },
          {
            param: "target",
            desc:
              "路由跳转时，相当于 a 链接的 target 属性,可选值请参考<a class='yo-btn yo-btn-text' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formtarget' target='_blank'>HTML 标准</a>,可选值有<code>_self </code>、<code>_blank</code>、<code>_parent</code>、<code>_top</code>",
            type: "String",
            default: "_self",
            version: "",
          },
          {
            param: "color",
            desc: "链接背景颜色",
            type: "String",
            default: "",
            version: "",
          },
          {
            param: "textColor",
            desc: "链接文字颜色",
            type: "String",
            default: "",
            version: "",
          },
        ],

        slotTableData: [
          { param: "-", desc: "默认插槽", version: "" },
          { param: "left", desc: "左侧插槽", version: "" },
          { param: "right", desc: "右侧插槽", version: "" },
        ],
      };
    },
  };
</script>
<style lang="less" scoped>
  @import "../../../../assets/less/pages/components/basic/link/link.less";
</style>
