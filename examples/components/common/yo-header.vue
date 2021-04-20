<!--组件 demo -->
<template>
  <header class="header-com">
    <div class="left">
      <div class="logo"></div>
      <span class="title"> Yo Design Vue2.x </span>
      <!-- <div class="search-box">
        <input type="text" :placeholder="$lang('搜索组件')" />
      </div> -->
      <y-input
        size="l"
        class="search-box"
        v-model="keywords"
        :placeholder="$lang('搜索组件')"
        clearable
      ></y-input>
    </div>
    <div class="nav">
      <router-link
        :to="{ name: 'index' }"
        :class="{ active: code == 'index' }"
        >{{ $lang("首页") }}</router-link
      >
      <router-link
        :to="{ name: 'component' }"
        :class="{ active: code == 'component' }"
      >
        {{ $lang("组件") }}
      </router-link>
      <router-link
        :to="{ name: 'themes' }"
        :class="{ active: code == 'themes' }"
        >{{ $lang("主题") }}</router-link
      >
      <router-link :to="{ name: 'run' }" :class="{ active: code == 'run' }"
        >Run</router-link
      >
      <router-link :to="{ name: 'admin' }" :class="{ active: code == 'admin' }">
        {{ $lang("管理后台") }}
      </router-link>
    </div>
  </header>
</template>

<script>
import yoCommon from "@/common/common";
export default {
  name: "header-com",
  data() {
    return {
      keywords: ""
    };
  },
  props: {
    code: {
      type: String,
      default: "index"
    }
  },
  components: {
    //组件传入
  },
  mounted() {},
  computed: {},
  methods: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../src/assets/less/components/common/yo-header.less";
</style>
