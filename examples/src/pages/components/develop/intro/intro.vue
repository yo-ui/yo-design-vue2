<!--demo页面-->
<template>
  <div class="fq-develop-intro-page">
    <yo-anchor :text="$lang('介绍 Yo-Desing-Vue')" size="30"></yo-anchor>
    <p>
      {{ $lang("本节将介绍如何在项目中使用 YOUI") }}
    </p>
    <yo-anchor :text="$lang('支持环境')" size="24"></yo-anchor>

    <p>
      <span
        v-html="
          $lang(
            `现代浏览器和 IE9 及以上（需要 <a href='https://www.antdv.com/docs/vue/getting-started-cn/#%E5%85%BC%E5%AE%B9%E6%80%A7'>polyfills</a>）。`
          )
        "
      ></span
      ><br />
      <!-- {{ $lang("支持服务端渲染。") }}<br /> -->
      {{ $lang("Electron") }}
    </p>
    <table class="table">
      <tr>
        <th v-for="item in envTableKeys" :key="item.code">
          {{ $lang(item.name) }}
        </th>
      </tr>
      <tr v-for="item in envTableData" :key="item.param">
        <td>{{ item["IE"] }}</td>
        <td v-html="item['FireFox']"></td>
        <td>{{ item["Chrome"] }}</td>
        <td>{{ item["Safari"] || "-" }}</td>
        <td>{{ item["Opera"] || "-" }}</td>
      </tr>
    </table>

    <yo-anchor :text="$lang('版本')" size="24"></yo-anchor>
    <p>
      {{ $lang("稳定版:") }}
      <a href="https://www.npmjs.com/package/yo-design-vue"
        ><img src="https://img.shields.io/badge/npm-v1.0.1-green"
      /></a>
    </p>
    <yo-anchor :text="$lang('完整引入')"></yo-anchor>
    <p>{{ $lang("在 main.js 中写入以下内容：") }}</p>
    <yo-code type="javascript" src="/components/demos/develop/intro/import.js">
    </yo-code>
    <p>
      {{
        $lang(
          "以上代码便完成了 YOUI 的引入。需要注意的是，样式文件需要单独引入。"
        )
      }}
    </p>
    <yo-anchor :text="$lang('按需引入')">
      <a :href="'#' + $lang('按需引入')" class="yo-text yolianjie"></a
      >{{ $lang("按需引入") }}
    </yo-anchor>
    <p>
      {{ $lang("借助") }} babel-plugin-component，{{
        $lang("我们可以只引入需要的组件，以达到减小项目体积的目的。")
      }}
    </p>
    <p>{{ $lang("首先，安装") }} babel-plugin-component：</p>
    <yo-code>
      npm install babel-plugin-component -D
    </yo-code>
    <p>
      {{ $lang("然后，将 .babelrc 修改为：") }}
    </p>

    <yo-code src="/components/demos/develop/intro/babelrc"></yo-code>
    <!-- <yo-code>
      { "presets": [["es2015", { "modules": false }]], "plugins": [ [
      "component", { "libraryName": "youi", "styleLibraryName": "theme-chalk" }
      ] ] }
    </yo-code> -->
    <p>
      {{
        $lang(
          "接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容："
        )
      }}
    </p>

    <yo-code src="/components/demos/develop/intro/single.js"></yo-code>
    <!-- <yo-code>
      import Vue from 'vue'; import { Button, Select } from 'youi'; import App
      from './App.vue'; Vue.component(Button.name, Button);
      Vue.component(Select.name, Select); /* 或写为 * Vue.use(Button) *
      Vue.use(Select) */ new Vue({ el: '#app', render: h => h(App) });
    </yo-code> -->
    <p>
      {{
        $lang("完整组件列表和引入方式（完整组件列表以 components.json 为准）")
      }}
    </p>

    <yo-code src="/components/demos/develop/intro/full.js"></yo-code>
    <!-- <yo-code>
    </yo-code> -->
    <yo-anchor :text="$lang('全局配置')"></yo-anchor>
    <p>
      {{
        $lang(
          "在引入 YOUI 时，可以传入一个全局配置对象。该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）。按照引入 YOUI 的方式，具体操作如下："
        )
      }}
    </p>
    <p>
      {{ $lang("完整引入 YOUI：") }}
    </p>

    <yo-code src="/components/demos/develop/intro/full-config.js"></yo-code>
    <!-- <yo-code>
      import Vue from 'vue'; import YOUI from 'youi'; Vue.use(YOUI, { size:
      'small', zIndex: 3000 });
    </yo-code> -->
    <p>
      {{ $lang("按需引入 YOUI：") }}
    </p>

    <yo-code src="/components/demos/develop/intro/single-config.js"></yo-code>
    <!-- <yo-code>
      import Vue from 'vue'; import { Button } from 'youi'; Vue.prototype.$YOUI
      = { size: 'small', zIndex: 3000 }; Vue.use(Button);
    </yo-code> -->
    <p>
      {{
        $lang(
          "按照以上设置，项目中所有拥有 size 属性的组件的默认尺寸均为 'small'，弹框的初始 z-index 为 3000。"
        )
      }}
    </p>
    <yo-anchor :text="$lang('开始使用')"></yo-anchor>
    <p>
      {{
        $lang(
          "至此，一个基于 Vue 和 YOUI 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。"
        )
      }}
    </p>
  </div>
</template>

<script>
// import fqCommon from "@/common/common";
export default {
  name: "fq-develop-intro-page",
  components: {
    //组件传入
    // yoCode:() => import(/* webpackChunkName: "yo-component-code" */ '@com/common/yo-code'),
  },
  data() {
    return {
      envTableKeys: [
        { code: "IE", name: "IE/Edge" },
        { code: "FireFox", name: "FireFox" },
        { code: "Chrome", name: "Chrome" },
        { code: "Safari", name: "Safari" },
        { code: "Opera", name: "Opera" },
        { code: "Electron", name: "Electron" }
      ],
      envTableData: [
        {
          IE: "IE9,IE10,IE11,Edge",
          FireFox: "last 2 versions",
          Chrome: "last 2 versions",
          Safari: "last 2 versions",
          Opera: "last 2 versions",
          Electron: "last 2 versions"
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
