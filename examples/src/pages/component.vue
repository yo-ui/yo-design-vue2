<!--demo页面-->
<template>
  <div class="yo-component-page">
    <yo-header code="component"></yo-header>
    <div ref="yo_container" class="flex-content">
      <div ref="yo_left" class="yo-left">
        <div class="ad-box">
          <!-- 广告框 -->
          <img src="https://file.iviewui.com/asd/asd-coding5.png" alt="" />
        </div>
        <div class="menu-box">
          <!-- <h2 class="title" v-text="$lang('介绍')"></h2> -->
          <router-link
            class="link"
            :to="{ name: 'componentGuide' }"
            :class="{ active: code == 'componentGuide' }"
          >
            {{ $lang("介绍") }}
          </router-link>
          <router-link
            class="link"
            :to="{ name: 'componentGuide' }"
            :class="{ active: code == 'componentGuide' }"
          >
            {{ $lang("入门") }}
          </router-link>
          <router-link
            class="link"
            :to="{ name: 'componentGuide' }"
            :class="{ active: code == 'componentGuide1' }"
          >
            {{ $lang("快速上手") }}
          </router-link>
          <router-link
            class="link"
            :to="{ name: 'componentGuide' }"
            :class="{ active: code == 'componentGuide1' }"
          >
            {{ $lang("定制主题") }}
          </router-link>
          <router-link
            class="link"
            :to="{ name: 'componentGuide' }"
            :class="{ active: code == 'componentGuide1' }"
          >
            {{ $lang("更新日志") }}
          </router-link>
          <router-link
            class="link"
            :to="{ name: 'componentGuide' }"
            :class="{ active: code == 'componentGuide1' }"
          >
            {{ $lang("在vue-cli中使用") }}
          </router-link>
          <router-link
            class="link"
            :to="{ name: 'componentGuide' }"
            :class="{ active: code == 'componentGuide2' }"
          >
            {{ $lang("国际化") }}
          </router-link>
          <router-link
            class="link"
            :to="{ name: 'componentGuide' }"
            :class="{ active: code == 'componentGuide1' }"
          >
            {{ $lang("常见问题") }}
          </router-link>
          <router-link
            class="link"
            :to="{ name: 'componentGuide' }"
            :class="{ active: code == 'componentGuide1' }"
          >
            {{ $lang("支持我们") }}
          </router-link>
          <a class="title" :to="{}">{{ $lang("组件") }}</a>
          <a class="sub">{{ $lang("基础组件") }}</a>

          <ul class="list">
            <router-link
              class="link"
              :to="{ name: 'componentFont' }"
              :class="{ active: code == 'componentFont' }"
            >
              {{ $lang("字体 Font") }}
            </router-link>
            <router-link
              class="link"
              :to="{ name: 'componentColor' }"
              :class="{ active: code == 'componentColor' }"
            >
              {{ $lang("颜色 Color") }}
            </router-link>
            <router-link
              class="link"
              :to="{ name: 'componentButton' }"
              :class="{ active: code == 'componentButton' }"
            >
              {{ $lang("按钮 Button") }}
            </router-link>
            <router-link
              class="link"
              :to="{ name: 'componentLink' }"
              :class="{ active: code == 'componentLink' }"
            >
              {{ $lang("文字链接 Link") }}
            </router-link>
            <router-link
              class="link"
              :to="{ name: 'componentIcon' }"
              :class="{ active: code == 'componentIcon' }"
            >
              {{ $lang("图标 Icon") }}
            </router-link>
          </ul>

          <a class="sub">{{ $lang("布局") }}</a>
          <ul class="list">
            <router-link
              class="link"
              :to="{ name: 'componentGrid' }"
              :class="{ active: code == 'componentGrid' }"
            >
              {{ $lang("栅格") }}
            </router-link>
            <router-link
              class="link"
              :to="{ name: 'componentLayout' }"
              :class="{ active: code == 'componentLayout' }"
            >
              {{ $lang("布局") }}
            </router-link>
          </ul>
          <a class="sub">{{ $lang("表单组件") }}</a>
          <ul class="list">
            <router-link
              class="link"
              :to="{ name: 'componentInput' }"
              :class="{ active: code == 'componentInput' }"
            >
              {{ $lang("输入框") }}
            </router-link>
            <router-link
              class="link"
              :to="{ name: 'componentRadio' }"
              :class="{ active: code == 'componentRadio' }"
            >
              {{ $lang("单选框") }}
            </router-link>
            <router-link
              class="link"
              :to="{ name: 'componentCheckbox' }"
              :class="{ active: code == 'componentCheckbox' }"
            >
              {{ $lang("复选框") }}
            </router-link>
          </ul>
          <a class="sub">{{ $lang("导航组件") }}</a>
          <ul class="list">
            <router-link
              class="link"
              :to="{ name: 'componentBreadcrumb' }"
              :class="{ active: code == 'componentBreadcrumb' }"
            >
              {{ $lang("面包屑") }}
            </router-link>
          </ul>
          <a class="sub">{{ $lang("其它 (Other)") }}</a>
          <ul class="list">
            <router-link
              class="link"
              :to="{ name: 'componentDivider' }"
              :class="{ active: code == 'componentDivider' }"
            >
              {{ $lang("分割线 Divider") }}
            </router-link>
          </ul>
        </div>
      </div>
      <div class="yo-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import yoCommon from "@/common/common";
  export default {
    name: "yo-component-page",
    components: {
      //组件传入
      yoHeader: () =>
        import(/* webpackChunkName: "yo-component-header" */ "@com/common/yo-header"),
    },
    data() {
      return {
        // code:'componentGuide',
      };
    },
    mounted() {
      // this.initEvent();
    },
    computed: {
      code() {
        return this.$route.name || "componentGuide";
      },
    },
    beforeDestroy() {
      // let that = this;
      // window.removeEventListener("scroll", that.scrollEvent);
    },
    methods: {
      // initEvent() {
      //   let that = this;
      //   window.addEventListener("scroll", that.scrollEvent);
      // },
      // scrollEvent() {
      //   let that = this;
      //   let yo_container = that.$refs.yo_container;
      //   let yo_left = that.$refs.yo_left;
      //   if (window.scrollY > 20) {
      //     yoCommon.addClass(yo_container, "fixed");
      //     yo_container.style.paddingLeft = yo_left.offsetWidth + "px";
      //   } else {
      //     yoCommon.removeClass(yo_container, "fixed");
      //     yo_container.style.paddingLeft = 0;
      //   }
      // },
    },
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../assets/less/pages/component.less";
</style>
