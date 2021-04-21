<template>
  <div class="yo-list" :class="yoClasses" :style="yoStyles">
    <div class="yo-list-loading" v-if="loading">
      <slot name="loading" v-if="$scopedSlots.loading"></slot>
      <i class="yo-icon-loading3" v-else></i>
    </div>
    <div class="yo-list-header" v-if="$scopedSlots.header || header">
      <slot name="header" v-if="$scopedSlots.header"> </slot>
      <template v-else>
        {{ header }}
      </template>
    </div>

    <ul class="yo-list-item-box" v-if="$slots.default && isCorrectChilds()">
      <slot></slot>
    </ul>
    <div class="yo-list-footer" v-if="$scopedSlots.footer || footer">
      <slot name="footer" v-if="$scopedSlots.footer"> </slot>
      <template v-else>
        {{ footer }}
      </template>
    </div>
  </div>
</template>

<script>
import Props from "../../../common/props";
const prefix = "yo-list";
// const Props = {
//   // 'xxl','xl', 'lg', 'md', 'sm', 'xs'
//   // response:
//   size:
// };
export default {
  name: "yList",
  components: {},
  directives: {},
  props: {
    //是否显示边框
    border: {
      type: Boolean,
      default: false
    },
    // 边框圆角
    borderRadius: {
      type: [Number, String],
      default: 0
    },
    //反转布局
    reverse: {
      type: Boolean,
      default: false
    },
    //是否显示分割线
    split: {
      type: Boolean,
      default: true
    },
    // 垂直布局
    vertical: {
      type: Boolean,
      default: false
    },
    // 是否在加载中
    loading: {
      type: Boolean,
      default: false
    },
    // 列表头
    header: {
      type: String
    },
    //列表底
    footer: {
      type: String
    },
    size: {
      type: String,
      default: "",
      validator(value) {
        return Props.size.indexOf(value) > -1;
      }
    }
  },
  data() {
    return {};
  },
  //提供给子组件使用
  provide() {
    return {
      yList: this
    };
  },
  computed: {
    //列表尺寸
    listSize() {
      return this.size || this.$YOUI.size;
    },
    yoClasses() {
      let { listSize, vertical, border, split } = this;
      return {
        [`${prefix}-${listSize}`]: !!listSize,
        [`${prefix}-vertical`]: !!vertical,
        [`${prefix}-split`]: !!split,
        [`${prefix}-border`]: border
      };
    },
    yoStyles() {
      let { borderRadius } = this;
      let yoStyles = {
        "border-radius": `${
          isNaN(borderRadius) ? borderRadius : borderRadius + "px"
        }`
      };
      return yoStyles;
    }
  },
  mounted() {
    // console.log("list", this.$slots.default, this.$scopedSlots);
  },
  methods: {
    //判断子节点是否只有ListItem
    isCorrectChilds() {
      let childs = this.$slots.default;
      let { length = 0 } = childs || [];
      while (length-- > 0) {
        let item = childs[length];
        let { componentOptions = {} } = item || {};
        let { tag = "" } = componentOptions || {};
        if (tag !== "y-list-item") {
          console.warn("y-list组件子组件只能为y-list-item");
          return false;
        }
      }
      return true;
    }
  }
};
</script>
