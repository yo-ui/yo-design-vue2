<!--这里是头部组件-->
<template>
  <div class="yo-404-com">
    <div class="circle"></div>
    <div class="picture" :class="{ error: pageType == 'error' }">
      <span v-if="pageType == 'error'">{{ $lang(errorCode) }}</span>
    </div>
    <div class="title">{{ $lang(errorText) }}</div>
    <a class="sub-title" href="/">{{ $lang("回到首页") }}</a>
  </div>
</template>

<script>
export default {
  name: "yo-404-com",
  data() {
    return { pageType: "error" };
  },
  // props: [],
  components: {},
  props: {
    type: { type: String, default: "error" },
    errorCode: { type: String, default: "404" },
    errorText: { type: String, default: "..页面没有找到.." }
  },
  mounted() {
    let { $route } = this;
    let { query = {} } = $route;
    let { type = "" } = query || {};
    this.pageType = type || this.type;
  },
  methods: {}
};
</script>
<style lang="less">
@import "../assets/less/pages/notFound.less";
</style>
