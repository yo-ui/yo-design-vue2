<!--demo页面-->
<template>
  <div class="yo-component-button-page">
    <!-- <h1 :id="'Button'+$lang('按钮')"><a :href="'#'+'Button'+$lang('按钮')" class="yo-font yolianjie"></a>{{'Button'+$lang('按钮')}}</h1> -->
    <yo-anchor :text="'Button' + $lang('按钮')" size="18"></yo-anchor>

    <yo-anchor :text="$lang('基本用法')" size="18"></yo-anchor>

    <yo-example demo="basic/button/button1"></yo-example>

    <!-- <yo-example demo="basic/button/button2"></yo-example>

    <yo-example demo="basic/button/button3"></yo-example>

    <yo-example demo="basic/button/button4"></yo-example>

    <yo-example demo="basic/button/button5"></yo-example>

    <yo-example demo="basic/button/button6"></yo-example>

    <yo-example demo="basic/button/button7"></yo-example> -->

    <yo-anchor :text="$lang('图标按钮')"></yo-anchor>
    <yo-example demo="basic/button/button8"></yo-example>

    <yo-anchor :text="$lang('文字按钮')"></yo-anchor>
    <yo-example demo="basic/button/button9"></yo-example>

    <yo-anchor :text="$lang('按钮组')"></yo-anchor>
    <yo-example demo="basic/button/button10"></yo-example>

    <h3>Button 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>type</td>
        <td>按钮类型</td>
        <td>String</td>
        <td>
          <code>primary</code
          >、<code>dashed</code>、<code>text</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code
            >error</code
          >
        </td>
        <td>--</td>
      </tr>
      <tr>
        <td>transparent</td>
        <td>使按钮背景透明</td>
        <td>Boolean</td>
        <td>--</td>
        <td>false</td>
      </tr>
      <tr>
        <td>size</td>
        <td>按钮大小</td>
        <td>String</td>
        <td><code>l</code>、<code>m</code>、<code> s</code>、<code> xs</code></td>
        <td>--</td>
      </tr>
      <tr>
        <td>circle</td>
        <td>按钮是否圆形显示</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>round</td>
        <td>按钮是否圆角显示</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>square</td>
        <td>按钮是否方形显示</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>plain</td>
        <td>按钮是否朴素显示</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>block</td>
        <td>按钮是否占一行显示,开启后，按钮的长度为 100%</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>设置按钮为禁用状态</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>loading</td>
        <td>是否加载中，将覆盖原有的图标</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>loadingName</td>
        <td>是否加载中，内置loading样式</td>
        <td>String</td>
        <td>
          <code>loading</code>、<code> loading1</code>, 、<code> loading2</code>、<code>
            loading3</code
          >、<code> loading4</code>
        </td>
        <td>false</td>
      </tr>
      <tr>
        <td>icon</td>
        <td>左侧引用icon</td>
        <td>String</td>
        <td>(图标页所有的icon name)</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rightIcon</td>
        <td>右侧引用icon</td>
        <td>String</td>
        <td>(图标页所有的icon name)</td>
        <td>-</td>
      </tr>
      <tr>
        <td>stop</td>
        <td>click事件是否stopPropagation</td>
        <td>Boolean</td>
        <td>--</td>
        <td>false</td>
      </tr>
      <tr>
        <td>prevent</td>
        <td>click事件是否preventDefault</td>
        <td>Boolean</td>
        <td>--</td>
        <td>false</td>
      </tr>
      <tr>
        <td>to</td>
        <td>按钮是否显示边框</td>
        <td>String|Object</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>replace</td>
        <td>路由跳转时，开启 replace 将不会向 history 添加新记录</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>target</td>
        <td>路由跳转时，相当于 a 链接的 target 属性</td>
        <td>String</td>
        <td>
          <code>_blank</code>、<code> _parent</code>、<code>_self</code>、<code>
            _top</code
          >、<code>framename</code> (与a标签类似)
        </td>
        <td>false</td>
      </tr>
      <tr>
        <td>no-border</td>
        <td>按钮是否显示边框</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>native-type</td>
        <td>设置button原生的type</td>
        <td>String</td>
        <td><code>button </code>、<code> submit </code>、<code> reset</code></td>
        <td>--</td>
      </tr>
    </table>

    <h3>Button 事件</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>返回值</th>
      </tr>
      <tr>
        <td>click</td>
        <td>点击事件</td>
        <td>Event</td>
      </tr>
    </table>

    <h3>Button Slots</h3>
    <table class="table">
      <tr>
        <th>名称</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>--</td>
        <td>默认内容</td>
      </tr>
      <tr>
        <td>left</td>
        <td>左侧内容</td>
      </tr>
      <tr>
        <td>right</td>
        <td>右侧内容</td>
      </tr>
    </table>

    <h3>ButtonGroup 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>round</td>
        <td>是否是圆角边框</td>
        <td>String</td>
        <td>
          <code>primary</code
          >、<code>dashed</code>、<code>text</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code
            >error</code
          >
        </td>
        <td>--</td>
      </tr>
      <tr>
        <td>size</td>
        <td>按钮大小</td>
        <td>String</td>
        <td><code>l</code>、<code>m</code>、<code> s</code>、<code> xs</code></td>
        <td>--</td>
      </tr>
      <tr>
        <td>vertical</td>
        <td>是否纵向排列按钮组</td>
        <td>Boolean</td>
        <td>--</td>
        <td>false</td>
      </tr>
    </table>

    <h3>ButtonGroup Slots</h3>
    <table class="table">
      <tr>
        <th>名称</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>--</td>
        <td>默认内容</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import yoCommon from "@/common/common";
  export default {
    name: "yo-component-button-page",
    components: {
      //组件传入
    },
    data() {
      return {};
    },
    mounted() {},
    computed: {},
    methods: {},
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  // @import "../assets/less/pages/index.less";
</style>
