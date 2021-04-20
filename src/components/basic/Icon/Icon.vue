/** * author: eric * create at: 2021-04-08 16:22:07 */
<template>
  <i class="yo-icon" :class="yoClasses" :style="yoStyles"></i>
</template>
<script>
const prefix = "yo-icon";
const colorMap = {
  primary: "var(--yo-primary)",
  info: "var(--yo-info)",
  success: "var(--yo-success)",
  warning: "var(--yo-warning)",
  error: "var(--yo-error)"
};
export default {
  name: "YIcon",
  //存放 数据
  data: function() {
    return {};
  },
  //存放 子组件
  // template: '',
  // 注意： 组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
  // props 中的数据，都是只读的，无法重新赋值
  props: {
    size: {
      type: [Number, String],
      default: 12
    },
    color: {
      type: String,
      default: "#333"
    },
    type: {
      type: String,
      required: true
    },
    rotate: {
      type: [Number, String],
      default: 0
    }
  }, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  computed: {
    yoClasses() {
      let { type = "" } = this;
      return {
        [`${prefix}-${type}`]: !!type,
        [`${type}`]: !!type
      };
    },
    //行内样式
    yoStyles() {
      let { size, color = "", rotate = 0 } = this;
      return {
        "font-size": `${parseFloat(size)}px`,
        color: colorMap[color] || color,
        transform: `rotate(${rotate}deg)`
      };
    }
  },
  //存放 方法
  methods: {
    init() {}
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
