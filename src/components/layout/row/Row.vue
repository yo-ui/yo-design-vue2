/** * author: eric * create at: 2019-12-21 13:26:02 */

<script>
const prefixCls = "yo-row";
// const template = `<div :class="rowClasses" :style="rowStyles">
//   <slot></slot>
// </div>`;

const Props = {
  type: ["flex"],
  align: ["top", "middle", "bottom"],
  justify: ["start", "end", "center", "space-around", "space-between"],
  direction: ["row", "row-reverse", "column", "column-reverse"]
};
export default {
  name: "YRow",
  //存放 数据
  data: function() {
    return {};
  },
  //存放 子组件
  // template: '',
  render(h) {
    let { tag = "" } = this;
    return h(
      tag,
      {
        class: this.rowClasses,
        style: this.rowStyles
      },
      this.$slots.default
    );
  },
  // 注意： 组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
  // props 中的数据，都是只读的，无法重新赋值
  props: {
    tag: {
      type: String,
      default: "div"
    },
    type: {
      type: String,
      validator(value) {
        return Props.type.indexOf(value) != -1;
      }
    },
    align: {
      type: String,
      validator(value) {
        return Props.align.indexOf(value) != -1;
      }
    },
    justify: {
      type: String,
      validator(value) {
        return Props.justify.indexOf(value) != -1;
      }
    },
    direction: {
      type: String,
      validator(value) {
        return Props.direction.indexOf(value) != -1;
      }
    },
    //间隔
    gutter: {
      type: Number,
      default: 0
    },
    gutterX: {
      type: Number,
      default: 0
    },
    gutterY: {
      type: Number,
      default: 0
    }
  }, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  //提供给子组件使用
  provide() {
    return {
      yoRow: this
    };
  },
  computed: {
    rowClasses() {
      return [
        {
          [`${prefixCls}`]: true,
          [`${prefixCls}-${this.type}`]: !!this.type
          // [`${prefixCls}-${this.type}-${this.align}`]: !!this.align,
          // [`${prefixCls}-${this.type}-${this.direction}`]: this.direction,
          // [`${prefixCls}-${this.type}-${this.justify}`]: !!this.justify
        }
      ];
    },
    rowStyles() {
      let style = {};
      let { gutter, gutterX, gutterY, type, direction, justify, align } = this;
      if (gutter) {
        if (typeof gutter === "object") {
          for (let i in gutter) {
            let leftTop = `-${gutter[i] / 2}px`;
            style[`--yo-row-gutter-${i}-x`] = leftTop;
            style[`--yo-row-gutter-${i}-y`] = leftTop;
          }
        } else {
          let leftTop = `-${gutter / 2}px`;
          style.marginLeft = leftTop;
          style.marginRight = leftTop;
          style.marginTop = leftTop;
          style.marginBottom = leftTop;
        }
      }
      if (gutterX) {
        if (typeof gutterX === "object") {
          for (let i in gutterX) {
            let leftTop = `-${gutterX[i] / 2}px`;
            style[`--yo-row-gutter-${i}-x`] = leftTop;
          }
        } else {
          let leftTop = `-${gutterX / 2}px`;
          style.marginLeft = leftTop;
          style.marginRight = leftTop;
        }
      }
      if (gutterY) {
        if (typeof gutterY === "object") {
          for (let i in gutterY) {
            let leftTop = `-${gutterY[i] / 2}px`;
            style[`--yo-row-gutter-${i}-y`] = leftTop;
          }
        } else {
          let leftTop = `-${gutterY / 2}px`;
          style.marginTop = leftTop;
          style.marginBottom = leftTop;
        }
      }
      if (type == "flex") {
        if (direction) {
          style["flex-direction"] = direction;
          style["-ms-flex-direction"] = direction;
        }
        if (justify) {
          style["justify-content"] = justify;
          style["-ms-flex-pack"] = justify;
        }
        if (align) {
          style["align-items"] = align;
          style["-ms-flex-align"] = align;
        }
      }
      return style;
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
