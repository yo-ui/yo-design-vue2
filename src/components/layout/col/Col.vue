/** * author: eric * create at: 2019-12-21 13:25:54 */
<script>
const prefixCls = "yo-col";
// const template = `<div :class="colClasses" :style="colStyles">
//   <slot></slot>
// </div>`;
export default {
  name: "YCol",
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
        class: this.colClasses,
        style: this.colStyles
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
    span: [Number, String],
    flex: [Number, String],
    //偏移
    offset: [Number, String],
    //栅格排序
    pull: [Number, String],
    push: [Number, String],
    //栅格排序  flex 排序
    order: [Number, String],
    //响应式布局用  遵循Bootstrap Responsive breakpoints https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
    xxl: [Number, Object],
    xxxl: [Number, Object]
  }, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  inject: {
    yoRow: {
      default: ""
    }
  },
  computed: {
    colClasses() {
      let { span: width, offset, order, push, pull } = this;
      // let width = this.span;
      // let offset = this.offset;
      // let order = this.offset;
      // let push = this.push;
      // let pull = this.pull;
      let classList = [`${prefixCls}`];
      classList.push({
        [`${prefixCls}-${width}`]: width,
        [`${prefixCls}-order-${order}`]: order,
        [`${prefixCls}-offset-${offset}`]: offset,
        [`${prefixCls}-pull-${pull}`]: pull,
        [`${prefixCls}-push-${push}`]: push
      });

      for (let size of ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"]) {
        let val = this[size];
        if (val) {
          if (typeof val === "object") {
            for (let i in val) {
              if (i === "span") {
                classList.push(`${prefixCls}-${size}-${val[i]}`);
              } else {
                classList.push(`${prefixCls}-${size}-${i}-${val[i]}`);
              }
            }
          } else {
            classList.push(`${prefixCls}-${size}-${this[size]}`);
          }
        }
      }
      return classList;
    },
    colStyles() {
      let style = {};
      let styleType = "padding";
      let { flex, rowType, rowGutter, rowGutterX, rowGutterY } = this;
      if (flex) {
        style.flex = flex;
      }
      if (rowType == "flex") {
        styleType = "margin";
      }

      if (rowGutter) {
        if (typeof rowGutter === "object") {
          for (let i in rowGutter) {
            let leftTop = rowGutter[i] / 2 + "px";
            style[`--yo-col-gutter-${styleType}-${i}-x`] = leftTop;
            style[`--yo-col-gutter-${styleType}-${i}-y`] = leftTop;
          }
        } else {
          let leftTop = rowGutter / 2 + "px";
          style[`${styleType}Left`] = leftTop;
          style[`${styleType}Right`] = leftTop;
          style[`${styleType}Top`] = leftTop;
          style[`${styleType}Bottom`] = leftTop;
        }
      }

      if (rowGutterX) {
        if (typeof rowGutterX === "object") {
          for (let i in rowGutterX) {
            let leftTop = rowGutterX[i] / 2 + "px";
            style[`--yo-col-gutter-${styleType}-${i}-x`] = leftTop;
          }
        } else {
          let leftTop = rowGutterX / 2 + "px";
          style[`${styleType}Left`] = leftTop;
          style[`${styleType}Right`] = leftTop;
        }
      }

      if (rowGutterY) {
        if (typeof rowGutterY === "object") {
          for (let i in rowGutterY) {
            let leftTop = rowGutterY[i] / 2 + "px";
            style[`--yo-col-gutter-${styleType}-${i}-y`] = leftTop;
          }
        } else {
          let leftTop = rowGutterY / 2 + "px";
          style[`${styleType}Top`] = leftTop;
          style[`${styleType}Bottom`] = leftTop;
        }
      }

      // if (this.order) {
      //   style[`-webkit-box-ordinal-group`] = parseInt(this.order || 0) + 1;
      //   style[`-ms-flex-order`] = this.order;
      //   style[`order`] = this.order;
      // }

      return style;
    },
    rowType() {
      return (this.yoRow || {}).type || "";
    },
    rowGutter() {
      return (this.yoRow || {}).gutter || "";
    },
    rowGutterX() {
      return (this.yoRow || {}).gutterX || "";
    },
    rowGutterY() {
      return (this.yoRow || {}).gutterY || "";
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
