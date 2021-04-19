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

    <yo-example demo="basic/button/type">
      <template v-slot:desc>
        <yo-desc :title="$lang('按钮类型')">
          {{
            $lang(
              "按钮有7种类型:默认按钮、主题色按钮、虚线框按钮、文本按钮、信息按钮、成功按钮、警告按钮、错误按钮"
            )
          }}
        </yo-desc>
      </template>
    </yo-example>
  </div>
</template>

<script>
import fqCommon from "@/common/common";
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
