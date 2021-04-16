<template>
  <div class="yo-component-grid-page">
    <yo-anchor :text="'Grid' + $lang('栅格')" size="18"></yo-anchor>
    <p>
      {{
        $lang(
          "我们采用标准的24格布局容器，利用容器完成简单的网络布局。栅格组件（Row、Col）可以自定义一行内的列数，及各列所占比例，宫格组件则是将每行等分为宽度相等的列，甚至可以将单元格设置为正方形，并支持动态适应屏幕，就像九宫格一样"
        )
      }}
    </p>
    <p
      class="alert"
      v-html="
        $lang(
          '注意：非 template/render 模式下，需使用 <code>y-row</code>,<code>y-col</code>。'
        )
      "
    ></p>

    <yo-anchor :text="$lang('组件注册')" :size="24"></yo-anchor>
    <yo-code
      type="javascript"
      src="/components/demos/basic/grid/use.js"
    ></yo-code>
    <yo-anchor :text="$lang('代码示例')" :size="24"></yo-anchor>

    <!-- <p>说明</p> -->

    <!-- <h3>基本调用</h3> -->
    <yo-example demo="basic/grid/normal">
      <template v-slot:desc>
        <yo-desc :title="$lang('基础栅格')">
          {{
            $lang(
              "从堆叠到水平排列。使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。"
            )
          }}
        </yo-desc>
      </template>
    </yo-example>

    <yo-example demo="basic/grid/gutter">
      <template v-slot:desc>
        <yo-desc :title="$lang('栅格间隔')">
          <span
            v-html="
              $lang(
                '分栏之间存在间隔。栅格分左右上下间隔、左右间隔、上下间隔三种类型,Row 组件 提供 <code>gutter</code> 属性来指定每一栏之间的间隔，默认间隔为 0。我们推荐使用 <code>(16+8n)px</code> 作为栅格间隔。(n 是自然数) 如果要支持响应式，可以写成<code>{ xs: 8, sm: 16, md: 24, lg: 32 }</code>。如果只需要垂直或者水平间距，可以使用<code>gutterX,gutterY</code>'
              )
            "
          ></span>
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="basic/grid/group">
      <template v-slot:desc>
        <yo-desc :title="$lang('混合布局')">
          {{
            $lang("通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。")
          }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="basic/grid/offset">
      <template v-slot:desc>
        <yo-desc :title="$lang('分栏偏移')">
          {{ $lang("支持偏移指定的栏数。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="basic/grid/align">
      <template v-slot:desc>
        <yo-desc :title="$lang('对齐方式')">
          {{ $lang("通过 flex 布局来对分栏进行灵活的对齐。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="basic/grid/flex">
      <template v-slot:desc>
        <yo-desc :title="$lang('flex 填充')">
          {{ $lang("Col 提供 flex 属性以支持填充") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="basic/grid/order">
      <template v-slot:desc>
        <yo-desc :title="$lang('栅格排序')">
          {{
            $lang(
              "列排序。通过使用order属性或( push 和 pull 类)就可以很容易的改变列（column）的顺序。"
            )
          }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="basic/grid/responsive">
      <template v-slot:desc>
        <yo-desc :title="$lang('响应式布局')">
          <span
            v-html="
              $lang(`参照了 Bootstrap 的
          响应式设计，预设了七个响应尺寸：<code>xs</code>、<code>sm</code>、<code>md</code>、<code
            >lg </code
          >、<code> xl</code
          >、<code>xxl</code>、<code>xxxl</code>。<code>span</code>、<code>pull</code>、<code>push</code>、<code>offset</code>、<code
            >order</code
          >
          属性可以通过内嵌到<code> xs</code
          >、<code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code>、<code>xxl</code>、<code>xxxl</code>属性中来使用。
          其中 <code>:xs=&quot;6&quot; </code>相当于 <code>:xs=&quot;{ span: 6 }</code>&quot;。`)
            "
          ></span>
        </yo-desc>
      </template>
    </yo-example>

    <!-- <h3>其他</h3>
    <yo-example demo="basic/grid/grid2"></yo-example> -->

    <!-- <h3>Row 参数</h3> -->
    <yo-anchor :text="'Row ' + $lang('属性')" :size="24"></yo-anchor>
    <table class="table">
      <tr>
        <th v-for="item in propsTableKeys" :key="item.code">
          {{ $lang(item.name) }}
        </th>
      </tr>
      <tr v-for="item in propsTableData" :key="item.param">
        <td>{{ item.param }}</td>
        <td v-html="item.desc"></td>
        <td>{{ item.type }}</td>
        <td>{{ item.default || "-" }}</td>
        <td>{{ item.version || "-" }}</td>
      </tr>
    </table>

    <!-- <h3>Col 属性</h3> -->

    <yo-anchor :text="'Col ' + $lang('属性')" :size="24"></yo-anchor>
    <table class="table">
      <tr>
        <th v-for="item in propsTableKeys" :key="item.code">
          {{ $lang(item.name) }}
        </th>
      </tr>
      <tr v-for="item in colPropsTableData" :key="item.param">
        <td>{{ item.param }}</td>
        <td v-html="item.desc"></td>
        <td>{{ item.type }}</td>
        <td>{{ item.default || "-" }}</td>
        <td>{{ item.version || "-" }}</td>
      </tr>
      <!-- <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr> -->
      <!-- <tr>
        <td>span</td>
        <td>栅格向左移动格数</td>
        <td>Number|String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>order</td>
        <td>栅格向左移动格数</td>
        <td>Number|String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>offset</td>
        <td>栅格向左移动格数</td>
        <td>Number|String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>pull</td>
        <td>栅格向左移动格数</td>
        <td>Number|String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>push</td>
        <td>栅格向右移动格数</td>
        <td>Number|String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr class="del">
        <td>xs</td>
        <td><code>&lt;576px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
        <td>Number|Object</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr class="del">
        <td>sm</td>
        <td><code>≥7576px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
        <td>Number|Object</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr class="del">
        <td>md</td>
        <td><code>≥768px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
        <td>Number|Object</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr class="del">
        <td>lg</td>
        <td><code>≥992px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
        <td>Number|Object</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr class="del">
        <td>xl</td>
        <td><code>≥1200px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
        <td>Number|Object</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr class="del">
        <td>xxl</td>
        <td><code>≥1600px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
        <td>Number|Object</td>
        <td>-</td>
        <td>-</td>
      </tr> -->
    </table>

    <!-- <h3>Grid 方法</h3> -->

    <!-- <yo-anchor :text="'Col ' + $lang('参数')" :size="24"></yo-anchor>
    <table class="table">
      <tr>
        <th>方法</th>
        <th>说明</th>
        <th>参数</th>
        <th>返回值</th>
      </tr>
      <tr>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>

    <h3>Grid 事件</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>返回值</th>
      </tr>
      <tr>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      propsTableKeys: [
        { code: "param", name: "参数" },
        { code: "desc", name: "说明" },
        { code: "type", name: "类型" },
        { code: "default", name: "默认值" },
        { code: "version", name: "版本" }
      ],
      propsTableData: [
        {
          param: "gutter",
          desc: "栅格间距，单位 px，上下左右平分",
          type: "Number|Object",
          default: "0",
          version: ""
        },
        {
          param: "gutterX",
          desc: "栅格间距，单位 px，左右平分",
          type: "Number|Object",
          default: "0",
          version: ""
        },
        {
          param: "gutterY",
          desc: "栅格间距，单位 px，上下平分",
          type: "Number|Object",
          default: "0",
          version: ""
        },
        {
          param: "type",
          desc: `布局模式，可选值为flex或不选，在 <a class="yo-link yo-link-primary yo-link-underline" href="http://caniuse.com/#search=flex">现代浏览器</a> 下有效`,
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "align",
          desc: `flex 布局下的垂直对齐方式,可选值为<code>flex-start</code>、<code>flex-end</code>、<code>center</code>、<code>space-between</code>、<code>space-around</code>、<code>initial</code>、<code>inherit</code>(可参照css align-item属性)`,
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "direction",
          desc: `flex 布局下的区块方向方式，可选值为<code>row</code
          >、<code>row-reverse</code>、<code>column</code>、<code>column-reverse</code>、<code>initial</code>、<code
            >inherit</code
          >(可参照css flex-direction属性)`,
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "justify",
          desc: `flex 布局下的水平排列方式，可选值为
          <code>flex-start</code
          >、<code>flex-end</code>、<code>center</code>、<code>space-between</code>、<code>space-around</code>、<code>initial</code>、<code
            >inherit</code
          >(可参照css justify-content属性)`,
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "tag",
          desc: `自定义元素标签`,
          type: "String",
          default: "div",
          version: ""
        }
      ],
      colPropsTableData: [
        {
          param: "flex",
          desc: `flex 布局填充`,
          type: "String|Number",
          default: "",
          version: ""
        },
        {
          param: "offset",
          desc: `栅格左侧的间隔格数，间隔内不可以有栅格`,
          type: "Number",
          default: "0",
          version: ""
        },
        {
          param: "order",
          desc: `栅格顺序，<code>flex</code> 布局模式下有效`,
          type: "Number",
          default: "0",
          version: ""
        },
        {
          param: "span",
          desc: `栅格占位格数，为 0 时相当于 display: none`,
          type: "Number",
          default: "0",
          version: ""
        },
        {
          param: "pull",
          desc: `栅格向左移动格数`,
          type: "Number",
          default: "0",
          version: ""
        },
        {
          param: "push",
          desc: `栅格向右移动格数`,
          type: "Number",
          default: "0",
          version: ""
        },
        {
          param: "xs",
          desc: `<code><576px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象,(例如： <code> {span: 4, offset: 4}</code>)`,
          type: "Number|Object",
          default: "",
          version: ""
        },
        {
          param: "sm",
          desc: `<code>≥576px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象,(例如： <code> {span: 4, offset: 4}</code>)`,
          type: "Number|Object",
          default: "",
          version: ""
        },
        {
          param: "md",
          desc: `<code>≥768px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象,(例如： <code> {span: 4, offset: 4}</code>)`,
          type: "Number|Object",
          default: "",
          version: ""
        },
        {
          param: "lg",
          desc: `<code>≥992px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象,(例如： <code> {span: 4, offset: 4}</code>)`,
          type: "Number|Object",
          default: "",
          version: ""
        },
        {
          param: "xl",
          desc: `<code>≥1200px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象,(例如： <code> {span: 4, offset: 4}</code>)`,
          type: "Number|Object",
          default: "",
          version: ""
        },
        {
          param: "xxl",
          desc: `<code>≥1600px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象,(例如： <code> {span: 4, offset: 4}</code>)`,
          type: "Number|Object",
          default: "",
          version: ""
        },
        {
          param: "xxxl",
          desc: `<code>≥1920px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象`,
          type: "Number|Object",
          default: "",
          version: ""
        },
        {
          param: "tag",
          desc: `自定义元素标签`,
          type: "String",
          default: "div",
          version: ""
        }
      ]
    };
  }
};
</script>
<style lang="less">
@import "../../../../assets/less/pages/components/basic/grid/grid.less";
</style>
