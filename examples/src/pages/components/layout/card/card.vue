<template>
  <div class="yo-card-page">
    <yo-anchor :text="'Card ' + $lang('卡片组件')" size="30"></yo-anchor>
    <p>
      {{
        $lang(
          "通用卡片容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。"
        )
      }}
    </p>

    <yo-anchor :text="$lang('组件注册')" :size="24"></yo-anchor>
    <yo-code
      type="javascript"
      src="/components/demos/layout/card/use.js"
    ></yo-code>
    <yo-anchor :text="$lang('代码示例')" :size="24"></yo-anchor>

    <yo-example demo="layout/card/normal">
      <template v-slot:desc>
        <yo-desc :title="$lang('基本用法')">
          {{ $lang("包含标题、内容、操作区域。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/card/size">
      <template v-slot:desc>
        <yo-desc :title="$lang('卡片尺寸')">
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
    <yo-example demo="layout/card/border">
      <template v-slot:desc>
        <yo-desc :title="$lang('卡片边框')">
          <span
            v-html="
              $lang(
                '通过设置属性border为 false ，可以不添加边框，建议在灰色背景下使用。'
              )
            "
          ></span>
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/card/hover">
      <template v-slot:desc>
        <yo-desc :title="$lang('卡片悬停阴影')">
          <span
            v-html="$lang('通过设置属性hover来启用鼠标悬停显示阴影的效果。')"
          ></span>
        </yo-desc>
      </template>
    </yo-example>

    <yo-example demo="layout/card/shadow">
      <template v-slot:desc>
        <yo-desc :title="$lang('卡片阴影')">
          {{
            $lang(
              "通过设置属性shadow来显示卡片阴影，使用该属性后，border和hover将无效，建议在灰色背景下使用。"
            )
          }}
        </yo-desc>
      </template>
    </yo-example>

    <yo-example demo="layout/card/link">
      <template v-slot:desc>
        <yo-desc :title="$lang('卡片链接')">
          {{ $lang("链接可跳转，") }}
        </yo-desc>
      </template>
    </yo-example>

    <yo-example demo="layout/card/simple">
      <template v-slot:desc>
        <yo-desc :title="$lang('简洁卡片')">
          {{ $lang("只包含内容区域，没有标题。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/card/poster">
      <template v-slot:desc>
        <yo-desc :title="$lang('卡片封面及更多内容配置')">
          <span
            v-html="
              $lang(
                '一种支持封面、头像、标题和描述信息的卡片。可以利用<code>y-card-meta</code> 支持更灵活的内容 '
              )
            "
          ></span>
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/card/inner">
      <template v-slot:desc>
        <yo-desc :title="$lang('内部卡片')">
          <span
            v-html="$lang('可以放在普通卡片内部，展示多层级结构的信息 ')"
          ></span>
        </yo-desc>
      </template>
    </yo-example>

    <yo-anchor :text="'Card ' + $lang('属性')" :size="24"></yo-anchor>
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

    <!-- <yo-anchor :text="'Card ' + $lang('事件')" :size="24"></yo-anchor>
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

    <yo-anchor :text="'Card ' + $lang('插槽')" :size="24"></yo-anchor>
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

    <yo-anchor :text="'CardMeta ' + $lang('属性')" :size="24"></yo-anchor>
    <p v-html="$lang('属性说明')"></p>
    <table class="table">
      <tr>
        <th v-for="item in propsTableKeys" :key="item.code">
          {{ $lang(item.name) }}
        </th>
      </tr>
      <tr v-for="item in metaPropsTableData" :key="item.param">
        <td>{{ item.param }}</td>
        <td v-html="item.desc"></td>
        <td>{{ item.type }}</td>
        <td>{{ item.default || "-" }}</td>
        <td>{{ item.version || "-" }}</td>
      </tr>
    </table>

    <yo-anchor :text="'CardMeta ' + $lang('插槽')" :size="24"></yo-anchor>
    <table class="table">
      <tr>
        <th v-for="item in slotTableKeys" :key="item.code">
          {{ $lang(item.name) }}
        </th>
      </tr>
      <tr v-for="item in metaSlotTableData" :key="item.param">
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
          param: "hover",
          desc: `鼠标悬停显示阴影`,
          type: "Boolean",
          default: false,
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
          desc: `卡片尺寸,可选值有<code>xxxl</code>、<code>xxl</code>、<code>xl</code>、<code>l</code>、<code>m</code>、<code>s</code>、<code>xs</code>,不填则为默认大小`,
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "icon",
          desc: `标题前的图标`,
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "poster",
          desc: `卡片封面`,
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "posterTitle",
          desc: `卡片封面说明`,
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "title",
          desc: `卡片标题`,
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "padding",
          desc: `卡片内部间距，单位 px`,
          type: "Number|String",
          default: 16,
          version: ""
        },
        {
          param: "shadow",
          desc: `卡片阴影，建议在灰色背景下使用`,
          type: "Boolean",
          default: false,
          version: ""
        },
        {
          param: "to",
          desc: "跳转的链接，支持 vue-router 对象",
          type: "String | Object",
          default: "",
          version: ""
        },
        {
          param: "replace",
          desc: "路由跳转时，开启 replace 将不会向 history 添加新记录",
          type: "Boolean",
          default: "false",
          version: ""
        },
        {
          param: "target",
          desc:
            "路由跳转时，相当于 a 链接的 target 属性,可选值请参考<a class='yo-btn yo-btn-text' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formtarget' target='_blank'>HTML 标准</a>,可选值有<code>_self </code>、<code>_blank</code>、<code>_parent</code>、<code>_top</code>",
          type: "String",
          default: "_self",
          version: ""
        },
        {
          param: "append",
          desc: "是否附加前缀路径，同 vue-router append",
          type: "Boolean",
          default: false,
          version: ""
        }
      ],
      metaPropsTableData: [
        {
          param: "avatar",
          desc: "卡片元素的图标",
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "avatarTitle",
          desc: "卡片元素的图标说明",
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "title",
          desc: "卡片元素的标题",
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "desc",
          desc: "卡片元素的标题",
          type: "String",
          default: "",
          version: ""
        }
      ],
      slotTableData: [
        { param: "-", desc: "默认插槽,显示卡片主体内容", version: "" },
        {
          param: "title",
          desc: "自定义卡片标题",
          version: ""
        },
        { param: "action", desc: "卡片操作组，位置在卡片底部", version: "" },
        {
          param: "extra",
          desc: "额外显示的内容，默认位置在右上角",
          version: ""
        }
      ],
      metaSlotTableData: [
        { param: "-", desc: "默认插槽,显示描述信息", version: "" },
        {
          param: "avatar",
          desc: "自定义列表元素的标题",
          version: ""
        },
        {
          param: "title",
          desc: "自定义列表元素的标题",
          version: ""
        },
        {
          param: "desc",
          desc: "自定义列表元素的描述内容",
          version: ""
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@import "../../../../assets/less/pages/components/layout/card/card.less";
</style>
