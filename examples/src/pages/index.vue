<!--首页组件-->
<template>
  <div class="yo-index-page">
    <yo-header code="index"></yo-header>
    <!-- <section class="yo-slider"></section> -->
    <div class="content">
      <h1>YO UI</h1>
      <h2>一套基于 Vue.js 的高质量 UI 组件库</h2>
      <div class="btn-box">
        <y-button size="xl" type="primary">开始使用</y-button>
        <y-button
          size="xl"
          icon="github"
          iconSize="16"
          to="https://github.com/yo-ui/yo-design-vue2"
          target="_blank"
          >Github</y-button
        >
        <y-button
          size="xl"
          icon="gitee"
          iconSize="16"
          to="https://gitee.com/yo-ui/yo-design-vue2"
          target="_blank"
          >码云</y-button
        >
        <y-button
          size="xl"
          icon="vscode"
          iconSize="16"
          to="https://marketplace.visualstudio.com/items?itemName=yo-design-vue2-snippets.yo-design-vue2-snippets"
          target="_blank"
          >VSCode 插件</y-button
        >
        <iframe
          style="margin-left: 2px; margin-bottom:-5px;"
          frameborder="0"
          scrolling="0"
          width="150px"
          height="48px"
          src="https://ghbtns.com/github-btn.html?user=yo-ui&repo=yo-design-vue2&type=star&count=true"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "yo-index-page",
  components: {
    //组件传入
    yoHeader: () =>
      import(
        /* webpackChunkName: "yo-component-header" */ "@com/common/yo-header"
      )
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../assets/less/pages/index.less";
</style>
