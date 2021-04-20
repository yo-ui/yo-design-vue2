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
  </div>
</template>

<script>
// import fqCommon from "@/common/common";
export default {
  name: "fq-layout-list-page",
  components: {},
  data() {
    return {};
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
