<!--demo页面-->
<template>
  <div class="yo-button-page">
    <!-- <h1 :id="'Button'+$lang('按钮')"><a :href="'#'+'Button'+$lang('按钮')" class="yo-text yolianjie"></a>{{'Button'+$lang('按钮')}}</h1> -->

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
    <!-- 加载中按钮状态 -->
    <yo-example demo="basic/button/loading">
      <template v-slot:desc>
        <yo-desc :title="$lang('加载中按钮状态')">
          <p
            v-html="
              $lang(
                `添加 <code>loading</code> 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。`
              )
            "
          ></p>
        </yo-desc>
      </template>
    </yo-example>

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

    <yo-example demo="basic/button/style">
      <template v-slot:desc>
        <yo-desc :title="$lang('按钮样式')">
          <p
            v-html="
              $lang(
                `通过设置 <code>round|square|circle|ghost|plain</code> 属性即可让按钮呈现不一样的样式。`
              )
            "
          ></p>
        </yo-desc>
      </template>
    </yo-example>

    <yo-example demo="basic/button/color">
      <template v-slot:desc>
        <yo-desc :title="$lang('按钮颜色')">
          <p
            v-html="
              $lang(
                `通过设置 <code>backgroundColor</code> 属性即可改变按钮的背景颜色，支持正常的颜色值如<code>white,black,#000,rgb(0,0,0),rgba(0,0,0,.1)</code>`
              )
            "
          ></p>
          <p
            v-html="
              $lang(
                `通过设置 <code>color</code> 属性即可改变按钮的文字颜色，支持正常的颜色值如<code>white,black,#000,rgb(0,0,0),rgba(0,0,0,.1)</code>`
              )
            "
          ></p>
        </yo-desc>
      </template>
    </yo-example>

    <yo-example demo="basic/button/link">
      <template v-slot:desc>
        <yo-desc :title="$lang('按钮链接')">
          <p
            v-html="
              $lang(`通过设置 to 可以实现点击按钮直接跳转，支持传入 vue-router 对象。`)
            "
          ></p>
          <p v-html="$lang(`设置 replace 则不会保存历史记录。`)"></p>
          <p v-html="$lang(`设置 target，会跟 a 标签一样的行为。`)"></p>
        </yo-desc> </template
    ></yo-example>

    <!-- <yo-anchor :text="$lang('图标按钮')"></yo-anchor>
    <yo-example demo="basic/button/button8"></yo-example> -->

    <!-- <yo-anchor :text="$lang('文字按钮')"></yo-anchor>
    <yo-example demo="basic/button/button9"></yo-example> -->

    <!-- <h3>Button 参数</h3> -->
    <!-- <yo-anchor text="API" :size="24"></yo-anchor> -->

    <yo-anchor :text="'Button ' + $lang('属性')" :size="24"></yo-anchor>
    <p
      v-html="
        $lang(
          '支持原生 <code>button</code> 的其他所有属性。注意使用了<code>to</code>属性的时候相当于 <code>a</code>标签'
        )
      "
    ></p>
    <table class="table">
      <tr>
        <th v-for="item in propsTableKeys" :key="item.code">{{ $lang(item.name) }}</th>
        <!-- <th>说明</th>
        <th>类型</th> -->
        <!-- <th>可选值</th> -->
        <!-- <th>默认值</th>
        <th>版本</th> -->
      </tr>
      <tr v-for="item in propsTableData" :key="item.param">
        <td>{{ item.param }}</td>
        <td v-html="item.desc"></td>
        <td>{{ item.type }}</td>
        <td>{{ item.default || "-" }}</td>
        <td>{{ item.version || "-" }}</td>
      </tr>
    </table>

    <!-- <h3>Button 事件</h3> -->

    <yo-anchor :text="'Button ' + $lang('事件')" :size="24"></yo-anchor>
    <table class="table">
      <tr>
        <th v-for="item in eventTableKeys" :key="item.code">{{ $lang(item.name) }}</th>
        <!-- <th>参数</th>
        <th>说明</th>
        <th>返回值</th> -->
      </tr>
      <tr v-for="item in eventTableData" :key="item.param">
        <td>{{ item.param }}</td>
        <td v-html="item.desc"></td>
        <td>{{ item.callback || "-" }}</td>
        <td>{{ item.version || "-" }}</td>
      </tr>
      <!-- <tr>
        <td>click</td>
        <td>点击事件</td>
        <td>Event</td>
      </tr> -->
    </table>

    <!-- <h3>Button Slots</h3> -->

    <yo-anchor :text="'Button ' + $lang('插槽')" :size="24"></yo-anchor>
    <table class="table">
      <tr>
        <th v-for="item in slotTableKeys" :key="item.code">{{ $lang(item.name) }}</th>
        <!-- <th>名称</th>
        <th>说明</th> -->
      </tr>
      <tr v-for="item in slotTableData" :key="item.param">
        <td>{{ item.param }}</td>
        <td v-html="item.desc"></td>
        <!-- <td>{{ item.callback || "-" }}</td> -->
        <td>{{ item.version || "-" }}</td>
      </tr>
    </table>

    <!-- <h3>ButtonGroup 参数</h3> -->
    <yo-anchor :text="'ButtonGroup ' + $lang('属性')" :size="24"></yo-anchor>
    <table class="table">
      <tr>
        <th v-for="item in propsTableKeys" :key="item.code">{{ $lang(item.name) }}</th>
      </tr>
      <tr v-for="item in groupPropsTableData" :key="item.param">
        <td>{{ item.param }}</td>
        <td v-html="item.desc"></td>
        <td>{{ item.type }}</td>
        <td>{{ item.default || "-" }}</td>
        <td>{{ item.version || "-" }}</td>
      </tr>
      <!-- <tr>
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
      </tr> -->
    </table>

    <!-- <h3>ButtonGroup Slots</h3> -->
    <yo-anchor :text="'ButtonGroup ' + $lang('插槽')" :size="24"></yo-anchor>
    <table class="table">
      <tr>
        <th v-for="item in slotTableKeys" :key="item.code">{{ $lang(item.name) }}</th>
        <!-- <th>名称</th>
        <th>说明</th> -->
      </tr>
      <tr v-for="item in groupSlotTableData" :key="item.param">
        <td>{{ item.param }}</td>
        <td v-html="item.desc"></td>
        <!-- <td>{{ item.callback || "-" }}</td> -->
        <td>{{ item.version || "-" }}</td>
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
      return {
        propsTableKeys: [
          { code: "param", name: "参数" },
          { code: "desc", name: "说明" },
          { code: "type", name: "类型" },
          { code: "default", name: "默认值" },
          { code: "version", name: "版本" },
        ],
        eventTableKeys: [
          { code: "param", name: "事件名称" },
          { code: "desc", name: "说明" },
          { code: "callback", name: "回调参数" },
          { code: "version", name: "版本" },
        ],
        slotTableKeys: [
          { code: "param", name: "插槽名称" },
          { code: "desc", name: "说明" },
          // { code: "callback", name: "回调参数" },
          { code: "version", name: "版本" },
        ],
        propsTableData: [
          {
            param: "type",
            desc: `设置按钮类型,可选值为<code>primary</code>,<code>dashed</code>,<code>text</code>,<code>info</code>,<code>success</code>,<code>warning</code>,<code>error</code>或者不设置`,
            type: "String",
            default: "",
            version: "",
          },
          {
            param: "ghost",
            desc: "幽灵属性，使按钮背景透明",
            type: "Boolean",
            default: "false",
            version: "",
          },
          {
            param: "disabled",
            desc: "按钮失效状态",
            type: "Boolean",
            default: "false",
            version: "",
          },
          {
            param: "circle",
            desc: "按钮是否圆形或椭圆显示",
            type: "Boolean",
            default: "false",
            version: "",
          },
          {
            param: "round",
            desc: "按钮是否圆角显示",
            type: "Boolean",
            default: "false",
            version: "",
          },
          {
            param: "square",
            desc: "按钮是否方角显示",
            type: "Boolean",
            default: "false",
            version: "",
          },
          {
            param: "plain",
            desc: "按钮是否朴素显示",
            type: "Boolean",
            default: "false",
            version: "",
          },
          {
            param: "border",
            desc: "按钮是否显示边框",
            type: "Boolean",
            default: "true",
            version: "",
          },
          {
            param: "block",
            desc: "按钮是否占一行显示,开启后，按钮的长度为 100%",
            type: "Boolean",
            default: "false",
            version: "",
          },
          {
            param: "loading",
            desc: "是否加载中，将覆盖原有的图标",
            type: "Boolean",
            default: "false",
            version: "",
          },
          {
            param: "loadingName",
            desc:
              "是否加载中，内置loading样式,可选值为<code>loading</code>、<code>loading1</code>、<code>loading2</code>、<code>loading3</code>、<code>loading4</code>以及对应的loading图标类名",
            type: "String",
            default: "loading",
            version: "",
          },
          {
            param: "size",
            desc:
              "按钮大小，可选值有<code>l</code>、<code>m</code>、<code>s</code>、<code>xs</code>,不填则为默认大小",
            type: "String",
            default: "",
            version: "",
          },
          {
            param: "icon",
            desc:
              "左侧引用图标名称,可选值为对应的图标类，若为内部icon类，则可省略<code>yo-icon-</code>前缀",
            type: "String",
            default: "",
            version: "",
          },
          {
            param: "rightIcon",
            desc:
              "右侧引用图标名称,可选值为对应的图标类，若为内部icon类，则可省略<code>yo-icon-</code>前缀",
            type: "String",
            default: "",
            version: "",
          },
          {
            param: "to",
            desc: "跳转的链接，支持 vue-router 对象",
            type: "String | Object",
            default: "",
            version: "",
          },
          {
            param: "replace",
            desc: "路由跳转时，开启 replace 将不会向 history 添加新记录",
            type: "Boolean",
            default: "false",
            version: "",
          },
          {
            param: "target",
            desc: "路由跳转时，相当于 a 链接的 target 属性",
            type: "String",
            default: "_self",
            version: "",
          },
          {
            param: "nativeType",
            desc:
              "设置 button 原生的 type 值，可选值请参考<a class='yo-btn yo-btn-text' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type' target='_blank'>HTML 标准</a>,可选值有<code>button </code>、<code>submit</code>、<code>reset</code>",
            type: "String",
            default: "button",
            version: "",
          },
        ],
        eventTableData: [
          {
            param: "click",
            desc: "点击事件,点击按钮时的回调",
            callback: "(event)=>void",
            version: "",
          },
        ],
        slotTableData: [
          { param: "-", desc: "默认插槽", version: "" },
          { param: "left", desc: "左侧插槽", version: "" },
          { param: "right", desc: "右侧插槽", version: "" },
        ],
        groupSlotTableData: [{ param: "-", desc: "默认插槽", version: "" }],
        groupPropsTableData: [
          {
            param: "round",
            desc: "按钮组圆角",
            type: "Boolean",
            default: "false",
            version: "",
          },
          {
            param: "vertical",
            desc: "是否纵向排列按钮组",
            type: "Boolean",
            default: "false",
            version: "",
          },
          {
            param: "reverse",
            desc: "是否将按钮组反向",
            type: "Boolean",
            default: "false",
            version: "",
          },
          {
            param: "size",
            desc:
              "按钮大小，可选值有<code>l</code>、<code>m</code>、<code>s</code>、<code>xs</code>,不填则为默认大小",
            type: "String",
            default: "false",
            version: "",
          },
        ],
      };
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
