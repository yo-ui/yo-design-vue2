<template>
  <div class="yo-component-input-page">
    <yo-anchor :text="'Input ' + $lang('输入框')" size="30"></yo-anchor>
    <p>
      {{ $lang("通过鼠标或键盘输入内容，是最基础的表单域的包装。") }}
    </p>
    <p
      class="alert"
      v-html="
        $lang('注意：非 template/render 模式下，需使用 <code>y-input</code>。')
      "
    ></p>

    <!-- <h3>基本调用</h3> -->
    <yo-anchor :text="$lang('组件注册')" :size="24"></yo-anchor>
    <yo-code
      type="javascript"
      src="/components/demos/form/input/use.js"
    ></yo-code>
    <yo-anchor :text="$lang('代码示例')" :size="24"></yo-anchor>

    <yo-example demo="form/input/normal">
      <template v-slot:desc>
        <yo-desc :title="$lang('基本使用')">
          {{ $lang("基本使用。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="form/input/preAppend">
      <template v-slot:desc>
        <yo-desc :title="$lang('前缀和后缀图标')">
          {{ $lang("在输入框上添加前缀或后缀图标。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="form/input/group">
      <template v-slot:desc>
        <yo-desc :title="$lang('复合型输入框')">
          {{ $lang("通过前置和后置的 slot 可以实现复合型的输入框。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="form/input/loading">
      <template v-slot:desc>
        <yo-desc :title="$lang('搜索框 loading ')">
          {{ $lang("用于search事件的时候展示 loading") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="form/input/search">
      <template v-slot:desc>
        <yo-desc :title="$lang('输入框组合 ')">
          {{
            $lang(
              "输入框的组合展现。注意：使用 compact 模式时，不需要通过 Col 来控制宽度。"
            )
          }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="form/input/clear">
      <template v-slot:desc>
        <yo-desc :title="$lang('带移除图标')">
          {{ $lang("带移除图标的输入框，点击图标删除所有内容。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="form/input/autosize">
      <template v-slot:desc>
        <yo-desc :title="$lang('适应文本高度的文本域 ')">
          {{
            $lang(
              "属性适用于 textarea 节点，并且只有高度会自动变化。另外 autoSize 可以设定为一个对象，指定最小行数和最大行数。"
            )
          }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="form/input/clear">
      <template v-slot:desc>
        <yo-desc :title="$lang('搜索框 ')">
          {{ $lang("带有搜索按钮的输入框。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="form/input/size">
      <template v-slot:desc>
        <yo-desc :title="$lang('输入框尺寸')">
          {{
            $lang(
              "我们为输入框定义了七种尺寸（超级大、加大、大、一般、默认、小、超小），高度分别为 45px、40px、35px、30px、25px、20px和 15px。"
            )
          }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="form/input/textarea">
      <template v-slot:desc>
        <yo-desc :title="$lang('文本域')">
          {{ $lang("用于多行输入。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="form/input/password">
      <template v-slot:desc>
        <yo-desc :title="$lang('密码框 ')">
          {{ $lang("密码框 ") }}
        </yo-desc>
      </template>
    </yo-example>

    <!-- <h3>其他</h3>
    <yo-example
      root="/components/demos/"
      demo="form/input/input2"
      ext=".vue"
    ></yo-example> -->

    <yo-anchor :text="'Input ' + $lang('属性')" :size="24"></yo-anchor>
    <p
      v-html="
        $lang(
          '支持原生 <code>button</code> 的其他所有属性。注意使用了<code>to</code>属性的时候相当于 <code>a</code>标签'
        )
      "
    ></p>
    <table class="table">
      <tr>
        <th v-for="item in propsTableKeys" :key="item.code">
          {{ $lang(item.name) }}
        </th>
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

    <yo-anchor :text="'Input ' + $lang('事件')" :size="24"></yo-anchor>
    <table class="table">
      <tr>
        <th v-for="item in eventTableKeys" :key="item.code">
          {{ $lang(item.name) }}
        </th>
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

    <yo-anchor :text="'Input ' + $lang('插槽')" :size="24"></yo-anchor>
    <table class="table">
      <tr>
        <th v-for="item in slotTableKeys" :key="item.code">
          {{ $lang(item.name) }}
        </th>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      propsTableData: [],
      eventsTableData: [],
      slotsTableData: []
    };
  }
};
</script>
<style lang="less" scoped>
@import "../../../../assets/less/pages/components/form/input/input.less";
</style>
