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
    <yo-code type="javascript" src="/components/demos/basic/grid/use.js"></yo-code>
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

    <!-- <h3>其他</h3>
    <yo-example demo="basic/grid/grid2"></yo-example> -->

    <!-- <h3>Row 参数</h3> -->
    <yo-anchor :text="'Row ' + $lang('参数')" :size="24"></yo-anchor>
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
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>gutter</td>
        <td>栅格间距，单位 px，左右平分</td>
        <td>Number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>type</td>
        <td>布局模式，可选值为<code>flex</code>或不选，在现代浏览器下有效</td>
        <td>String</td>
        <td><code>flex</code></td>
        <td>-</td>
      </tr>
      <tr>
        <td>align</td>
        <td>flex 布局下的垂直对齐方式</td>
        <td>String</td>
        <td>
          <code>stretch</code
          >、<code>center</code>、<code>flex-start</code>、<code>flex-end</code>、<code>baseline</code>、<code>initial</code>、<code
            >inherit</code
          >
          <br />
          (可参照css justify-content属性)
          <!-- <code>top</code>、<code>middle</code>、<code>bottom</code> -->
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>direction</td>
        <td>flex 布局下的区块方向方式，可选值为</td>
        <td>String</td>
        <td>
          <code>row</code
          >、<code>row-reverse</code>、<code>column</code>、<code>column-reverse</code>、<code>initial</code>、<code
            >inherit</code
          >
          <br />
          (可参照css flex-direction属性)<!-- <code>row</code>、<code> column</code>、<code> row-reverse</code>、<code> column-reverse</code> -->
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>justify</td>
        <td>flex 布局下的水平排列方式</td>
        <td>String</td>
        <td>
          <code>flex-start</code
          >、<code>flex-end</code>、<code>center</code>、<code>space-between</code>、<code>space-around</code>、<code>initial</code>、<code
            >inherit</code
          >
          <br />
          (可参照css justify-content属性)
          <!-- <code>start</code>、<code>end</code>、<code>center</code>、<code>space-around</code>、<code>space-between</code> -->
        </td>
        <td>-</td>
      </tr>
    </table>

    <h3>Col 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
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
      </tr>
    </table>

    <!-- <h3>Grid 方法</h3> -->

    <yo-anchor :text="'Col ' + $lang('参数')" :size="24"></yo-anchor>
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
    </table>
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
          { code: "version", name: "版本" },
        ],
      };
    },
  };
</script>
<style lang="less">
  @import "../../../../assets/less/pages/components/basic/grid/grid.less";
</style>
