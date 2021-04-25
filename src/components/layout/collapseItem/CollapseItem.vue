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
      <div role="button" class="yo-collapse-item-header" @click="clickEvent">
        <template v-if="headerIconPosition === 'left' && !headerIconHide">
          <div
            class="yo-collapse-item-header-icon yo-collapse-item-header-icon-left"
            v-if="$scopedSlots.icon || headerIcon"
          >
            <slot
              name="icon"
              :isActive="isActive"
              v-if="$scopedSlots.icon"
            ></slot>
            <i
              class="yo-collapse-item-header-icon-default"
              :class="'yo-icon-' + headerIcon + ' ' + headerIcon"
              :style="{
                'font-size': isNaN(headerIconSize)
                  ? headerIconSize
                  : headerIconSize + 'px',
                transform: `rotate(${isActive ? 90 : 0}deg)`
              }"
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
        <ul class="yo-collapse-item-extra" v-if="$scopedSlots.extra">
          <slot name="extra"></slot>
        </ul>
        <template v-if="headerIconPosition === 'right' && !headerIconHide">
          <div
            class="yo-collapse-item-header-icon yo-collapse-item-header-icon-right"
            v-if="$scopedSlots.icon || headerIcon"
          >
            <slot name="icon" v-if="$scopedSlots.icon"></slot>
            <i
              class="yo-collapse-item-header-icon-default"
              :class="'yo-icon-' + headerIcon + ' ' + headerIcon"
              :style="{
                'font-size': isNaN(headerIconSize)
                  ? headerIconSize
                  : headerIconSize + 'px',
                transform: `rotate(${isActive ? 90 : 0}deg)`
              }"
              v-else
            ></i>
          </div>
        </template>
      </div>
    </template>
    <div
      class="yo-collapse-item-body"
      :style="yoBodyStyles"
      v-if="!disabled && !(bodyDestroy && !bodyBorder)"
    >
      <div class="yo-collapse-item-content">
        <slot></slot>
      </div>
      <!--  自定义渲染每个面板下面的内容-->
      <ul class="yo-collapse-item-action" v-if="$scopedSlots.action">
        <slot name="action"></slot>
      </ul>
    </div>
  </div>
</template>
<script>
import Props from "../../../common/props";
const prefix = "yo-collapse-item";
export default {
  name: "yCollapseItem",
  //存放 数据
  data() {
    let { name, _uid } = this;
    return {
      // 主体内容上边框是否显示
      bodyBorder: false,
      itemId: name || _uid
    };
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
    destroyInactivePanel: {
      type: Boolean,
      default: false
    },
    //   折叠面板尺寸
    size: {
      type: String,
      default: "",
      validator(value) {
        return Props.size.indexOf(value) > -1;
      }
    },
    //   折叠面板头内容
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
      type: [Number, String]
    },
    // 面板内容区最大高度
    maxHeight: {
      type: [Number, String],
      default: 500
    },
    // 面板内容展开的动画时长  单位为ms
    animationTime: {
      type: [Number, String],
      default: ""
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
    bodyMaxHeight() {
      return this.maxHeight || (this.yCollapse || {}).maxHeight;
    },
    bodyAnimationTime() {
      return this.animationTime || (this.yCollapse || {}).animationTime;
    },
    headerIconSize() {
      return this.iconSize || (this.yCollapse || {}).iconSize;
    },
    headerIconPosition() {
      return this.iconPosition || (this.yCollapse || {}).iconPosition;
    },
    headerIconHide() {
      return this.iconHide || (this.yCollapse || {}).iconHide;
    },
    //面板尺寸
    collapseItemSize() {
      return this.size || (this.yCollapse || {}).size || this.$YOUI.size;
    },
    //简洁模式
    simple() {
      return (this.yCollapse || {}).simple;
    },
    split() {
      return (this.yCollapse || {}).split;
    },
    bodyDestroy() {
      return (
        this.destroyInactivePanel || (this.yCollapse || {}).destroyInactivePanel
      );
    },
    yoClasses() {
      let { isActive, collapseItemSize, simple, split, disabled } = this;
      return {
        [`${prefix}-active`]: isActive,
        [`${prefix}-${collapseItemSize}`]: !!collapseItemSize,
        [`${prefix}-simple`]: !!simple,
        [`${prefix}-disabled`]: !!disabled,
        [`${prefix}-split`]: !!split
        // [`${prefix}-split`]: !!split,
        // [`${prefix}-border`]: !!border && !shadow,
        // [`${prefix}-shadow`]: !!shadow,
        // [`${prefix}-hover`]: !!hover && !shadow
      };
    },
    yoBodyStyles() {
      let {
        yCollapse = {},
        bodyMaxHeight,
        bodyAnimationTime,
        isActive,
        bodyBorder = false
      } = this;
      let maxHeight = 0;
      let animationTime = bodyAnimationTime;
      let { accordion } = yCollapse || {};
      if (isActive) {
        maxHeight = bodyMaxHeight;
      } else {
        if (accordion) {
          //如果为手风琴模式，快速收面板
          animationTime = 0;
          bodyBorder = false;
        }
      }
      let yoStyles = {
        "max-height": isNaN(maxHeight) ? maxHeight : `${maxHeight}px`,
        "transition-duration": `${parseInt(animationTime) / 1000}s`,
        "border-width": `${bodyBorder ? "1px" : 0}`
        // display: `${bodyBorder ? "" : "none"}`
      };
      return yoStyles;
    },
    yoStyles() {
      // let { borderRadius } = this;
      let yoStyles = {
        // "border-radius": `${
        //   isNaN(borderRadius) ? borderRadius : borderRadius + "px"
        // }`
      };
      return yoStyles;
    },
    //当前是否被选中
    isActive() {
      let { yCollapse = {}, itemId } = this;
      let { nameList } = yCollapse || {};
      return nameList.indexOf(itemId) > -1;
    }
  },
  inject: ["yCollapse"],
  //存放 方法
  methods: {
    init() {
      let { isActive } = this;
      if (isActive) {
        this.bodyBorder = true;
      }
      // console.log(this);
    },
    // 切换事件
    clickEvent() {
      let { isActive, bodyAnimationTime, disabled, itemId } = this;
      if (disabled) {
        return;
      }
      if (!isActive) {
        this.bodyBorder = true;
      } else {
        this.bodyBorder = true;
        //如果是折叠，则在动画完成后隐藏上边框
        this._setTimeoutId = setTimeout(() => {
          clearTimeout(this._setTimeoutId);
          this.bodyBorder = false;
          // if(bodyDestroy){//如果参数设置为真，则销毁dom

          // }
        }, bodyAnimationTime - 100 || 1);
      }
      this.yCollapse?.changeEvent(itemId);
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
