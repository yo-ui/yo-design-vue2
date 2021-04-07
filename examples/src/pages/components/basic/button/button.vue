<!--demo页面-->
<template>
  <div class="yo-button-page">
    <!-- <h1 :id="'Button'+$lang('按钮')"><a :href="'#'+'Button'+$lang('按钮')" class="yo-font yolianjie"></a>{{'Button'+$lang('按钮')}}</h1> -->

    <yo-anchor :text="'Button' + $lang('按钮')" :size="30"></yo-anchor>
    <p>
      {{ $lang("基础组件，用于开始一个即时操作，触发业务逻辑时使用。") }}
    </p>
    <p
      class="alert"
      v-html="$lang('注意：非 template/render 模式下，需使用 <code>y-button</code>。')"
    ></p>

    <yo-anchor :text="$lang('组件注册')" :size="24"></yo-anchor>
    <yo-code type="javascript" src="/components/demos/basic/button/use.js"></yo-code>
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

    <yo-example demo="basic/button/group">
      <template v-slot:desc>
        <yo-desc :title="$lang('按钮组')">
          <p
            v-html="
              $lang(`将多个<code>Button</code>放入到<code>ButtonGroup</code>容器中`)
            "
          ></p>
          <p
            v-html="
              $lang(`通过设置 size 为 l、m、s、xs 分别把按钮组合设为大、小尺寸。若不设置
          size，则尺寸为中。 `)
            "
          ></p>
          <p v-html="$lang(`以按钮组的方式出现，常用于多项类似操作。 `)"></p>
        </yo-desc>
      </template>
    </yo-example>

    <yo-example demo="basic/button/disabled">
      <template v-slot:desc>
        <yo-desc :title="$lang('不可用按钮')">
          <p
            v-html="
              $lang(
                `添加 <code>disabled</code> 属性即可让按钮处于不可用状态，同时按钮样式也会改变。`
              )
            "
          ></p>
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="basic/button/ghost">
      <template v-slot:desc>
        <yo-desc :title="$lang('幽灵按钮')">
          <p
            v-html="
              $lang(`幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。`)
            "
          ></p>
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="basic/button/icon">
      <template v-slot:desc>
        <yo-desc :title="$lang('图标按钮')">
          <p
            v-html="
              $lang(
                `当需要在 <code>Button</code> 内嵌入 <code>Icon </code>时，可以设置 <code>icon</code> 属性，或者直接在 <code>Button</code> 内使用 <code>Icon</code> 组件。`
              )
            "
          ></p>
          <p
            v-html="
              $lang(
                `如果想控制 <code>Icon </code>具体的位置，只能直接使用 <code>Icon</code> 组件，而非 <code>icon </code>属性。`
              )
            "
          ></p>
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="basic/button/button2"></yo-example>

    <yo-example demo="basic/button/button3"></yo-example>

    <yo-example demo="basic/button/button4"></yo-example>

    <yo-example demo="basic/button/size">
      <template v-slot:desc>
        <yo-desc :title="$lang('按钮尺寸')">
          <p v-html="$lang(`按钮有大、中、小、特小以及默认五种尺寸。`)"></p>
          <p
            v-html="
              $lang(
                `通过设置 size 为 <code>l</code>(large)、<code>m</code>(Medium)、<code>s</code>(small)、<code>xs</code>(extra small)分别把按钮设为大、中、小、特小尺寸。若不设置 <code>size</code>，则尺寸为默认。`
              )
            "
          ></p>
        </yo-desc>
      </template>
    </yo-example>

    <yo-example demo="basic/button/block">
      <template v-slot:desc>
        <yo-desc :title="$lang('block 按钮')">
          <p v-html="$lang(`block属性将使按钮适合其父宽度。`)"></p>
        </yo-desc>
      </template>
    </yo-example>

    <!-- <yo-anchor :text="$lang('图标按钮')"></yo-anchor>
    <yo-example demo="basic/button/button8"></yo-example> -->

    <yo-anchor :text="$lang('文字按钮')"></yo-anchor>
    <yo-example demo="basic/button/button9"></yo-example>

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
<style lang="less">
  @import (reference) "../../../../assets/less/common.less";
  .yo-button-page {
    .demo {
      .yo-btn {
        .mb(10);
      }
    }
    .bg-gray {
      .p(20px);
      .bc(#bcccce);
    }
    .pb20 {
      .pb(20);
    }
    .pb10 {
      .pb(10);
    }
  }
</style>
