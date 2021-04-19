<template>
  <li class="yo-list-item" :class="yoClasses" :style="yoStyles">
    <slot></slot>
  </li>
</template>

<script>
// const Props = {
//   // 'xxl','xl', 'lg', 'md', 'sm', 'xs'
//   // response:
//   size: ["xxl", "xl", "l", "m", "s", "xs"]
// };
import Props from "../../../common/props";
const prefix = "yo-list-item";
export default {
  name: "yListItem",
  components: {},
  directives: {},
  props: {
    // // 是否是最后一个元素
    // isLasted: {
    //   type: Boolean,
    //   default: false
    // },
    // border: {
    //   type: Boolean,
    //   default: false
    // },
    // // 边框圆角
    // borderRadius: {
    //   type: [Number, String],
    //   default: 0
    // },
    // //水平布局
    // horizontal: {
    //   type: Boolean,
    //   default: false
    // },
    // // 垂直布局
    // vertical: {
    //   type: Boolean,
    //   default: true
    // },
    // // 列表头
    // header: {
    //   type: String
    // },
    // //列表底
    // footer: {
    //   type: String
    // },
    size: {
      type: String,
      default: "",
      validator(value) {
        return Props.size.indexOf(value) > -1;
      }
    }
  },
  inject: ["yList"],
  data() {
    return {};
  },
  computed: {
    // 列表项尺寸，可继承于父级List 以及配置项size
    itemSize() {
      return this.size || (this.yList && this.yList.size) || this.$YOUI.size;
    },
    yoClasses() {
      return {
        [`${prefix}-${this.itemSize}`]: !!this.itemSize
      };
    },
    yoStyles() {
      // let { borderRadius } = this;
      let yoStyles = {
        // "border-radius": `${
        //   isNaN(borderRadius) ? borderRadius : borderRadius + "px"
        // }`
      };
      return yoStyles;
    }
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped></style>
