/** * author: eric * create at: 2021-04-22 16:17:20 */
<template>
  <div class="yo-collapse" :class="yoClasses" :style="yoStyles">
    <slot></slot>
  </div>
</template>
<script>
import Props from "../../../common/props";
const prefix = "yo-collapse";
export default {
  name: "yCollapse",
  //存放 数据
  data() {
    let { value } = this;
    return {
      //存放选中的name
      nameList: value || []
    };
  },
  //存放 子组件
  // template: '',
  // 注意： 组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
  // props 中的数据，都是只读的，无法重新赋值
  props: {
    // 前激活的面板的 name，可以使用 v-model 双向绑定
    value: {
      type: [Array, String, Number],
      default: ""
    },
    //   卡片尺寸
    size: {
      type: String,
      default: "",
      validator(value) {
        return Props.size.indexOf(value) > -1;
      }
    },
    // 是否开启手风琴模式，开启后每次至多展开一个面板
    accordion: {
      type: Boolean,
      default: false
    },
    // 是否开启简洁模式
    simple: {
      type: Boolean,
      default: false
    },
    // 边框圆角
    borderRadius: {
      type: [Number, String],
      default: 0
    },
    // 带边框风格的折叠面板
    border: {
      type: Boolean,
      default: true
    },
    // 是否隐藏图标
    iconHide: {
      type: Boolean,
      default: false
    },
    // 图标大小
    iconSize: {
      type: Number,
      default: 12
    },
    // 自定义切换图标
    icon: {
      type: String,
      default: "right"
    },
    // 设置图标位置： left, right
    iconPosition: {
      type: String,
      default: "left"
    },
    // 销毁折叠隐藏的面板
    destroyInactivePanel: {
      type: Boolean,
      default: false
    }
  }, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  computed: {
    yoClasses() {
      let { listSize, vertical, border, split, hover, shadow } = this;
      return {
        [`${prefix}-${listSize}`]: !!listSize,
        [`${prefix}-vertical`]: !!vertical,
        [`${prefix}-split`]: !!split,
        [`${prefix}-border`]: !!border && !shadow,
        [`${prefix}-shadow`]: !!shadow,
        [`${prefix}-hover`]: !!hover && !shadow
      };
    },
    // yoBodyStyles() {
    //   let { padding } = this;
    //   let yoStyles = {
    //     padding: `${isNaN(padding) ? padding : padding + "px"}`
    //   };
    //   return yoStyles;
    // },
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

  provide() {
    return {
      yCollapse: this
    };
  },
  //存放 方法
  methods: {
    init() {},
    //返回面板所有的name
    changeEvent(name) {
      let { nameList, accordion } = this;
      if (!accordion) {
        //手风琴则只有一个选中
        nameList.push(name);
      } else {
        nameList = name;
      }
      this.$emit("change", nameList);
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
