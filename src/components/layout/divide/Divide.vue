<template>
  <div class="yo-divide" :class="yoClasses" :style="yoStyles">
    <span class="yo-divide-text" :style="yoTextStyles" v-if="$slots.default">
      <slot></slot>
    </span>
    <div class="yo-divide-line" :style="yoLineStyles"></div>
  </div>
</template>
<script>
/**
 *  author: eric
 *  create at: 2021-04-28 11:48:45
 */
import Props from "../../../common/props";
const { colorMap } = Props;
const prefix = "yo-divide";
export default {
  name: "yDivide",
  //存放 数据
  data() {
    return {};
  },
  //存放 子组件
  // template: '',
  // 注意： 组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
  // props 中的数据，都是只读的，无法重新赋值
  props: {
    // 类型，可选值为 horizontal 或 vertical
    type: {
      type: String,
      default: "horizontal"
    },
    // 分割线颜色，可选值为primary,info,success,warning,error 以及标准颜色值
    color: {
      type: String,
      default: ""
    },
    //   分割线尺寸
    size: {
      type: String,
      default: "",
      validator(value) {
        return Props.size.indexOf(value) > -1;
      }
    },
    //文字位置
    textAlign: {
      type: [String, Number],
      default: "left"
    },
    //是否虚线显示
    dashed: {
      type: Boolean,
      default: false
    },
    //是否点线显示
    dotted: {
      type: Boolean,
      default: false
    },
    //文字显示为正文样式
    plain: {
      type: Boolean,
      default: false
    }
  }, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  computed: {
    yoClasses() {
      let { dashed, dotted, plain, type, size } = this;
      return {
        [`${prefix}-dashed`]: !!dashed,
        [`${prefix}-dotted`]: !!dotted,
        [`${prefix}-plain`]: !!plain,
        [`${prefix}-${size}`]: !!size,
        [`${prefix}-${type}`]: !!type
      };
    },
    yoStyles() {
      let { textAlign } = this;
      let yoStyles = {};
      if (
        textAlign === "left" ||
        textAlign === "center" ||
        textAlign === "right"
      ) {
        yoStyles["text-align"] = textAlign;
      }
      return yoStyles;
    },
    yoTextStyles() {
      let { textAlign } = this;
      let yoStyles = {};
      if (
        !(
          textAlign === "left" ||
          textAlign === "center" ||
          textAlign === "right"
        )
      ) {
        yoStyles["margin-left"] = `${
          isNaN(textAlign) ? textAlign : textAlign + "px"
        }`;
      }
      return yoStyles;
    },
    yoLineStyles() {
      let { color } = this;
      let yoStyles = {
        "border-color": colorMap[color] || color
      };
      return yoStyles;
    }
  },
  //存放 方法
  methods: {
    init() {
      //   console.log(colorMap);
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
