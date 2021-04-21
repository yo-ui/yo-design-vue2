<!--demo页面-->
<template>
  <div class="fq-layout-list-page">
    <yo-anchor :text="'List ' + $lang('列表')" size="30"></yo-anchor>

    <p>
      {{
        $lang(
          "布局组件，最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。"
        )
      }}
    </p>
    <p
      class="alert"
      v-html="
        $lang('注意：非 template/render 模式下，需使用 <code>y-list</code>。')
      "
    ></p>

    <yo-anchor :text="$lang('组件注册')" :size="24"></yo-anchor>
    <yo-code
      type="javascript"
      src="/components/demos/layout/list/use.js"
    ></yo-code>
    <yo-anchor :text="$lang('代码示例')" :size="24"></yo-anchor>

    <yo-example demo="layout/list/normal">
      <template v-slot:desc>
        <yo-desc :title="$lang('基本用法')">
          {{
            $lang("基础列表,可以设置 header 或 footer 来自定义列表头部或尾部。")
          }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/list/size">
      <template v-slot:desc>
        <yo-desc :title="$lang('尺寸大小')">
          {{ $lang("设置属性 size 可以显示八种不同尺寸的列表。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/list/icon">
      <template v-slot:desc>
        <yo-desc :title="$lang('图标列表')">
          {{ $lang("带有图标、标题、描述的基础列表。也可以带有列表操作组。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/list/type">
      <template v-slot:desc>
        <yo-desc :title="$lang('列表类型')">
          <span
            v-html="
              $lang(
                '设置属性<code>vertical</code> 可实现竖排列表样式。默认为horizontal水平列表样式,<br>设置属性<code>reverse</code>能实现列表的反序排列'
              )
            "
          ></span>
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/list/loading">
      <template v-slot:desc>
        <yo-desc :title="$lang('列表加载中')">
          <span
            v-html="
              $lang(
                '设置属性<code>loading</code>当卡片内容还在加载中时，可以用 loading 展示一个占位'
              )
            "
          ></span>
        </yo-desc>
      </template>
    </yo-example>

    <yo-anchor :text="'List ' + $lang('属性')" :size="24"></yo-anchor>
    <!-- <p
      v-html="
        $lang(
          '支持原生 <code>button</code> 的其他所有属性。注意使用了<code>to</code>属性的时候相当于 <code>a</code>标签'
        )
      "
    ></p> -->
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

    <yo-anchor :text="'List ' + $lang('插槽')" :size="24"></yo-anchor>
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

    <yo-anchor :text="'ListItem ' + $lang('插槽')" :size="24"></yo-anchor>
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

    <yo-anchor :text="'ListItemMeta ' + $lang('属性')" :size="24"></yo-anchor>
    <table class="table">
      <tr>
        <th v-for="item in propsTableKeys" :key="item.code">
          {{ $lang(item.name) }}
        </th>
      </tr>
      <tr v-for="item in itemMetaPropsTableData" :key="item.param">
        <td>{{ item.param }}</td>
        <td v-html="item.desc"></td>
        <td>{{ item.type }}</td>
        <td>{{ item.default || "-" }}</td>
        <td>{{ item.version || "-" }}</td>
      </tr>
    </table>

    <yo-anchor :text="'ListItemMeta ' + $lang('插槽')" :size="24"></yo-anchor>
    <table class="table">
      <tr>
        <th v-for="item in slotTableKeys" :key="item.code">
          {{ $lang(item.name) }}
        </th>
      </tr>
      <tr v-for="item in itemMetaSlotTableData" :key="item.param">
        <td>{{ item.param }}</td>
        <td v-html="item.desc"></td>
        <td>{{ item.version || "-" }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
// import fqCommon from "@/common/common";
export default {
  name: "fq-layout-list-page",
  components: {},
  data() {
    return {
      propsTableData: [
        {
          param: "border",
          desc: `是否显示边框`,
          type: "Boolean",
          default: "true",
          version: ""
        },
        {
          param: "header",
          desc: "列表头部",
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "footer",
          desc: "列表底部",
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "loading",
          desc: "列表是否正在加载",
          type: "Boolean",
          default: "false",
          version: ""
        },
        {
          param: "size",
          desc:
            "列表尺寸，可选值有<code>xxxl</code>、<code>xxl</code>、<code>xl</code>、<code>l</code>、<code>m</code>、<code>s</code>、<code>xs</code>,不填则为默认大小",
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "split",
          desc: "是否展示分割线",
          type: "Boolean",
          default: "true",
          version: ""
        },
        {
          param: "reverse",
          desc: "内容反序排列",
          type: "Boolean",
          default: "false",
          version: ""
        },
        {
          param: "vertical",
          desc: "竖直布局",
          type: "Boolean",
          default: "false",
          version: ""
        }
      ],
      itemMetaPropsTableData: [
        {
          param: "avatar",
          desc: "列表元素的图标",
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "avatarTitle",
          desc: "列表元素的图标说明",
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "title",
          desc: "列表元素的标题",
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "desc",
          desc: "列表元素的标题",
          type: "String",
          default: "",
          version: ""
        }
      ],
      slotTableData: [
        { param: "-", desc: "默认插槽,显示列表主体内容", version: "" },
        { param: "header", desc: "自定义列表头部", version: "" },
        { param: "footer", desc: "自定义列表底部", version: "" },
        { param: "loading", desc: "自定义加载中", version: "" }
      ],
      itemSlotTableData: [
        { param: "-", desc: "默认插槽,显示列表项主体内容", version: "" },
        {
          param: "action",
          desc:
            "列表操作组，根据布局<code>vertical</code>的不同, 位置在卡片底部或者最右侧",
          version: ""
        },
        {
          param: "extra",
          desc:
            "额外内容, 通常用在<code>vertical=true</code> 的情况下, 展示右侧内容; 默认情况展示在列表元素最右侧",
          version: ""
        }
      ],
      itemMetaSlotTableData: [
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
  },
  mounted() {
    // this.$refs.fq_index_kline.init();
  },
  computed: {},
  methods: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
// @import "../assets/less/pages/index.less";
</style>
