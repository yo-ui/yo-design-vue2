<!--这里是头部组件-->
<template>
  <div class="fq-404-component">
    <fq-header />
    <div class="content">
      <div class="image-box">
        <img :src="IMAGE_SERVER + '/static/images/common/404.png'" />
      </div>
      <div class="text-box">
        <div class="texts" v-text="$lang('很抱歉，您访问的页面不存在！')"></div>
        <div class="texts">
          <el-button
            class="btns backs"
            @click="$router.back()"
            v-text="$lang('返回上一页')"
          ></el-button>
          <el-button
            class="btns"
            @click="jumpPage('index')"
            v-text="$lang('返回首页')"
          ></el-button>
        </div>
      </div>
    </div>
    <fq-footer />
  </div>
</template>

<script>
// import FqHeader from '@/components/common/fq-header'
// import FqFooter from '@/components/common/fq-footer'
export default {
  name: "fq-404-component",
  data() {
    return {};
  },
  // props: [],
  components: {
    // FqHeader,
    // FqFooter,
  },
  methods: {}
};
</script>
<style lang="less">
@import "../assets/less/pages/notFound.less";
</style>
