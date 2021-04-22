/** * author: eric * create at: 2021-04-22 16:27:26 */
<template>
  <div
    role="tablist"
    class="yo-collapse-item"
    :class="yoClasses"
    :style="yoStyles"
  >
    <!-- 面板头内容 -->
    <template
      v-if="
        $scopedSlots.header ||
          header ||
          $scopedSlots.icon ||
          headerIcon ||
          $scopedSlots.extra
      "
    >
      <div
        role="button"
        class="yo-collapse-item-header"
        @click="clickEvent(name)"
      >
        <template v-if="headerIconPosition === 'left'">
          <div
            class="yo-collapse-item-header-icon"
            v-if="$scopedSlots.icon || headerIcon"
          >
            <slot name="icon" v-if="$scopedSlots.icon"></slot>
            <i
              :class="'yo-icon-' + headerIcon + ' ' + headerIcon"
              :style="{ 'font-size': headerIconSize + 'px' }"
              v-else
            ></i>
          </div>
        </template>
        <div
          class="yo-collapse-item-header-title"
          v-if="$scopedSlots.header || header"
        >
          <slot name="header" v-if="$scopedSlots.header"></slot>
          <template v-else>
            {{ header }}
          </template>
        </div>

        <!--  自定义渲染每个面板右上角的内容-->
        <div class="yo-collapse-item-extra" v-if="$scopedSlots.extra">
          <slot name="extra"></slot>
        </div>
        <template v-if="headerIconPosition === 'right'">
          <div
            class="yo-collapse-item-header-icon"
            v-if="$scopedSlots.icon || headerIcon"
          >
            <slot name="icon" v-if="$scopedSlots.icon"></slot>
            <i
              :class="'yo-icon-' + headerIcon + ' ' + headerIcon"
              :style="{ 'font-size': headerIconSize + 'px' }"
              v-else
            ></i>
          </div>
        </template>
      </div>
    </template>
    <slot></slot>
    <!--  自定义渲染每个面板下面的内容-->
    <ul class="yo-collapse-item-action" v-if="$scopedSlots.action">
      <slot name="action"></slot>
    </ul>
  </div>
</template>
<script>
import Props from "../../../common/props";
export default {
  name: "yCollapseItem",
  //存放 数据
  data: function() {
    return {};
  },
  //存放 子组件
  // template: '',
  // 注意： 组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
  // props 中的数据，都是只读的，无法重新赋值
  props: {
    //禁用后的面板展开与否将无法通过用户交互改变
    disabled: {
      type: Boolean,
      default: false
    },
    //   被隐藏时是否渲染 DOM 结构
    forceRender: {
      type: Boolean,
      default: false
    },
    //   卡片尺寸
    size: {
      type: String,
      default: "",
      validator(value) {
        return Props.size.indexOf(value) > -1;
      }
    },
    //   面板头内容
    header: {
      type: String,
      default: ""
    },
    // 是否隐藏图标
    iconHide: {
      type: Boolean,
      default: false
    },
    // 图标大小
    iconSize: {
      type: Number
    },
    // 自定义切换图标
    icon: {
      type: String,
      default: ""
    },
    // 设置图标位置： left, right
    iconPosition: {
      type: String,
      default: ""
    },
    //   当前面板的 name，与 Collapse的value对应，不填为索引
    name: {
      type: [String, Number],
      default: ""
    }
  }, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  computed: {
    headerIcon() {
      return this.icon || (this.yCollapse || {}).icon;
    },
    headerIconSize() {
      return this.iconSize || (this.yCollapse || {}).iconSize;
    },
    headerIconPosition() {
      return this.iconPosition || (this.yCollapse || {}).iconPosition;
    },
    headerIconHide() {
      return this.iconHide || (this.yCollapse || {}).iconHide;
    }
  },
  inject: ["yCollapse"],
  //存放 方法
  methods: {
    init() {},
    clickEvent(name) {
      this.yCollapse?.changeEvent(name);
    }
  },
  //存放 过滤器
  filters: {},
  //自定义 私有指令
  directives: {},
  /*  生命周期函数  */
  //创建期间
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.init();
  },
  //运行期间
  beforeUpdate() {},
  updated() {},
  //销毁时期
  beforeDestroy() {},
  destroyed() {}
};
</script>
